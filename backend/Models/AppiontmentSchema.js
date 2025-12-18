const mongoose = require('mongoose');

const AppiontmentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,ref:"User"
    },
    Doctor:{
        type:mongoose.Schema.Types.ObjectId,ref:"Doctor"
    },
    data:Date,
    reason:String
})
module.exports = mongoose.model('Appointment',AppiontmentSchema)