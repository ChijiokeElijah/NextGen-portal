const ResultModel = require('../Models/ResultModel')

const registerScore = async (req, res) => {
    
    try {
        const isUserExisting = await ResultModel.findOne({Admission_Number: req.body.Admission_Number})
        

        if (isUserExisting){
            existingStudent.Scores.set(Subject, Score);
            await existingStudent.save();

        return res.status(200).json({ message: `${Subject} score updated for student` });
        }
       
       

        const  newUser = new ResultModel({
        Admission_Number: req.body.Admission_Number,
        Subject: req.body.Subject,
        Session: req.body.Session,
        Term: req.body.Term,
        Scores:{[Subject]: score},
        
        
    })
    await newUser.save()
    
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong!"})
        
    }
}
module.exports = registerScore