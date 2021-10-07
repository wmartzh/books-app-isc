require('dotenv').config();
const express = require('express');
const router = require('./router')
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());
// app.options('*',cors())
app.use('/api',router);

app.get('/',(req,res)=>{
  res.send("Hello")
})
app.listen(process.env.PORT, process.env.HOST, ()=>{
  console.log(`⚡Server listening at http://${process.env.HOST}:${process.env.PORT}`)
});