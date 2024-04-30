// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");
const emailTemplate = require("../views/email.templates/donation/donation.template");
require("dotenv").config();

//2. Configure email and send it.
async function sendMail({name, email, donation, amount, choice, pickup}){


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: process.env.e_id,
            pass: process.env.e_pass,
        },
    });

    

    //2. Configure email content
    
      let mailOptions = {
            from: 'Gaurav@goodwill.com',
            to: email,
            subject: `Thanks for your Kindness ${name}`,
            html: emailTemplate(name, donation, amount, choice, pickup),
        };
    

    //3. send the email with error handling like if wrong user email, smtp server not working etc
    try{
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    }catch (err) {
        console.log('Email send failed with error: ' + err);
    }
};

module.exports = sendMail;

