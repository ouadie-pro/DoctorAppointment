const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const cors = require('cors');
const PORT = process.env.PORT || 3000
const connectDb = require('./Config/ConnectionDb')
app.use(express.json());
app.use(cors());

app.use('/user',require('./Router/User'))
app.use('/doctors',require('./Router/Doctor'))



app.listen(PORT,()=>{
    connectDb(),
    console.log(`http://localhost:${PORT}`)
})