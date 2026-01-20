const Appointmant = require('../Models/AppiontmentSchema');

const Addappointmant = async(req,res)=>{
    try{
        const {Doctor,data,reason} = req.body
        if(!Doctor || !data || !reason)
            return res.status(400).json({massage:"Missing fields"});
        const appointmant = await Appointmant.create({
            user:req.user.id,
            Doctor,
            data,
            reason
        })
        return res.json(appointmant)

    }catch(error){
        console.error(error);
        return res.status(500).json({massage:error});
    }
}

const getappointmant = async (req,res)=>{
   const appointmant = await Appointmant.find({user:req.user.id})
   return res.json(appointmant)
}

const DeleteAppointmant = async (req,res)=>{
    try{
        const appointmant = await Appointmant.findByIdAndDelete(req.params.id)
        if(!appointmant)
            return res.status(404).json({error:'appointment not found'})
        res.status(200).json({massage:"appointment deleted successfully"})
    }catch(error){
        console.log(error)
        res.status(500).json({error:'internal Server Eerror'})
    }
}

module.exports = {Addappointmant,getappointmant,DeleteAppointmant}