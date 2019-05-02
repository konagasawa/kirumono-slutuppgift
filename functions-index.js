const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

//Set valuse for SMTP 
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: "your-email-address",
        pass: "your-eamil-account-password"
    }
});

exports.sendMail = functions.https.onCall((data, context) => {
    const dest = data.dest; //Passed from CotactScreen.js which is email address that user enters on contact form
    const text = data.text; //Comment that user enters on contact form
    const mailOptions = {
        from: "your-email-address",
        to: "receivers-email-address",
        subject: 'Inquiry: General Question',
        html: `<p style="font-size: 16px;">${text}</p><br />`,
    };

    return transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            return res.send(error.toString());
        }
        return res.send('sended');
    });
});
