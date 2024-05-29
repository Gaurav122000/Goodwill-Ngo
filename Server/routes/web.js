const sendMail = require('../controllers/emailcon.donate');
const sendMail2 = require('../controllers/emailcon.volunteer');
const sendMail3 = require('../controllers/emailcon.contactus');
const DonateModel = require('../models/donate.model');
const VolunteerModel = require('../models/volunteer.model');
const ContactUsModel = require('../models/contact.model');
const BlogModel = require('../models/blog.model');
const GalleryModel = require('../models/gallery.model');
const UserSignup = require('../models/userSignup.model');
const checkoutController = require('../controllers/paymentController');
require("dotenv").config();

// JWT Token

const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET_KEY;

function initRoutes(app) {
    //
    app.post('/donation-form', (req, res) => {
        //console.log(req.body);
        const donateData = req.body;
        DonateModel.create(donateData)
            .then(async donate => {
                console.log(donate);
                // Create a new object with only the properties you want to send back
                const responseDonate = {
                    name: donate.name,
                    email: donate.email,
                    // Include any other properties you want to send back
                };
                res.json(responseDonate);
                await sendMail(donate);
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ message: 'An error occurred while creating the document. ' })
            })
    })

    //for checkout
    app.post('/checkout', (req, res) => {
        const amount = req.body.amount;
        checkoutController(amount).checkout(req,res)
    });

    app.post('/paymentverification', checkoutController().paymentVerification)

    //for key
    app.get("/api/getkey", (req, res) => 
        res.status(200).json({key: process.env.Razor_Key_id})
    );
    // volunteer form api
    app.post('/volunteer-form', (req, res) => {
        const volunteerData = req.body;
        //console.log(volunteerData);
        VolunteerModel.create(volunteerData)
            .then(volunteer => {
                // Create a new object with only the properties you want to send back
                const responseVolunteer = {
                    name: volunteer.name,
                    email: volunteer.email,
                    // Include any other properties you want to send back
                };
                res.json(responseVolunteer);
                sendMail2(volunteer);

            })
            .catch(err => {
                console.error(err); // Log the error for debugging
                res.status(500).json({ message: 'An error occurred while creating the document. ' });
            });
    })

    // contact-us post api
    app.post('/contact-us-form', (req, res) => {
        const contactData = req.body;
        ContactUsModel.create(contactData)
            .then(contact => {
                // Create a new object with only the properties you want to send back
                const responseContact = {
                    name: contact.name,
                    email: contact.email,
                    // Include any other properties you want to send back
                };
                res.json(responseContact);
                sendMail3(contact); // Now 'contact' contains the auto-incremented 'ticketId'
            })
            .catch(err => {
                console.error(err); // Log the error for debugging
                res.status(500).json({ message: 'An error occurred while creating the document.' });
            });
    });


    app.get('/blog', async (req, res) => {
        const blogs = await BlogModel.find({});
        res.json(blogs);
    })

    app.get('/gallery', async (req, res) => {
        const gallery = await GalleryModel.find({});
        res.json(gallery);
    })

    // for Dashboard ++++++++++++++++++++++++++++++++++++++++++++++++++++++

    app.post('/donate', async (req, res) => {
        const { token } = req.body;
        try {
            const user = jwt.verify(token, JWT_SECRET)
            const donate = await DonateModel.find({});
            res.json(donate);
        }
        catch (error) {
            return res.status(404).send({ status: 404, message: "Not Found" })
        }

    })

    app.post('/volunteer', async (req, res) => {
        const { token } = req.body;
        try {
            const user = jwt.verify(token, JWT_SECRET)
            const volunteer = await VolunteerModel.find({});
            res.json(volunteer);
        }
        catch (error) {
            return res.status(404).send({ status: 404, message: "Not Found" })
        }
    })

    app.post('/contact', async (req, res) => {
        // console.log(req.body);
        const { token } = req.body;
        try {
            const user = jwt.verify(token, JWT_SECRET);
            const contact = await ContactUsModel.find({})
            return res.json(contact)
        }
        catch (error) {
            return res.status(404).send({ status: 404, message: "Not Found" })
        }
        // const contact = await ContactUsModel.find({});
        // res.json(contact)
    })

    // Update Value -----------------------------------------------------------

    app.patch('/contact/:ticketId/active', async (req, res) => {
        const { ticketId } = req.params;
        const { active } = req.body;
    
        try {
            const ticket = await ContactUsModel.findOneAndUpdate(
                { ticketId },
                { active },
                { new: true }
            );
    
            if (!ticket) {
                return res.status(404).json({ error: 'Ticket not found' });
            }
    
            res.status(200).json({ message: 'Ticket status updated successfully', ticket });
        } catch (error) {
            console.error('Error updating ticket status:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });
    
    // ---------------------------------------------------------------------------

    app.post('/gallery-post', (req, res) => {
        const galleryData = req.body;
        console.log(galleryData)
        GalleryModel.create(galleryData)
            .then(gallery => req.json(gallery))
            .catch(err => res.json(err))
    })

    app.post('/blog-post', (req, res) => {
        const postBlog = req.body;
        console.log(postBlog)
        BlogModel.create(postBlog)
            .then(blog => res.json(blog))
            .catch(err => res.json(err))
    })

    // SignUp API -----------------------------------------------------
    const validAdminIds = ["12345", "54321", "67890", "11223", "44556"];
    app.post('/signup-post', async (req, res) => {
        const { adminId, fname, lname, email, password, confirmPassword } = req.body;
        // console.log(adminId);

        try {
            if (adminId) {
                if (validAdminIds.includes(adminId)) {
                    if (!fname || !lname || !email || !password || !confirmPassword) {
                        return res.json({ status: "Error" });
                    }

                    const oldEmail = await UserSignup.findOne({ email: email });

                    if (oldEmail) {
                        return res.status(400).send({ status: 400, message: "Email Already Exists" });
                    }

                    if (password !== confirmPassword) {
                        return res.json({ mismatch: "Passwords are not matching" });
                    }

                    await UserSignup.create({
                        adminId,
                        fname,
                        lname,
                        email,
                        password,
                        confirmPassword,
                    });

                    return res.send({ status: "ok" });
                } else {
                    return res.status(404).json({ status: 404, message: "Admin ID does not match" });
                }
            } else {
                return res.status(400).json({ status: 400, message: "Admin ID is required" });
            }
        } catch (error) {
            res.status(500).send({ error });
        }
    })

    // Login API ----------------------------------------------------------------------------

    app.post('/login-post', async (req, res) => {
        const { email, password } = req.body;

        const user = await UserSignup.findOne({ email: email })

        if (!user) {

            return res.status(404).send({ status: 404, error: "User not Exist" })
        }
        if (password == user.password) {
            const token = jwt.sign({ email: user.email }, JWT_SECRET, {
                expiresIn: 50000,
            })
            // console.log(token);
            if (res.status(200)) {
                return res.json({ status: 200, data: token })
            }
            else {

                return res.json({ status: "error" })
            }
        }

        return res.status(400).send({ status: 400, message: "Incorrect Password or Username" })
    })

    app.post('/userData', async (req, res) => {
        const { token } = req.body;
        try {
            const user = jwt.verify(token, JWT_SECRET);
            const useremail = user.email;
            UserSignup.findOne({ email: useremail })
                .then((data) => res.send({ status: "ok", data: data }))
                .catch((error) => res.send(error))
        }
        catch (error) {
            return res.status(404).send({ status: 404, message: "Not Found" })
        }
    })
}

module.exports = initRoutes;