module.exports = function (name, donation, amount, choice, pickup) {
    if (donation == 'money') {
        return `
        <!DOCTYPE html>
        <html>

        <head>
            <title>Donation Thank You Email</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }

                .container {
                    width: 80%;
                    margin: auto;
                }

                .header {
                    text-align: center;
                    padding: 20px;
                    background-color: #f8f9fa;
                }

                .header img {
                    width: 100%;
                    height: auto;
                }

                .content {
                    margin-top: 20px;
                    display: grid;
                    grid-column: auto;
                }
                
                .footer {
                    margin-top: 20px;
                    padding: 20px;
                    background-color: #f8f9fa;
                    text-align: center;
                }

                .btn {
                    background-color: rgb(28, 178, 28);
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    display: block;
                    margin: auto;
                }

                .btn a {
                    color: white;
                    font-weight: bold;
                    font-size: medium;
                }

                .btn:hover {
                    background-color: darkgreen;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <div class="header">
                    <img src="https://goodwill-ngo.s3.ap-south-1.amazonaws.com/donation-thanks.jpg" alt="donation thanks">
                    <h1>Dear ${name},</h1>
                </div>
                <div class="content">
                        <h2 style="text-align: center;">Thank you for your generous donation!</h2>
                        <p style="text-align: center;">Thanks for your generous donation of ${donation}, Your support means the world to us and will make a significant impact on initiative. With your contribution, we're one step closer to achieving our goals and making a positive difference in the lives of those affected. Your kindness and generosity truly make a difference. Thank you for making a difference!</p>
                        <p style="text-align: center;">We are grateful for your contribution of INR = ${amount}. Your support helps us continue our mission and assist those in our community.</p>
                        <p style="text-align: center;">Thank you for your generosity.</p>
                        <button class="btn"><a href="#" style="text-decoration: none;">Visit Our Site</a></button>
                </div>
                <div class="footer">
                    <p>Best Regards,</p>
                    <p>Your Goodwill Team</p>
                </div>
            </div>
        </body>

    </html>`;
    }
    else if(choice == 'courier'){
        return `
        <!DOCTYPE html>
        <html>

        <head>
            <title>Donation Thank You Email</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }

                .container {
                    width: 80%;
                    margin: auto;
                }

                .header {
                    text-align: center;
                    padding: 20px;
                    background-color: #f8f9fa;
                }

                .header img {
                    width: 100%;
                    height: auto;
                }

                .content {
                    margin-top: 20px;
                    display: grid;
                    grid-column: auto;
                }
                
                .footer {
                    margin-top: 20px;
                    padding: 20px;
                    background-color: #f8f9fa;
                    text-align: center;
                }

                .btn {
                    background-color: rgb(28, 178, 28);
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    display: block;
                    margin: auto;
                }

                .btn a {
                    color: white;
                    font-weight: bold;
                    font-size: medium;
                }

                .btn:hover {
                    background-color: darkgreen;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <div class="header">
                    <img src="https://goodwill-ngo.s3.ap-south-1.amazonaws.com/donation-thanks.jpg" alt="donation thanks">
                    <h1>Dear ${name.toUpperCase()},</h1>
                </div>
                <div class="content">
                        <h2 style="text-align: center;">Thank you for your generous donation!</h2>
                        <p style="text-align: center;">Thanks for your generous donation of ${donation}, Your support means the world to us and will make a significant impact on initiative. With your contribution, we're one step closer to achieving our goals and making a positive difference in the lives of those affected. Your kindness and generosity truly make a difference. Thank you for making a difference!</p>
                        <p style="text-align: center;">Please courier them to this address = ConsultIt greater Noida</p>
                        <p style="text-align: center;">Thank you for your generosity.</p>
                        <button class="btn"><a href="#" style="text-decoration: none;">Visit Our Site</a></button>
                </div>
                <div class="footer">
                    <p>Best Regards,</p>
                    <p>Your Goodwill Team</p>
                </div>
            </div>
        </body>

    </html>`;
    }
    else if(choice == 'pickup'){
        return `
        <!DOCTYPE html>
        <html>

        <head>
            <title>Donation Thank You Email</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }

                .container {
                    width: 80%;
                    margin: auto;
                }

                .header {
                    text-align: center;
                    padding: 20px;
                    background-color: #f8f9fa;
                }

                .header img {
                    width: 100%;
                    height: auto;
                }

                .content {
                    margin-top: 20px;
                    display: grid;
                    grid-column: auto;
                }
                
                .footer {
                    margin-top: 20px;
                    padding: 20px;
                    background-color: #f8f9fa;
                    text-align: center;
                }

                .btn {
                    background-color: rgb(28, 178, 28);
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 8px;
                    display: block;
                    margin: auto;
                }

                .btn a {
                    color: white;
                    font-weight: bold;
                    font-size: medium;
                }

                .btn:hover {
                    background-color: darkgreen;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <div class="header">
                    <img src="https://goodwill-ngo.s3.ap-south-1.amazonaws.com/donation-thanks.jpg" alt="donation thanks">
                    <h1>Dear ${name},</h1>
                </div>
                <div class="content">
                        <h2 style="text-align: center;">Thank you for your generous donation!</h2>
                        <p style="text-align: center;">Thanks for your generous donation of ${donation}, Your support means the world to us and will make a significant impact on initiative. With your contribution, we're one step closer to achieving our goals and making a positive difference in the lives of those affected. Your kindness and generosity truly make a difference. Thank you for making a difference!</p>
                        <p style="text-align: center;">total number = ${pickup} someone from our team contact you shortly</p>
                        <p style="text-align: center;">Thank you for your generosity.</p>
                        <button class="btn"><a href="#" style="text-decoration: none;">Visit Our Site</a></button>
                </div>
                <div class="footer">
                    <p>Best Regards,</p>
                    <p>Your Goodwill Team</p>
                </div>
            </div>
        </body>

    </html>`;
    }
};
