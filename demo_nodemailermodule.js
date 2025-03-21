var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'lilvickydsecond@gmail.com',
        pass: 'sbyc byrt wyvw eljc' 
    }
});
// var mailOptions = {
//     from: 'lilvickydsecond@gmail.com',
//     to: 'iraborvictord1@gmail.com',
//     subject: 'Sending Email Using NODE.JS',
//     text: 'That was not as hard as i thought'
// };
// for multiple recievers
// var mailOptions = {
//     from: 'lilvickydsecond@gmail.com',
//     to : 'iraborvd@gmail.com, lilvickydfirst@gmail.com, livetokilloddy@gmail.com',
//     subject : 'Sending Email Using NODE.JS',
//     text : 'That was not as hard as i thought'
// };

//for sending html
var mailOptions = {
    from : 'lilvickydsecond@gmail.com',
    to : 'livetokilloddy@gmail.com, lilvickydfirst@gmail.com, iraborvd@gmail.com, iraborvictord1@gmail.com',
    subject : 'Sending HTML Emails using Node.js',
    text : 'Finally learnt hoe to do this, its fun',
    html : '<h1>Welcome</h1><p>This was somewhat easy!</p>'
};

transporter.sendMail(mailOptions, function(error,info){
    if(error) {
        console.log(error);
    } else{
        console.log('Email sent: '+ info.response);
    }
});