const Mailer=require('./mail.controller')
const router=require('express').Router()
router.post('/contact',Mailer.cotactMail)
router.post('/career',Mailer.careerMail)
router.post('/order',Mailer.orderMail)
module.exports=router
