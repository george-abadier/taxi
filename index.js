require('dotenv').config()
const express=require('express')
const cors=require('cors')
const path=require('path')
const app=express()
const dealWithJsonFiles=require('./helpers/dealWithFile')
const helper=require('./helpers/helper')
app.use(cors())
app.set("view engine","hbs")
app.set("views",path.join(__dirname,'./statics/frontend/views'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(express.static(path.join(__dirname,"./statics/frontend")))
app.use(express.static(path.join(__dirname,"./statics")))
app.get('/',(req,res)=>{
    res.render("indextemp",{domainName:process.env.DomainName})
})
app.get('/perm',(req,res)=>{
    res.render("indexperm",{domainName:process.env.DomainName})
})
app.get('/price/:regionName',async(req,res)=>{
    helper.handlingMyFunction(req,res,(req)=>{
        const regionCityPricesData=dealWithJsonFiles.readFromJson()
        return regionCityPricesData[req.params.regionName]
    },'here is this region cities with prices')

})


const mailRoutes=require('./mail.routes')
app.use(mailRoutes)


const PORT=process.env.PORT||7000
app.listen(PORT,()=>{ console.log('now we listen to port '+PORT)})