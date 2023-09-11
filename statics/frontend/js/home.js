// let items = document.querySelectorAll('.carousel .carousel-item')
// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 100000
// })
debugger
var translateObject = {
  english: {
    homeFirstPartTitle:`TAXI ST_HUBERT VIP OUR PROMIS <span class="text theme-color" >FAST, SAFE, RELIABLE</span> TAXI SERVICE`,
    homeFirstPartText:`Are you looking for a Professional taxi service? Taxi VIP St-Hubert, we will take you wherever you want, we follow-up on every call to verify that each service request has been processed promptly – so you’re never left without a cab. Hail  Taxi VIP St-Hubert today!
     
    Our drivers are specially qualified who meets the same standards of quality, cleanliness, comfort and professionalism.`,
    homeSecondPartTitle:"The efficient management of passenger transportation via cabs is Taxi VIP St-Hubert's primary goal.",
    homeSecondPartTitle:`WHY TO BOOK WITH Taxi VIP St-Hubert 
	- The largest fleet of minivans in the region: make your choice according to your needs.
	- Online cab booking: in just a few clicks, order your cab using our mobile application. 
	- Quick and easy payment: all our vehicles accept Interac direct payment cards. By opening a private or corporate account, you no longer need to pay each time you travel. The transportation service will be billed directly to your account. 
	- Availability, speed and punctuality: trained and courteous, our drivers are available 24 hours a day, 7 days a week.
	- Comfort and safety: all our vehicles are fully equipped to ensure the safety and comfort of our passengers. 
	
	Want to know how much your trip will cost? Take a look at our rates page to calculate. 
	Contact us today to find out more about our services or to book your cab.`,
    fixedPriceTitle:[" FROM ST-HUBERT AIRPORT TO (YUL) AIRPORT","FROM ST-HUBERT AIRPORT TO DOWNTOWN MONTREAL ","FROM ST-HUBERT CITY TO (YUL) AIRPORT","UNLOCK CAR DOOR","BATTERY BOOST"],
    fixedPrice:["Day time 65$<br> Night time 75$","Starting from 40$"],
    homeThirdPartTitle:"THE FOLLOWING ARE SOME FIXED PRICES",
    homeThirdPartText:"With Taxi VIP St Hubert we can transport you wherever you need! Due to the high demand for several of our locations and services, some of them have set prices. Check it out!"
  },
  french: {
    homeFirstPartTitle:`TAXI ST_HUBERT VIP NOUS OFFRONS UN SERVICE DE TAXI <span class="text theme-color" >RAPIDE, SÛR ET FIABLE </span>.`,
    homeFirstPartText:`Vous êtes à la recherche d'un service de taxi professionnel ? Taxi VIP St-Hubert, nous vous conduirons où vous voulez, nous suivons chaque appel pour vérifier que chaque demande de service a été traitée rapidement - de sorte que vous ne restez jamais sans taxi. Appelez Taxi VIP St-Hubert aujourd'hui!
   
   Nos chauffeurs sont spécialement qualifiés et suivent les mêmes normes de qualité, de propreté, de confort et de professionnalisme..`,
   homeSecondPartTitle:"La gestion efficace du transport de passagers par taxi est l'objectif principal de Taxi VIP St-Hubert.",
   homeSecondPartText:`POURQUOI RÉSERVER AVEC Taxi VIP St-Hubert. 
   - La plus grande flotte de minivans de la région : faîtes votre choix en fonction de vos besoins. 
   - Réservation d’un taxi en ligne : en quelques clics seulement, commandez votre taxi grâce à notre application mobile. 
   - Paiement simple et rapide : tous nos véhicules acceptent les cartes de paiement direct Interac. En ouvrant un compte privé ou corporatif, vous n’avez plus besoin de payer à chacun de vos déplacements. Le service de transport sera directement facturé sur votre compte. 
   - Disponibilité, rapidité et ponctualité : formés et courtois, nos chauffeurs sont disponibles 24 heures sur 24 et 7 jours sur 7. 
   - Confort et sécurité : tous nos véhicules sont dotés des équipements indispensables pour assurer la sécurité et le confort de nos passagers. 
   
   Vous voulez prévoir le prix de votre déplacement? Jetez un coup d’œil à notre page tarifs pour en faire le calcul. 
   Contactez-nous dès aujourd’hui pour en savoir plus sur nos services ou pour réserver votre taxi..`,
   fixedPriceTitle:[" DE L'AÉROPORT ST-HUBERT VERS L'AÉROPORT DE (YUL) ", " DE L'AÉROPORT ST-HUBERT VERS LE CENTRE-VILLE DE MONTRÉAL ", " DE VILLE ST-HUBERT VERS L'AÉROPORT (YUL) ", " DÉVERROUILLER D'PORTIÈRE ", " BATTERIE BOOSTAGE"],
   fixedPrice:["Jour  65$ <br>Nuit  75$","A partir de 40$."],
   homeThirdPartTitle:"VOICI QUELQUES PRIX FIXES",
   homeThirdPartText:"Avec Taxi VIP St Hubert, nous pouvons vous transporter partout où vous le souhaitez ! En raison de la forte demande pour plusieurs de nos sites et services, certains d'entre eux ont des prix fixes. Consultez-les !"
  }
}

translate(localStorage.getItem('language'))
$('.carousel .carousel-item').each(function(){
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});