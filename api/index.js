// importation
const express=require('express')
const connectdb=require('./config/connectdb')
require('dotenv').config()
const cors = require('cors');


// initialisation server
const app=express()

// connection base Données
connectdb()
 app.get('/',async(req,res)=>{
    res.send('server is running')
 })
// middelwares
app.use(cors());
app.use(express.json())
app.use('/job',require('./routes/job'))
app.use('/user',require('./routes/user'))



const port=process.env.PORT
// creation du serveur
app.listen(port,(err)=>err?console.log(err):console.log(`server is running in ${port}`))