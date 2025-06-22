const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "elijahchijioke.ce@gmail.com",
        pass: process.env.APP_PASS
    }
})

const sendEmail = async (to, subject, body) =>{
    let mailOptions = {
        to,
        from: 'elijahchijioke.ce@gmail.com',
        subject,
        html: body
    }
    await new Promise((resolve, reject)=>{
        transporter.sendMail(mailOptions, (err, res) =>{
            if(err){
                console.log(err);
                reject(err)
            }
            else{
                console.log(res)
                resolve(res)
            }
        })
    })      
}
module.exports= sendEmail