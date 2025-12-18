const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const cors = require('cors');
const PORT = process.env.PORT || 3000
const connectDb = require('./Config/ConnectionDb')
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('iiiiiiiiiii');
})




app.listen(PORT,()=>{
    connectDb(),
    console.log(`http://localhost:${PORT}`)
})