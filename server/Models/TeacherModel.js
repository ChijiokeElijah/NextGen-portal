const mongoose = require('mongoose');


const TeacherSchema = new mongoose.Schema({
    FullName:{
        type: String
    },
    
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String
    },
    confirm_password:{
        type: String
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    OTP_verificationToken:{
        OTP: String,
        expires: Date
    },
    verificationToken:{
        token: String,
        expires: Date
    }
    

})

const TeacherModel = mongoose.model('Teacher', TeacherSchema)

module.exports = TeacherModel