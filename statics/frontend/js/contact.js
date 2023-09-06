translateObject={
  english:{
    contactUsTitle:"CONTACT US IN MONTREAL'S SOUTH SHORE AND SURROUNDING AREAS",
    contactUsText:"At Taxi VIP St-Hubert we are happy to provide you with a first class taxi service. All of our customers are welcome to communicate with us. You're interested to know more about our rates or services.",
    contactSendBtn:"Send",
    contactWorkingHours:` 24 HOURS A DAY, 7 DAYS A WEEK
    <span class="theme-color">FRENCH AND ENGLISH</span>`,
    placeHolders:{
      contactPhone:"Phone",
      contactEmail:"Email*",
      contactName:"Name*"
    }
  },
  french:{
    contactUsTitle:"CONTACTEZ-NOUS DANS LA RIVE-SUDE DE MONTRÉAL ET SES ENVIRONS ",
    contactUsText:"Chez Taxi VIP St-Hubert, nous sommes heureux de vous offrir un service de taxi de première classe. Tous nos clients sont invités à communiquer avec nous. Vous désirez en savoir plus sur nos tarifs ou nos services.",
    contactSendBtn:"Envoyer",
    contactWorkingHours:`24 HEURES PAR JOUR, 7 JOURS PAR SEMAINE
    <span class="theme-color">FRANÇAIS ET ANGLAIS</span>`,
    placeHolders:{
      contactPhone:"Téléphone",
      contactEmail:"Courriel*",
      contactName:"Nom*"
    }
  }
}
function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }
  document.getElementById("contactForm").addEventListener('submit',function(e){
    e.preventDefault()
    var data=Object.values(this).reduce((obj,field) => { if(field.name){obj[field.name] = field.value}; return obj }, {})
    data.clientLanguage=localStorage.getItem('language')||'french'
    console.log(data)
    fetch(`${domainName}contact`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
  }).then(async(response)=>{
    responseAlert(await response.json(),response.status)
    document.getElementById("contactForm").reset()
  })
  })
  translate(localStorage.getItem('language'))