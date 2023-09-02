const domainName = "http://localhost:7000/"
//compiling scripts
const renderHome = Handlebars.compile(document.getElementById("home-template").innerHTML);
const renderAbout = Handlebars.compile(document.getElementById("about-template").innerHTML);
const renderServices = Handlebars.compile(document.getElementById("servises-template").innerHTML);
const renderPrices = Handlebars.compile(document.getElementById("prices-template").innerHTML);
const renderInfo = Handlebars.compile(document.getElementById("info-template").innerHTML);
const renderContact = Handlebars.compile(document.getElementById("contact-template").innerHTML);
const renderBooking = Handlebars.compile(document.getElementById("booking-template").innerHTML);
const renderCareer = Handlebars.compile(document.getElementById("career-template").innerHTML);
const renderGallery = Handlebars.compile(document.getElementById("gallery-template").innerHTML);
const renderMissing = Handlebars.compile(document.getElementById("missing-template").innerHTML);
const renderFounderMessage = Handlebars.compile(document.getElementById("founder-message-template").innerHTML);
const renderMissionVision = Handlebars.compile(document.getElementById("mission-vision-template").innerHTML);
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
            //load('js/news.js');
            break;
        case "#services":
            renderContent(renderServices(), "content");
            //load("js/products.js");
            break;
        case "#prices":
            renderContent(renderPrices(), "content");
            //load("js/signUp.js");
            break;
        case "#info":
            renderContent(renderInfo(), "content");
            //load("js/signUp.js");
            break;
        case "#contact":
            renderContent(renderContact(), "content");
            //load("js/contactUs.js");
            break;
        case "#booking":
            renderContent(renderBooking(), "content");
            //load("js/login.js");
            break;
        case "#career":
            renderContent(renderCareer(), "content");
            //load("js/advertisers.js");
            break;
        case "#gallery":
            renderContent(renderGallery(), "content");
        //load("js/advertisers.js");
        case "#missing":
            renderContent(renderMissing(), "content");
            //load("js/advertisers.js");
            break;
        case "#mission":
            renderContent(renderMissionVision(), "content");
            //load("js/advertisers.js");
            break;
        case "#message":
            renderContent(renderFounderMessage(), "content");
            //load("js/advertisers.js");
            break;
        default:
            renderContent(renderHome(), "content");
            load('home.js');
            break;
    }

}

window.addEventListener("load", HandleNavigation);
window.addEventListener("hashchange", HandleNavigation);
HandleNavigation()


