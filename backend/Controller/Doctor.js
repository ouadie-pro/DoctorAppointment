const Doctor = require('../Models/DoctorSchema')

const addDoctor = async(req,res)=>{
    try{
        const {name,specialty,description,experienceYears} = req.body;
        if(!name || !specialty || !description || !experienceYears || image)
            return res.status(400).json({massage:"All fields are required"})

        const newDoctor = new Doctor({
            name,
            specialty,
            description,
            experienceYears,
            image
        })
        const savedDoctor = await newDoctor.save();
        return res.status(200).json(savedDoctor)
    }catch(error){
        console.error(error);
        return res.status(500).json({massage:error});
    }
}

module.exports = {addDoctor}