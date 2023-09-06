const domainName = "http://localhost:7000/"
//compiling scripts
const renderHome = Handlebars.compile(document.getElementById("home-template").innerHTML);
const renderAbout = Handlebars.compile(document.getElementById("about-template").innerHTML);
const renderServices = Handlebars.compile(document.getElementById("servises-template").innerHTML);
const renderPrices = Handlebars.compile(document.getElementById("prices-template").innerHTML);
// const renderInfo = Handlebars.compile(document.getElementById("info-template").innerHTML);
const renderContact = Handlebars.compile(document.getElementById("contact-template").innerHTML);
const renderBooking = Handlebars.compile(document.getElementById("booking-template").innerHTML);
const renderCareer = Handlebars.compile(document.getElementById("career-template").innerHTML);
const renderGallery = Handlebars.compile(document.getElementById("gallery-template").innerHTML);
const renderMissing = Handlebars.compile(document.getElementById("missing-template").innerHTML);
//
const mainTrans={
    english:{
        navBar:["HOME","ABOUT","SERVICES","PRICES","CONTACT","CAREER","GALLERY","MISSING","BOOK A CAB"],
        workingHours:"open 24 hours a day,7days a week",
        servicesAreas:"services area",
        contactUs:"CONTACT US",
        lang:"FRANÇAIS",
        photos:{
            firstTransPhoto:"LOCKEDENGLISH.jpg"
        }
    },
    french:{
        navBar:["ACCUEIL","À PROPOS","SERVICES","TARFIS","CONTACT","CARRIÈRE","GALERIE","PERDU","COMMANDER UN TAXI"],
        workingHours:"Ouverts 24 heures sur 24, 7 jours sur 7",
        servicesAreas:"ZONES DE SERVICE",
        contactUs:"NOUS JOINDRE",
        lang:'ENGLISH',
        photos:{
            firstTransPhoto:"LOCKED.jpg"
        }
    }
}
function renderContent(content, tagId) {
    const contentDiv = document.getElementById(tagId);
    contentDiv.innerHTML = content;
}
function load(fileName) {
    var script = document.createElement("script");
    script.src = `${domainName}frontend/js/${fileName}`;
    document.querySelector('#content').appendChild(script);
}
function changeHashing(event) {
    event.preventDefault();
    window.location.hash = this.getAttribute("href");
}
function goToTop() {
    document.body.scrollTop = 160; //For Safari
    document.documentElement.scrollTop = 160; //For Chrome, FireFox, IE and Opera
}
function HandleNavigation() {
    const hash = window.location.hash;
    switch (hash) {
        case "#home":
            renderContent(renderHome(), "content");
            load('home.js');
            break;
        case "#about":
            renderContent(renderAbout(), "content");
            load('about.js');
            break;
        case "#services":
            renderContent(renderServices(), "content");
            load("services.js");
            break;
        case "#prices":
            renderContent(renderPrices(), "content");
            load("prices.js");
            break;
        // case "#info":
        //     renderContent(renderInfo(), "content");
        //     //load("js/signUp.js");
        //     break;
        case "#contact":
            renderContent(renderContact(), "content");
            load("contact.js");
            break;
        case "#booking":
            renderContent(renderBooking(), "content");
            //load("js/login.js");
            break;
        case "#career":
            renderContent(renderCareer(), "content");
            load("career.js");
            break;
        case "#gallery":
            renderContent(renderGallery(), "content");
        //load("js/advertisers.js");
        break
        case "#missing":
            renderContent(renderMissing(), "content");
            //load("js/advertisers.js");
        break;
        default:
            renderContent(renderHome(), "content");
            load('home.js');
            break;
    }
    
}
function translate(choosenLang){
    let intialLang=localStorage.getItem('language')
    if(choosenLang||(intialLang&&intialLang=='english')){
        let usedLan
        if(choosenLang){
            usedLan=choosenLang
        }else{
            usedLan=intialLang
        }
        for(let domElement in mainTrans[usedLan]){
            if(domElement=="photos"){
                debugger
                for(let photo in mainTrans[usedLan][domElement]) {
                    if(document.getElementById(photo)){   
                     document.getElementById(photo).setAttribute('src',domainName+'images/'+mainTrans[usedLan][domElement][photo])
                    } else{
                        const images=document.getElementsByClassName(photo)
                        for(let i=0;i<images.length;i++){
                            images[i].setAttribute('src',domainName+'images/'+mainTrans[usedLan][domElement][photo])
                        }
                    }
               }
             }
             else if(domElement=="placeHolders"){
               for(let input in mainTrans[usedLan][domElement]) {
                document.getElementById(input).setAttribute('placeholder',mainTrans[usedLan][domElement][input])
               }
            }
            else if(typeof mainTrans[usedLan][domElement]=='object'){
               let listOFelement= document.getElementsByClassName(domElement)
               for(let i=0;i<listOFelement.length;i++){
                listOFelement[i].innerHTML=mainTrans[usedLan][domElement][i]
               }
            }else{
                document.getElementById(domElement).innerHTML=mainTrans[usedLan][domElement]
            }
        }
        for(let domElement in translateObject[usedLan]){
            if(domElement=="photos"){
                for(let photo in translateObject[usedLan][domElement]) {
                    if(document.getElementById(photo)){   
                     document.getElementById(photo).setAttribute('src',domainName+'images/'+translateObject[usedLan][domElement][photo])
                    } else{
                        const images=document.getElementsByClassName(photo)
                        for(let i=0;i<images.length;i++){
                            images[i].setAttribute('src',domainName+'images/'+translateObject[usedLan][domElement][photo])
                        }
                    }
               }
             }
             else if(domElement=="placeHolders"){
                for(let input in translateObject[usedLan][domElement]) {
                 document.getElementById(input).setAttribute('placeholder',translateObject[usedLan][domElement][input])
                }
             }
             else if(typeof translateObject[usedLan][domElement]=='object'){
               let listOFelement= document.getElementsByClassName(domElement)
               for(let i=0;i<listOFelement.length;i++){
                listOFelement[i].innerHTML=translateObject[usedLan][domElement][i]
               }
            }else{
                document.getElementById(domElement).innerHTML=translateObject[usedLan][domElement]
            }
        }
    } 
}
function responseAlert(response,status) {
    console.log(response)
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
  
    const alertContainer = document.createElement('div');
    alertContainer.classList.add('alert', 'alert-dismissible', 'fade', 'show', 'position-fixed', 'top-1', 'text-center');
    alertContainer.setAttribute('role', 'alert');
    alertContainer.style.maxWidth = '400px';
    alertContainer.style.borderRadius = '1rem';
    alertContainer.style.zIndex = '9999';
    alertContainer.style.top = '20%';
    alertContainer.style.left = '50%';
    alertContainer.style.transform = 'translate(-50%, -50%)';
  
    const alertMessage = document.createElement('div');
    alertMessage.classList.add('d-flex', 'align-items-center');
    alertMessage.innerHTML = response.apiMessage;
  
    if (status==200) {
      alertContainer.classList.add('alert-success');
      alertContainer.classList.remove('alert-danger');
      alertMessage.innerHTML = response.apiMessage;
    } else if (status === 500) {
        alertContainer.classList.add('alert-danger');
        alertMessage.textContent = response.apiMessage;
    } else {
        alertContainer.classList.add('d-none');
        alertMessage.textContent = 'Internal server error.';
    }
  
    const closeButton = document.createElement('button');
    closeButton.setAttribute('type', 'button');
    closeButton.classList.add('btn-close');
    closeButton.setAttribute('data-bs-dismiss', 'alert');
    closeButton.setAttribute('aria-label', 'Close');
  
    alertContainer.appendChild(alertMessage);
    alertContainer.appendChild(closeButton);
    document.body.appendChild(alertContainer);
  
    // Add a timer to remove the alert after 10 seconds
    setTimeout(() => {
      alertContainer.remove();
    }, 10000);
  }
document.querySelector('#changingLang').addEventListener('click',()=>{
    const intialLang=localStorage.getItem('language')
    let newLang
    if(intialLang&&intialLang=='english'){
        newLang='french'
    }else{
        newLang='english'
    }
    localStorage.setItem('language',newLang)
    HandleNavigation()
})

window.addEventListener("load", HandleNavigation);
window.addEventListener("hashchange", HandleNavigation);


