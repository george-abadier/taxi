translateObject={
  english:{
    contactUsTitle:"TAXI VIP ST-HUBERT AT MONTREAL'S SOUTH SHORE AND SURROUNDING AREAS",
    contactUsText:"At Taxi VIP St-Hubert , We are pleased to offer you first-class taxi service . We meet each and every one of our customers with a smile and a warm welcome.  You wish to obtain additional information on our services or our prices, you can reach us.",
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
    contactUsTitle:"TAXI VIP ST-HUBERT DANS LA RIVE-SUDE DE MONTRÉAL ET SES ENVIRONS ",
    contactUsText:"Chez Taxi VIP St-Hubert, nous sommes heureux de vous offrir un service de taxi de première classe. Nous rencontrons chacun de nos clients avec un sourire et un accueil chaleureux.  Vous désirez obtenir des informations supplémentaires sur nos services ou nos prix, vous pouvez nous rejoindre.",
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