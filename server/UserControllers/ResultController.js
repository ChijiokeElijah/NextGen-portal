const ResultModel = require('../Models/ResultModel')

const registerScore = async (req, res) => {
    
    try {
        const { Admission_Number, subject, score, session, term } = req.body;

        const isUserExisting = await ResultModel.findOne({Admission_Number: req.body.Admission_Number})
        
        // const existingStudent = await ResultModel.findOne({ Admission_Number: req.body.Admission_Number });
        
        
        if (isUserExisting){
            isUserExisting.Scores.set(subject, score);
            await isUserExisting.save();

        return res.status(200).json({ message: `${subject} score updated for student` });
        }

        const  newStudent = new ResultModel({
        Admission_Number: req.body.Admission_Number,
        Subject: req.body.subject,
        Session: req.body.session,
        Term: req.body.term,
        Scores:{[req.body.subject]: req.body.score},
        
        
    })
    await newStudent.save()
    
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong!"})
        
    }
}
module.exports = registerScore