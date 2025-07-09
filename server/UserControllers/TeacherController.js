const TeacherModel = require('../Models/TeacherModel')
const sendMail = require('../Email Service/Email') 
const otp_generator = require('otp-generator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

 

const register = async (req, res) => {
    
    try {
        const isUserExisting = await TeacherModel.findOne({email: req.body.email})
        

        if (isUserExisting){
            console.log("User already exists")
            return res.status(400).json({message: `You have registered already`})
        }
       
        const verificationToken = otp_generator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false
        })

       
        const expires = new Date

        expires.setMinutes(expires.getMinutes() + 1)

        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        // if (password !== confirm_password) {
        //     return res.status(400).json({ message: "Passwords do not match" });
        // }
       const hashed_confirmpassword = await bcrypt.hash(req.body.confirm_password, 10)



        const  newUser = new TeacherModel({
        email: req.body.email,
        FullName: req.body.FullName,
        password: hashedPassword,
        confirm_password: hashed_confirmpassword,
        verificationToken:{
            token: verificationToken,
            expires: expires
        }
    
        
    })
    await newUser.save()
    
    const emailbody = `<p>Please click on the link to verify your account. <b>http://localhost:3001/user/verify/${verificationToken}</b></p>`
    const subject = 'Verification Email'
   
    await sendMail(req.body.email, subject, emailbody)
    
    
    res.status(200).json({message: "Verification link sent to your email"})
    // console.log(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong!"})
        
    }
}


const login = async (req, res) => {
  try {
    const isUserExisting = await TeacherModel.findOne({ email: req.body.email });

    if (!isUserExisting) {
      return res.status(400).json({ message: `User with this email doesn't exist.` });
    }

    if (!isUserExisting.isVerified) {
      return res.status(400).json({ message: `User is not verified. Please click the link in your email to verify.` });
    }

    const isPasswordCorrect = await bcrypt.compare(req.body.password, isUserExisting.password);
    

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    // TODO: Create a JWT here if needed

    const jwtPayload = {
        id: isUserExisting._id
    }

    const token = jwt.sign(jwtPayload,process.env.SECRET, {expiresIn: '24h'})

    console.log(token)

    return res.status(200).json({ message: "User logged in successfully", token });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const verifyTeacher = async (req, res) =>{
    try {
        // console.log(res.params);
        const{token} = req.params

        const isTokenValid = await TeacherModel.findOne(
        {
            'verificationToken.token': token, 
            'verificationToken.expires':{$gt: new Date()}
        })
        // console.log(isTokenValid)

        if(!isTokenValid){
            return res.send(`<p>Token invalid or Expired.</p><a href='http://localhost:3001/user/resendVerification/${token}'>Resend verification mail</a>`)
        }

        if(isTokenValid.isVerified){
            return res.send("Account already verified. Please login.")
        }

        isTokenValid.isVerified =  true

        await isTokenValid.save()
        
        res.send('Account verified successfully')
        
    } catch (error) {
        console.log(error)
        
    }
}


const resendVerification = async (req, res) =>{
    try {
        const{token} = req.params
        
        const user = await TeacherModel.findOne(
            {
            'verificationToken.token': token, 
            'isVerified': false
            })
        
        const verificationToken = otp_generator.generate(7, {
            upperCaseAlphabets: false,
            specialChars: false
        })

        const expires = new Date

        expires.setMinutes(expires.getMinutes() + 1)

        user.verificationToken= {
            expires : expires,
            token: verificationToken
        }
  
    await user.save()

    const emailbody = `<p>Please click on the link to verify your account. <b>http://localhost:3001/user/verify/${verificationToken}</b></p>`
    const subject = 'Verification Email'
   
    await sendMail(user.email, subject, emailbody)

    res.send('Check your mail for a new verification link')

    } catch (error) {
        res.send('Something went wrong!')
        
    }
}
 
module.exports = {register, verifyTeacher, resendVerification, login};