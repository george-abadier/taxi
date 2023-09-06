const Mailer=require('./mail.controller')
const router=require('express').Router()
router.post('/contact',Mailer.cotactMail)
module.exports=router
