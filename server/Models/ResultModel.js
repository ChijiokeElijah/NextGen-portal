const mongoose = require('mongoose');


const ResultSchema = new mongoose.Schema({
    Admission_Number:{
        type: String, 
        required: true
        
    },
    Subject:{
        type: String

    },
    Session:{
        type: String,
        required: true 
    },
    Class:{
        type: String,
        required: true
    },
    Term:{
        type: String,
        required: true
    },
    Scores:{
        type: Map,
        of: Number,
        default:{}
    }

})

ResultSchema.index(
  { Admission_Number: 1, Session: 1, Term: 1 },
  { unique: true }
);

const ResultModel = mongoose.model('Result', ResultSchema)

module.exports = ResultModel