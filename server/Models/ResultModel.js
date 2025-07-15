const mongoose = require('mongoose');


const ResultSchema = new mongoose.Schema({
    Admission_Number:{
        type: String,
        
    },
    Subject:{
        type: String
    },
    Session:{
        type: String,
    
    },
    Term:{
        type: String
    },
    Scores:{
        type: Map,
        of: Number,
        default:{}
    }

})

const ResultModel = mongoose.model('Result', ResultSchema)

module.exports = ResultModel