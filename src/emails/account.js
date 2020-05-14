const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'vimalskr97@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along in the app`
    })
}

const sendCancellationEmail = (email, name)=>{
    sgMail.send({
        to: email,
        from: 'vimalskr97@gmail.com',
        subject: 'Thanks for being a part of our app',
        text: `Thanks. ${name}. `
    })
}
module.exports={
    sendWelcomeEmail,
    sendCancellationEmail
}