const sendMail = require('../controllers/emailcon.donate');
const sendMail2 = require('../controllers/emailcon.volunteer');
const DonateModel = require('../models/donate.model');
const VolunteerModel = require('../models/volunteer.model');
const ContactUsModel = require('../models/contact.model');
const BlogModel = require('../models/blog.model');
const GalleryModel = require('../models/gallery.model');

function initRoutes(app){
    app.post('/donation-form', (req, res) => {
        //console.log(req.body);
        const donateData = req.body;
        DonateModel.create(donateData)
        .then(
            donationConfim => res.json(donationConfim),
            sendMail(donateData)
        )
        .catch(err => res.json(err))

    })
    
    app.post('/volunteer-form' , (req,res)=>{
        const volunteerData = req.body; 
        //console.log(volunteerData);
        VolunteerModel.create(volunteerData)
        .then(
            volunteer => res.json(volunteer),
            sendMail2(volunteerData)
        )
        .catch(err => res.json(err))
    })
    
    app.post('/contact-us', (req,res)=>{
        const contactData = req.body;
        //console.log(contactData);
        ContactUsModel.create(contactData)
        .then(contact => res.json(contact))
        .catch(err => res.json(err))
    
    })

    app.get('/blog', async (req,res)=>{
        const blogs = await BlogModel.find({});
        res.json(blogs);
    })

    app.get('/gallery', async (req,res)=>{
        const gallery = await GalleryModel.find({});
        res.json(gallery);
    })

    app.post('/blog-post', (req,res)=>{
        const postBlog = req.body;
        console.log(postBlog)
        BlogModel.create(postBlog)
        .then(blog => res.json(blog))
        .catch(err => res.json(err))
    })
}

module.exports = initRoutes;