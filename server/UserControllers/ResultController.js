const ResultModel = require('../Models/ResultModel')

const registerScore = async (req, res) => {
    
    try {
        const { Admission_Number, subject, score, session, term } = req.body;

        // const isUserExisting = await ResultModel.findOne({Admission_Number: req.body.Admission_Number})
        
        
     const existingRecord = await ResultModel.findOne({
      Admission_Number: Admission_Number,
      Session: session,
      Term: term
    });

        
        if (existingRecord){
            existingRecord.Scores.set(subject, score);
            await existingRecord.save();

        return res.status(200).json({ message: `${subject} score updated for student` });
        }

        const  newResult = new ResultModel({
        Admission_Number,
        Session: session,
        Term: term,
        Scores:{[subject]: score},
        
        
    })
    await newResult.save()
    
    } catch (error) {
        console.log(error)
        if (error.code === 11000) {
      return res.status(409).json({ message: "Duplicate result for session and term" });
    }
    return res.status(500).json({ message: "Internal server error" });

    }
}
module.exports = registerScore