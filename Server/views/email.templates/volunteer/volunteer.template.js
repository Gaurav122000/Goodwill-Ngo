module.exports = function (name) {
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
                        <h2 style="text-align: center;">Thanks for your interest</h2>
                        <p style="text-align: center;">Thank you for showing your interest in joining the initiative of making the world a better place together, Your support means the world to us and will make a significant impact on initiative. With your contribution, we're one step closer to achieving our goals and making a positive difference in the lives of those affected.</p>
                        <p style="text-align: center;">Please Wait... :) someone from our team will connect with you within 24 hrs....</p>
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