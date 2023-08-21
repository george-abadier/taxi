require('dotenv').config()
const express=require('express')
const cors=require('cors')
const path=require('path')
const app=express()
app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(express.static(path.join(__dirname,"./statics")))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
    // res.json('aaaaaa')
})

const PORT=process.env.PORT||7000
app.listen(PORT,()=>{ console.log('now we listen to port '+PORT)})