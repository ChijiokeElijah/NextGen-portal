
const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema({
    FirstName:{
        type: String
    },
    LastName:{
        type: String
    },
    email:{
        type: String,
        unique: true
    },
    confirmPassword:{
        type: String
    },
    RegNum:{
        type: String
    }

})

const UserModel = mongoose.model('Student', StudentSchema)

module.exports = UserModel