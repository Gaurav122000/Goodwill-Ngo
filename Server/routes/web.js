const sendMail = require('../controllers/emailcon.donate');
const sendMail2 = require('../controllers/emailcon.volunteer');
const sendMail3 = require('../controllers/emailcon.contactus');
const DonateModel = require('../models/donate.model');
const VolunteerModel = require('../models/volunteer.model');
const ContactUsModel = require('../models/contact.model');
const BlogModel = require('../models/blog.model');
const GalleryModel = require('../models/gallery.model');

function initRoutes(app){
    //
    app.post('/donation-form', (req, res) => {
        //console.log(req.body);
        const donateData = req.body;
        DonateModel.create(donateData)
        .then(donate => {
            // Create a new object with only the properties you want to send back
            const responseDonate = {
                name: donate.name,
                email: donate.email,
                // Include any other properties you want to send back
            };
            res.json(responseDonate);
            sendMail(donate);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: 'An error occurred while creating the document. '})
        })
    })

    // volunteer form api
    app.post('/volunteer-form' , (req,res)=>{
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
            res.status(500).json({ message: 'An error occurred while creating the document. '});
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
    

    app.get('/blog', async (req,res)=>{
        const blogs = await BlogModel.find({});
        res.json(blogs);
    })

    app.get('/gallery', async (req,res)=>{
        const gallery = await GalleryModel.find({});
        res.json(gallery);
    })

}

module.exports = initRoutes;