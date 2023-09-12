translateObject = {
    english: {
        bookingTitle:"ORDER A TAXI",
        partTitle: ["TYPE OF RESERVATION", "CONTACT INFORMATION", "DATE & TIME", "DESTINATION", "TAXI TYPE","PLAN A RETURN TRIP","CONFIRMATION"],
        orderType: ["Order For Now", "Book For Later", "Request Information"],
        dateTimeInput: "Date and Time when you want a taxi<span class='text-danger'>*</span>",
        startPlaceInput: "Place of departure<span class='text-danger'>*</span>",
        finalPlaceInput: "Final destination<span class='text-danger'>*</span>",
        carNumberInput: "Number",
        travelersNumInput: "Travelers",
        casesNumInput: "Suitcases",
        carTypeOptions: ["Sedan (4 passengers)","Minivan (5 passengers)","Minivan (6 passengers)","Minivan (7 passengers)","No van"],
        paymentMethodInput:"Payment Method",
        // payment:["cash","visa"],
        FNameInput: "First Name<span class='text-danger'>*</span>",
        cellPhoneInput: "Cell Phone<span class='text-danger'>*</span>",
        SecCellPhone: "Second Cell Phone",
        emailInput: "Email<span class='text-danger'>*</span>",
        returnDateTimeInput:"Date and Time For Return",
        previous:["Previous","Previous","Previous","Previous","Previous","Previous"],
        next:["Next","Next","Next","Next","Next","Next"],
        otherInfo:"Additional information",
        flightNumInput:"Return flight number",
        bookingDownTitle:"CONTACT US",
        bookingDownText:"At Taxi VIP ST.Hurbert, we are happy to provide you with excellent taxi service. We welcome all our customers with a good humor and a radiant hello. You wish to obtain additional information on our services or our prices?<br> You can reach us by phone at 450-694-4444 or write to us at sthubert.taxicomp@gmail.com",
        placeHolders: {
        }
    },
    french: {
        bookingTitle:"COMMANDER UN TAXI",
        partTitle: ["TYPE DE RÉSERVATION", "INFORMATIONS DE CONTACT", "DATE & HEURE", "DESTINATION", "TYPE DE TAXI","PLAN A RETURN TRIP","CONFIRMATION"],
        orderType: ["Commander pour maintenant", " Réserver pour après", " Demande de l'information"],
        dateTimeInput: "Date et heure de la demande de taxi<span class='text-danger'>*</span>",
        startPlaceInput: "Endroit de départ<span class='text-danger'>*</span>",
        finalPlaceInput: "Destination finale<span class='text-danger'>*</span>",
        carNumberInput: "Nombre",
        travelersNumInput: "Voyageurs",
        casesNumInput: "Valises",
        carTypeOptions: ["Berline (4 passagers)", "Fourgonette (5 passagers)", "Fourgonette (6 passagers)", "Fourgonette (7 passagers)","Pas de van"],
        paymentMethodInput:"Mode de paiement",
        FNameInput: "Prénom<span class='text-danger'>*</span>",
        cellPhoneInput: "Cellulaire<span class='text-danger'>*</span>",
        SecCellPhone: "Téléphone secondaire",
        emailInput: "Courriel<span class='text-danger'>*</span>",
        returnDateTimeInput:"Date et heure de retour",
        Precedent:["Precedent","Precedent","Precedent","Precedent","Precedent","Precedent"],
        Suivant:["Suivant","Suivant","Suivant","Suivant","Suivant","Suivant"],
        otherInfo:"Informations complémentaires",
        flightNumInput:"Numéro du vol de retour",
        bookingDownTitle:"CONTACTEZ-NOUS",
        bookingDownText:"Chez Taxi VIP ST.Hurbert nous sommes heureux de vous offrir un excellent service de taxi. Nous accueillons tous nos clients avec bonne humeur et un bonjour radieux. Vous désirez obtenir des informations supplémentaires sur nos services ou nos tarifs?<br>Vous pouvez nous joindre par téléphone au 450-694-4444  ou nous écrire à l’adresse sthubert.taxicomp@gmail.com",
        placeHolders: {

        }
    }
}
document.querySelectorAll('.next').forEach((button, index) => {
    button.addEventListener('click', function (event) {
        let isThisPartVaild = true
        let inputsOfThisPart = [...event.target.parentElement.parentElement.parentElement.querySelectorAll('input,select')]
        for (let i = 0; (i < inputsOfThisPart.length && isThisPartVaild); i++) {
            if (inputsOfThisPart[i].type == 'radio' && inputsOfThisPart[i].required) {
                const thisGroupOfRadio = inputsOfThisPart.filter(input => input.name == inputsOfThisPart[i].name)
                const thisRadioGroupisvalid = thisGroupOfRadio.find(radio => radio.checked)
                if (!thisRadioGroupisvalid) {
                    isThisPartVaild = false
                    thisGroupOfRadio[0].parentElement.parentElement.classList.add('border')
                    thisGroupOfRadio[0].parentElement.parentElement.classList.add('border-danger')
                    thisGroupOfRadio[0].parentElement.parentElement.classList.add('border-4')
                } else {
                    thisGroupOfRadio[0].parentElement.parentElement.classList.remove('border')
                    thisGroupOfRadio[0].parentElement.parentElement.classList.remove('border-danger')
                    thisGroupOfRadio[0].parentElement.parentElement.classList.remove('border-4')
                }
            } else {
                if (!inputsOfThisPart[i].checkValidity()) {
                    isThisPartVaild = false
                    console.log(inputsOfThisPart[i].validationMessage)
                    inputsOfThisPart[i].classList.remove('border-dark')
                    inputsOfThisPart[i].classList.add('border-danger')
                    inputsOfThisPart[i].classList.add('border-4')
                } else {
                    inputsOfThisPart[i].classList.remove('border-danger')
                    inputsOfThisPart[i].classList.add('border-dark')
                    inputsOfThisPart[i].classList.remove('border-4')
                }
            }
        }
        if (isThisPartVaild) {

            document.querySelector(`#${event.target.parentElement.parentElement.parentElement.nextElementSibling.id + "-tab"}`).removeAttribute('disabled')
            document.querySelector(`#${event.target.parentElement.parentElement.parentElement.nextElementSibling.id + "-tab"}`).click()
            document.querySelector(`#${event.target.parentElement.parentElement.parentElement.nextElementSibling.id + "-tab"}`).setAttribute('disabled', true)
        }
    })
})
// previous button
document.querySelectorAll('.previous').forEach((button) => {

    button.addEventListener('click', function (event) {
        document.querySelector(`#${event.target.parentElement.parentElement.parentElement.previousElementSibling.id + "-tab"}`).removeAttribute('disabled')
        document.querySelector(`#${event.target.parentElement.parentElement.parentElement.previousElementSibling.id + "-tab"}`).click()
        document.querySelector(`#${event.target.parentElement.parentElement.parentElement.previousElementSibling.id + "-tab"}`).setAttribute('disabled', true)
    })
})
function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }
document.querySelector('#return').addEventListener('change', () => {
    let inputes=[...document.querySelectorAll('#returnPart select,#returnPart input')]
    if (document.querySelector('#yes').checked) {
        inputes.forEach(input => {
            input.setAttribute("required", true)
            input.removeAttribute('disabled')
        })
        
    } else if (document.querySelector('#no').checked) {
        inputes.forEach(input => {
            input.setAttribute('disabled', true)
            input.removeAttribute("required")
        })
    }
})
document.querySelector('#bookForm').addEventListener('submit',function(e){
    e.preventDefault()
    var data=Object.values(this).reduce((obj,field) => { if(field.name){
          if((field.type&&field.type=='radio'&& field.checked)||!field.type||field.type!='radio'){
            obj[field.name] = field.value
           }
    } ;return obj }, {})
    data.clientLanguage=localStorage.getItem('language')||'french'
    //     var data=Object.values(this).reduce((obj,field) => { if(field.name){
    //       if((field.type&&field.type=='radio'&& field.checked)||!field.type||field.type!='radio'){
    //         obj.append(field.name , field.value)
    //        }
    // } ;return obj }, new FormData())
    // data.append('clientLanguage',localStorage.getItem('language')||'french')
   // for (var pair of data.entries())
                                                     console.log(data)
    fetch(`${domainName}order`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
  }).then(async(response)=>{
    responseAlert(await response.json(),response.status)
    document.getElementById("contactForm").reset()
  })
})
translate(localStorage.getItem('language'))