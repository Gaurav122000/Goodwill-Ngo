//const instance = require('../index.js')

require("dotenv").config();
const { assign } = require("nodemailer/lib/shared");
const Razorpay = require('razorpay');

//razor pay
const instance = new Razorpay({
    key_id: process.env.Razor_Key_id,
    key_secret: process.env.Razor_Key_secret,
});

function checkoutController(amount){
    return {
        async checkout(req, res){
            const options = {
                amount: Number(amount*100),  // amount in the smallest currency unit
                currency: "INR",
                receipt: "order_rcptid_11"
            };
            const order = await instance.orders.create(options, function(err, order) {
                 console.log(order);
                //  res.send(order);
                res.status(200).json({
                    success: true,
                    order,
                });

            });
        },

        async paymentVerification(req, res){
            console.log(req.body);
            res.status(200).json({success: true,});
        }
    }

}

module.exports = checkoutController;