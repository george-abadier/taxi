const nodemailer = require('nodemailer')
const Helper = require("./helpers/helper")
const fs = require('fs')
const path = require('path')
const multer = require('multer')
const uploadfile = require('./helpers/multer')
const transport = nodemailer.createTransport({
    // service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.appMail,
        pass: process.env.appMailPass
    }
})
const sendmail = (subject, html, attachments, email = process.env.UsedMail) => {
    transport.sendMail({
        from: process.env.appMail,
        to: email,
        subject,
        html,
        attachments
    }).catch(err => console.log(err));
};
class Mailer {
    static cotactMail = (req, res) => {
        Helper.handlingMyFunction(req, res, req => {
            sendmail("contact from your site", ` <h2>message owner:${req.body.name}</h2>
        <h2>message owner mail:<a href=${req.body.email}> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#09D56A"  class="bi bi-envelope-fill" viewBox="0 0 16 16">  <path  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />  </svg>  ${req.body.email} </a></h2>
        <h2>message owner phone: <a href="tel:${req.body.phone}"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#000000"  class="bi bi-telephone-fill" viewBox="0 0 16 16">  <path fill-rule="evenodd"  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /> </svg>  ${req.body.phone} </a></h2>
        <h4>his message:${req.body.message}</h4>`, [])
            if (req.body.clientLanguage == "french") {
                const e = new Error("votre message de contact nous est bien parvenu, nous l'examinerons avec intérêt et si une réponse est nécessaire, nous vous recontacterons avec votre courrier assurez-vous de consulter régulièrement votre courrier.")
                e.name = 'Error'
                throw e
            }
        }, 'your contact message arrived to us successfully we will look at it with interest and if it need to be answered we will contact you back with your mail make sure to have a look on your mail periodically')
    }
    static careerMail = async (req, res) => {
        try {
            // req.headers['content-type']="multipart/form-data"
            const images = []
            const attachments = []
            const upload = uploadfile('periodically_career_files', ['image/png', 'image/webp', 'image/apng', 'image/gif', 'image/jpeg',"application/pdf"])

            const uploadImage = upload.fields([{ name: 'attachments', maxCount: 7 }])
            uploadImage(req, res, async function (e) {
                if (e instanceof multer.MulterError) {
                    if (req.body.clientLanguage == 'english') {
                        sendmail("your Appliction  nned to be applied again", ` <h2>hello ${req.body.firstName + req.body.lastName}</h2>
                            <p>there is some thing go wrong with your application 
                            We are very interested in your application, so do not hesitate to submit another
                            Pay attention to the instructions so that we receive this without causing errors in the system</p>`, [],req.body.email)
                    } else {
                        sendmail("votre candidature doit être réintroduite Appliction", `Bonjour ${req.body.firstName + req.body.lastName}</h2>
                                    <p>il y a un problème avec votre candidature 
                                    Nous sommes très intéressés par votre application, n'hésitez donc pas à en soumettre une autre.
                                    Respectez les instructions afin que nous recevions votre demande sans provoquer d'erreurs dans le système.</p>`, [],req.body.email)
                    }
                    res.redirect('/')
                }
                else if (e) {
                    if (req.body.clientLanguage == 'english') {
                        sendmail("your Appliction  nned to be applied again", ` <h2>hello ${req.body.firstName + req.body.lastName}</h2>
                            <p>there is some thing go wrong with your application 
                            We are very interested in your application, so do not hesitate to submit another
                            Pay attention to the instructions so that we receive this without causing errors in the system</p>`, [],req.body.email)
                    } else {
                        sendmail("votre candidature doit être réintroduite Appliction", `Bonjour ${req.body.firstName + req.body.lastName}</h2>
                                    <p>il y a un problème avec votre candidature 
                                    Nous sommes très intéressés par votre application, n'hésitez donc pas à en soumettre une autre.
                                    Respectez les instructions afin que nous recevions votre demande sans provoquer d'erreurs dans le système.</p>`, [],req.body.email)
                    }
                    res.redirect('/')
                }
                else {
                    try {
                        await Promise.all(req.files['attachments'].map((file) => {
                            images.push(file.path.replace('statics\\', '').replace(/\\/g, '/'))
                            attachments.push({ contentType: file.mimetype, fileName: file.originalname, content: fs.createReadStream(path.join(__dirname, './' + file.path.replace(/\\/g, '/'))) })
                        }))
                        sendmail("Jop Appliction", `    <link rel="stylesheet" href="${process.env.DomainName}frontend/bootstrap/bootstrap.min.css">
                        <h2 class="bg-danger">Appliction owner:${req.body.firstName + req.body.lastName}</h2>
                        <h2>Appliction owner mail:<a href=${req.body.email}> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#09D56A"  class="bi bi-envelope-fill" viewBox="0 0 16 16">  <path  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />  </svg>  ${req.body.email} </a></h2>
                                <h2>Appliction owner phone: <a href="tel:${req.body.phone}"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#000000"  class="bi bi-telephone-fill" viewBox="0 0 16 16">  <path fill-rule="evenodd"  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /> </svg>  ${req.body.phone} </a></h2>
                                <h4>Appliction address:${req.body.address}</h4>`, attachments)
                        if (req.body.clientLanguage == 'english') {
                            sendmail("Appliction confimation", ` <h2>hello ${req.body.firstName + req.body.lastName}</h2>
                            <h4>With pleasure ,we'd love to inform you that your application of joining our team has been received</h4>
                            <h4>now,we are reviewing your application,and our reply will be sent soon </h4>
                            <h4>Fill yourself with passion and enthusiasm </h4>
                            <h4>Thanks</h4>`, [],req.body.email)
                        } else {
                            sendmail("Appliction confimation", `Bonjour ${req.body.firstName + req.body.lastName}</h2>
                                    <h4>Nous avons le plaisir de vous informer que nous avons reçu votre demande d'adhésion à notre équipe.</h4>
                                    <h4>Nous sommes en train d'examiner votre candidature et notre réponse vous parviendra bientôt. </h4>
                                    <h4>Remplissez-vous de passion et d'enthousiasme </h4>
                                    <h4>Merci</h4>`, [],req.body.email)
                        }
                        res.redirect('/')
                        images.forEach(image => {
                            if (fs.existsSync(path.join(__dirname, './statics/' + image))) {
                                fs.unlinkSync(path.join(__dirname, './statics/' + image))
                            }
                        })
                    }
                    catch (e) {
                        console.log(e)
                        images.forEach(image => {
                            if (fs.existsSync(path.join(__dirname, '../../statics/' + image))) {
                                fs.unlinkSync(path.join(__dirname, '../../statics/' + image))
                            }
                        })
                        if (req.body.clientLanguage == 'english') {
                            sendmail("your Appliction  nned to be applied again", ` <h2>hello ${req.body.firstName + req.body.lastName}</h2>
                            <p>there is some thing go wrong with your application 
                            We are very interested in your application, so do not hesitate to submit another
                            Pay attention to the instructions so that we receive this without causing errors in the system</p>`, [],req.body.email)
                        } else {
                            sendmail("votre candidature doit être réintroduite Appliction", `Bonjour ${req.body.firstName + req.body.lastName}</h2>
                                    <p>il y a un problème avec votre candidature 
                                    Nous sommes très intéressés par votre application, n'hésitez donc pas à en soumettre une autre.
                                    Respectez les instructions afin que nous recevions votre demande sans provoquer d'erreurs dans le système.</p>`, [],req.body.email)
                        }

                        res.redirect('/')
                    }
                }
            })
        } catch (e) {
            console.log(e)
            if (req.body.clientLanguage == 'english') {
                sendmail("your Appliction  nned to be applied again", ` <h2>hello ${req.body.firstName + req.body.lastName}</h2>
                <p>there is some thing go wrong with your application 
                We are very interested in your application, so do not hesitate to submit another
                Pay attention to the instructions so that we receive this without causing errors in the system</p>`, [])
            } else {
                sendmail("votre candidature doit être réintroduite Appliction", `Bonjour ${req.body.firstName + req.body.lastName}</h2>
                        <p>il y a un problème avec votre candidature 
                        Nous sommes très intéressés par votre application, n'hésitez donc pas à en soumettre une autre.
                        Respectez les instructions afin que nous recevions votre demande sans provoquer d'erreurs dans le système.</p>`, [])
            }
            res.redirect('/')
        }
    }
    static orderMail = (req, res) => {
     const type= req.body.clientLanguage == 'english' ? req.body.requestType == 'Commander pour maintenant' ? "Order For Now": req.body.requestType == 'Réserver pour après' ? "Book For Later" : "Request Information":req.body.requestType
     console.log(type)
        Helper.handlingMyFunction(req, res, (req) => {
            sendmail("order from your site", ` <h2>order type:${type}</h2>
        <h2>order owner mail:<a href=${req.body.email}> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#09D56A"  class="bi bi-envelope-fill" viewBox="0 0 16 16">  <path  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />  </svg>  ${req.body.email} </a></h2>
        <h2>order owner phone: <a href="tel:${req.body.firstCellPhone}"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#000000"  class="bi bi-telephone-fill" viewBox="0 0 16 16">  <path fill-rule="evenodd"  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /> </svg>  ${req.body.firstCellPhone} </a></h2>
        ${req.body.secondCellPhone ? `<h2>order owner phone: <a href="tel:${req.body.secondCellPhone}"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#000000"  class="bi bi-telephone-fill" viewBox="0 0 16 16">  <path fill-rule="evenodd"  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /> </svg>  ${req.body.secondCellPhone} </a></h2>` : ""}
        <h2>order day: ${req.body.tripday}</h2>
        <h2>order date&time: ${req.body.tripDateAndTime}</h2>
        <h2>pickup point:${req.body.startPoint}</h2>
        <h2>target point:${req.body.endPoint}</h2>
        <h2>pickup point:${req.body.startPoint}</h2>
        <h2>car :${req.body.clientLanguage == 'english' ? req.body.carType == "(4 passagers)" ? "Sedan" + req.body.carType : req.body.carType == "Pas de van" ? "No van" : "Minivan" + req.body.carType : req.body.carType == "(4 passagers)" ? "Berline" + req.body.carType : req.body.carType == "Pas de van" ? req.body.carType : "Fourgonette" + req.body.carType}</h2>
        <h2>number of requested car:${req.body.carQuantity}</h2>
        <h2>number of travellers:${req.body.NUmOfTravelers}</h2>
        <h2>number of cases:${req.body.numOfCases}</h2>
        <h2>way to pay:${req.body.payMeyhod}</h2>
        ${parseInt(req.body.returnTrip) ? `
        <h2> return flight trip:${req.body.returnFlightNumber}</h2>
        <h2>return day:${req.body.returnDay}</h2>
        <h2>return date and time:${req.body.returnDateTime}</h2>` : ''}
        <h2>other information:${req.body.otherInfo}</h2>`, [],"sthubert.taxicomp@gmail.com")
            if (req.body.clientLanguage == "french") {
                sendmail("Confirmation de réservation", `
                <img src="https://taxi-vip-sthubert.ca/images/logo.png" style="margin: 1rem auto;max-width: 100%;"/>
  <h1 style="font-size: 1.5rem; font-weight: bold; text-align: center;">NOUVELLE COMMANDE DE TAXI</h1>
  
  <table style="border-collapse: collapse; width: 100%; max-width: 600px; margin: 0 auto;">
    <caption style="font-size: 1.5rem; font-weight: bold;">(Commande:<span style="color: blue;">02-100055-20230902-155117-awadallazk@gmail.com</span>)</caption>
    <thead style="background-color: #f2f2f2;">
      <tr>
        <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left; color: blue; ">https://taxi-vip-sthubert.ca/</th>
        <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;">+1 450 694 4444</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;background-color: #f2f2f2;">Informations additionelles</th>
        <td style="padding: 10px; border-bottom: 4px solid #000;">${req.body.otherInfo}</td>
        </tr>
      <tr>
        <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;background-color: #f2f2f2;">Type de reservation</th>
        <td style="padding: 10px; border-bottom: 4px solid #000; text-align: left;">${type}</td>
      </tr>
      <tr>
        <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;background-color: #f2f2f2;">NOM<br>TÉLÉPHONE<br>TÉLÉPHONE SECONDAIRE<br>Courriel<br></th>
        <td style="padding: 10px; border-bottom: 4px solid #000; text-align: left;">${req.body.firstName}<br>${req.body.firstCellPhone}<br>${req.body.secondCellPhone ? req.body.secondCellPhone + `<br>` : ''}<span style="color: blue;">awadallazk@gmail.com</span></td>
        </tr>
      <tr>
        <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;background-color: #f2f2f2;">Jour<br><br>Date et Heure<</th>
        <td style="padding: 10px; border-bottom: 4px solid #000; text-align: left;">${req.body.tripday}<br><br>${req.body.tripDateAndTime}</td>
        </tr>
      <tr>
        <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;background-color: #f2f2f2;">Endroit de départ<br><br>Destination finale</th>
        <td style="padding: 10px; border-bottom: 4px solid #000; text-align: left;">${req.body.startPoint}<br>${req.body.endPoint} </td>
      </tr>
      <tr>
        <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;background-color: #f2f2f2;">Type de taxi<br>Nombre de taxi<br>Voyageurs<br>Valises</th>
        <td style="padding: 10px; border-bottom: 4px solid #000; text-align: left;">${req.body.clientLanguage == 'english' ? req.body.carType == "(4 passagers)" ? "Sedan" + req.body.carType : req.body.carType == "Pas de van" ? "No van" : "Minivan" + req.body.carType : req.body.carType == "(4 passagers)" ? "Berline" + req.body.carType : req.body.carType == "Pas de van" ? req.body.carType : "Fourgonette" + req.body.carType}<br>${req.body.carQuantity}<br>${req.body.NUmOfTravelers}<br>${req.body.numOfCases}</td>
        </tr>
        ${parseInt(req.body.returnTrip) ? `
        <tr>
        <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;background-color: #f2f2f2;">Numéro du vol de retour<br>Jour/day de retour<br>Date et heure de retour</th>
        <td style="padding: 10px; border-bottom: 4px solid #000; text-align: left;">${req.body.returnFlightNumber}<br>${req.body.returnDay}<br>${req.body.returnDateTime}</td>
      </tr>`: ""}
    </tbody>
  </table>`, [],req.body.email)
                const e = new Error("Nous avons bien reçu votre commande.")
                e.name = 'Error'
                throw e
            } else {
                sendmail("order confirmation", `
                <img src="https://taxi-vip-sthubert.ca/images/logo.png" style="margin: 1rem auto;max-width: 100%;"/>
                <h1 style="font-size: 1.5rem; font-weight: bold; text-align: center;">NEW TAXI ORDER</h1>
                
                <table style="border-collapse: collapse; width: 100%; max-width: 600px; margin: 0 auto;">
                  <caption style="font-size: 1.5rem; font-weight: bold;">(Order:<span style="color: blue;">02-100055-20230902-155117-awadallazk@gmail.com</span>)</caption>
                  <thead style="background-color: #f2f2f2;">
                    <tr>
                      <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left; color: blue; ">https://taxi-vip-sthubert.ca/</th>
                      <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;">+1 450 694 4444</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;background-color: #f2f2f2;">Additional information........</th>
                      <td style="padding: 10px; border-bottom: 4px solid #000;">${req.body.otherInfo}</td>
                    </tr>
                    <tr>
                      <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;background-color: #f2f2f2;">Type of reservation</th>
                      <td style="padding: 10px; border-bottom: 4px solid #000; text-align: left;">${type}</td>
                    </tr>
                    <tr>
                      <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;background-color: #f2f2f2;">NAME<br>PHONE NUMBER<br>SECONDARY PHONE<br>EMAIL<br></th>
                      <td style="padding: 10px; border-bottom: 4px solid #000; text-align: left;">${req.body.firstName}<br>${req.body.firstCellPhone}<br>${req.body.secondCellPhone ? req.body.secondCellPhone + `<br>` : ''}<span style="color: blue;">awadallazk@gmail.com</span></td>
                    </tr>
                    <tr>
                      <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;background-color: #f2f2f2;">DAY<br><br>Date and TIME</th>
                      <td style="padding: 10px; border-bottom: 4px solid #000; text-align: left;">${req.body.tripday}<br><br>${req.body.tripDateAndTime}</td>
                    </tr>
                    <tr>
                      <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;background-color: #f2f2f2;">Departure Location<br><br>Final destination</th>
                      <td style="padding: 10px; border-bottom: 4px solid #000; text-align: left;">${req.body.startPoint}<br>${req.body.endPoint} </td>
                    </tr>
                    <tr>
                      <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;background-color: #f2f2f2;">Taxi type<br>Number of taxi<br>Passengers<br>Luggage</th>
                      <td style="padding: 10px; border-bottom: 4px solid #000; text-align: left;">${req.body.clientLanguage == 'english' ? req.body.carType == "(4 passagers)" ? "Sedan" + req.body.carType : req.body.carType == "Pas de van" ? "No van" : "Minivan" + req.body.carType : req.body.carType == "(4 passagers)" ? "Berline" + req.body.carType : req.body.carType == "Pas de van" ? req.body.carType : "Fourgonette" + req.body.carType}<br>${req.body.carQuantity}<br>${req.body.NUmOfTravelers}<br>${req.body.numOfCases}</td>
                    </tr> 
                    ${parseInt(req.body.returnTrip) ? `
                    <tr>
                    <th style="padding: 10px; border-bottom: 4px solid #000; text-align: left;background-color: #f2f2f2;">Return flight number<br>Return Jour/day<br>Return time and date</th>
                    <td style="padding: 10px; border-bottom: 4px solid #000; text-align: left;">${req.body.returnFlightNumber}<br>${req.body.returnDay}<br>${req.body.returnDateTime}</td>
                  </tr>`: ""}
                  </tbody>
                </table>`, [],req.body.email)
            }
        }, 'we recieved you order successfully')
    }
    static lostMail = (req, res) => {
        Helper.handlingMyFunction(req, res, req => {
            sendmail("lost object report", ` <h2>message owner:${req.body.firstName+req.body.lastName}</h2>
        <h2>message owner mail:<a href=${req.body.email}> <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#09D56A"  class="bi bi-envelope-fill" viewBox="0 0 16 16">  <path  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />  </svg>  ${req.body.email} </a></h2>
        <h2>message owner phone: <a href="tel:${req.body.phone}"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#000000"  class="bi bi-telephone-fill" viewBox="0 0 16 16">  <path fill-rule="evenodd"  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /> </svg>  ${req.body.phone} </a></h2>
        <h4>details about lost object:${req.bodyobjectDetail}</h4>
        <h2>starting point: <a href="tel:${req.body.startAddress}"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#000000"  class="bi bi-telephone-fill" viewBox="0 0 16 16">  <path fill-rule="evenodd"  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /> </svg>  ${req.body.phone} </a></h2>
        <h2>end point: <a href="tel:${req.body.endAddress}"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#000000"  class="bi bi-telephone-fill" viewBox="0 0 16 16">  <path fill-rule="evenodd"  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /> </svg>  ${req.body.phone} </a></h2>
        <h2>date: <a href="tel:${req.body.date}"> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#000000"  class="bi bi-telephone-fill" viewBox="0 0 16 16">  <path fill-rule="evenodd"  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /> </svg>  ${req.body.phone} </a></h2>
        <h4>details about the driver:${req.driverDetail}</h4>
        `, [])
            if (req.body.clientLanguage == "french") {
                const e = new Error("votre message de contact nous est bien parvenu, nous l'examinerons avec intérêt et si une réponse est nécessaire, nous vous recontacterons avec votre courrier assurez-vous de consulter régulièrement votre courrier.")
                e.name = 'Error'
                throw e
            }
        }, 'your message has been recieved ,we will contact you as soon as possible')
    }
}
module.exports = Mailer
