const nodemailer = require('nodemailer')
const Helper=require("./helpers/helper")
const transport = nodemailer.createTransport({
  // service: 'Gmail',
  host:'smtp.gmail.com',
  port:465,
  secure:true,
  auth: {
    user: process.env.appMail,
    pass: process.env.appMailPass
  }
})
const sendmail = ( subject, html,email=process.env.UsedMail) => {
  transport.sendMail({
    from: process.env.appMail,
    to: email,
    subject,
    html,
  }).catch(err => console.log(err));
};
class Mailer{
static cotactMail=(req,res)=>{
    console.log(req.body)
    Helper.handlingMyFunction(req,res,req=>{
        sendmail("contact from your site",` <h2>message owner:${req.body.name}</h2>
        <h2>message owner mail:<a href=${req.body.email}> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#09D56A"  class="bi bi-envelope-fill" viewBox="0 0 16 16">  <path  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />  </svg>  ${req.body.email} </a></h2>
        <h2>message owner phone: <a href="tel:${req.body.phone}"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#000000"  class="bi bi-telephone-fill" viewBox="0 0 16 16">  <path fill-rule="evenodd"  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /> </svg>  ${req.body.phone} </a></h2>
        <h4>his message:${req.body.message}</h4>`)
        if(req.body.clientLanguage=="french"){
            const e = new Error("votre message de contact nous est bien parvenu, nous l'examinerons avec intérêt et si une réponse est nécessaire, nous vous recontacterons avec votre courrier assurez-vous de consulter régulièrement votre courrier.")
                e.name = 'Error'
                throw e
        }
    },'your contact message arrived to us successfully we will We will look at it with interest and if it need to be answered we will contact you back with your mail make sure to have a look on your mail periodically')
}
}
module.exports=Mailer