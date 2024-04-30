// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");
const emailTemplate = require("../views/email.templates/volunteer/volunteer.template");
require("dotenv").config();

//2. Configure email and send it.
async function sendMail2({name,email}){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: process.env.e_id,
            pass: process.env.e_pass,
        },
    });

    let mailOptions = {
        from: 'Gaurav@goodwill.com',
            to: email,
            subject: `Thanks for applying ${name}`,
            html: emailTemplate(name) ,
    };

    try{
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    }catch (err) {
        console.log('Email send failed with error: ' + err);
    }


};


module.exports = sendMail2;
// `<h1>Dear ${name}, Thanks for showing your interest in join our team, someone from the team will reachout to you shortly</h1><img src="your_image_url_here" alt="Image description here">`
