var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'raghavavelidi023@gmail.com',
        pass:'rxwsnqemurdtanyf'
    }
});
    var mailOptions={
        from:'raghavavelidi023@gmail.com',
        to:'pravin.consensus@gmail.com',
        subject:'sending from 21A25A04k7',
        text:'good morning sir'
    };
    transporter.sendMail(mailOptions,function(error,info){
        if(error)
        {
            console.log(error);
        }
        else{
            console.log('email sents'+info.response);
        }
    });