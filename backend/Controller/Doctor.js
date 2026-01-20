const Doctor = require('../Models/DoctorSchema')

const addDoctor = async(req,res)=>{
    try{
        const {name,specialty,description,experienceYears} = req.body;
        const image = req.file ? req.file.filename : null;
        if(!name || !specialty || !description || !experienceYears || !image)
            return res.status(400).json({massage:"All fields are required"})

        const newDoctor = new Doctor({
            name,
            specialty,
            description,
            experienceYears,
            image:req.file?.filename
        })
        const savedDoctor = await newDoctor.save();
        return res.status(200).json(savedDoctor)
    }catch(error){
        console.error(error);
        return res.status(500).json({massage:error});
    }
}

const getDoctor = async (req,res)=>{
    const Doctors = await Doctor.find();
    res.json(Doctors)
}
 
const getIdDoctor = async (req,res)=>{
    const Doctors = await Doctor.findById(req.params.id);
    if(!Doctors)
        return res.status(404).json({massage:"Doctor not found"})
    res.json(Doctors)
}
module.exports = {addDoctor , getDoctor , getIdDoctor}