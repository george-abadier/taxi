const Mailer=require('./mail.controller')
const router=require('express').Router()
router.post('/contact',Mailer.cotactMail)
router.post('/career',Mailer.careerMail)
router.post('/order',Mailer.orderMail)
router.post('/lost',Mailer.lostMail)
module.exports=router
