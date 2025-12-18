const Usre = require('../Models/UserSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const addUser = async(req,res)=>{
    const {name,email,password} = req.body;
    if(!name || !email || !password)
        return res.status(400).json({massage:"All fields are required"});

    const userExist = await Usre.findOne({email});
    if(userExist)
        return res.status(400).json({massage:"User already exists"})

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = await Usre.create({
        name,
        email,
        password:hashedPassword
    })

    let token = jwt.sign({email,id:newUser._id},process.env.SECRET_KEY,{expiresIn:'1h'})
    return res.status(201).json({massage:"user registerd successfully",token,user:newUser})

}

const addUser1 = async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password)
        return res.status(400).json({massage:"Email and password are required"});

    const user = await Usre.findOne({email})
    if(!user)
        return res.status(400).json({massage:'user is not Correct'})

    const match = await bcrypt.compare(password,user.password)
    if(!match)
        return res.status(400).json({massage:"Password is not correct"})

    const token = jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:'1h'})
    return res.status(201).json({massage:"user log in  successfully",token,user})
}


module.exports = {addUser ,addUser1}