translateObject={
    english:{
        lostLName:"last Name",
        lostFName:`<span class="text-danger">*</span>First name`,
        lostEmail:`<span class="text-danger">*</span>EMail`,
        lostPhone:`<span class="text-danger">*</span>Phone`,
        lostDetail:"Details about the missing item",
        lostStart:`<span class="text-danger">*</span>Starting Address`,
        lostEnd:`<span class="text-danger">*</span>Ending Address`,
        lostDate:`<span class="text-danger">*</span>date`,
        driverDetail:`Driver description if possible`,
        lostAction:"SEND"
    },
    french:{
        lostLName:"Nom",
        lostFName:`<span class="text-danger">*</span>Prénom`,
        lostEmail:`<span class="text-danger">*</span>Courriel`,
        lostPhone:`<span class="text-danger">*</span>Téléphone`,
        lostDetail:"Description de l'objet perdu",
        lostStart:`<span class="text-danger">*</span>Adresse de départ`,
        lostEnd:`<span class="text-danger">*</span>Adresse de destination`,
        lostDate:`<span class="text-danger">*</span>Date du trajet `,
        driverDetail:`Description sur le chauffeur (si vous en avez)`,
        lostAction:"ENVOYER"
    }
  }

  document.getElementById("lostForm").addEventListener('submit',function(e){
    e.preventDefault()
    var data=Object.values(this).reduce((obj,field) => { if(field.name){obj[field.name] = field.value}; return obj }, {})
    data.clientLanguage=localStorage.getItem('language')||'french'
    console.log(data)
    fetch(`${domainName}lost`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
  }).then(async(response)=>{
    responseAlert(await response.json(),response.status)
    document.getElementById("lostForm").reset()
  })
  })
  function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }
  translate(localStorage.getItem('language'))