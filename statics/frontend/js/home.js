// let items = document.querySelectorAll('.carousel .carousel-item')
// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 100000
// })
debugger
var translateObject = {
  english: {
    homeFirstPartTitle:`TAXI ST_HUBERT VIP OUR PROMIS <span class="text theme-color" >FAST, SAFE, RELIABLE</span> TAXI SERVICE`,
    homeFirstPartText:`Professional Service at All Times
    Are you looking for a taxi service ? Taxi Taxi VIP St-Hubert, we will take you wherever you want, we follow-up on every call to verify that each service request has been processed – so you’re never left without a cab. Hail  Taxi VIP St-Hubert today!
     
    Our drivers are specially trained to give you full satisfaction and make sure you arrive quickly and safely at your destination. You can be assured that every Taxi Coop cab is driven by a qualified driver, all of whom meet all the same standards of quality, cleanliness, comfort and professionalism.`,
    homeSecondPartTitle:"The efficient management of passenger transportation via cabs is Taxi VIP St-Hubert's primary goal.",
    homeSecondPartTitle:" The passenger enjoys complete option in terms of cost, comfort, and flexibility when using Taxi VIP St-Hubert. On the one hand, he has the option to select the ideal vehicle for each occasion from a selection of taxis. On the other hand, he can reserve cabs in advance and receive discounts, or he can book them on the spot and retain the familiar flexibility. In addition to a wide range of options, Taxi VIP St-Hubert provides drivers and vehicles of a high standard, which is ensured by a quality control system. The competent driving and immaculate condition of the vehicle allow the passenger to relax. The simplified online booking system, as well as the hassle-free e-payment and billing process, round out the Taxi VIP St-Hubert service.",
    fixedPriceTitle:[" From the airport of saint Hubert To airport (YUL)","From the airport of saint -Hubert to downtown Montreal ","From ville saint Hubert To airport of Montreal (YUL )","unlocking door","Battery Boost"],
    fixedPrice:["Day time 65$<br> Night time 75$","Starting from 40$"],
    homeThirdPartTitle:"THE FOLLOWING ARE SOME FIXED PRICES",
    homeThirdPartText:"With Taxi VIP St Hubert we can transport you wherever you need! Due to the high demand for several of our locations and services, some of them have set prices. Check it out!"
  },
  french: {
    homeFirstPartTitle:`TAXI ST_HUBERT VIP NOUS OFFRONS UN SERVICE DE TAXI <span class="text theme-color" >RAPIDE, SÛR ET FIABLE </span>.`,
    homeFirstPartText:`À propos
    Un service professionnel en tout temps
   Vous êtes à la recherche d’un service de taxis ? Chez Taxi VIP St-Hubert, nous vous conduirons où vous le désirez , Afin de mieux vous servir, nous effectuons des suivis pour nous assurer que chaque demande de service a été traitée. Hélez  Taxi VIP St-Hubert dès aujourd’hui!
   
   Nos chauffeurs sont spécialement formés pour vous satisfaire et pour vous reconduire rapidement en toute sécurité à votre destination. Quelle que soit la voiture dans laquelle vous montez, nos chauffeurs qualifiés respectent tous les mêmes normes de qualité, tant en matière de propreté que de confort et de professionnalisme.`,
   homeSecondPartTitle:"La gestion efficace du transport de passagers par taxi est l'objectif principal de Taxi VIP St-Hubert.",
   homeSecondPartText:"Le passager bénéficie d'une option complète en termes de coût, de confort et de flexibilité lorsqu'il utilise Taxi VIP St-Hubert. D'une part, il a la possibilité de choisir le véhicule idéal pour chaque occasion parmi une sélection de taxis. D'autre part, il peut réserver les taxis à l'avance et bénéficier de réductions, ou les réserver sur place et conserver la flexibilité que l'on connaît. En plus d'un large éventail d'options, Taxi VIP St-Hubert met à la disposition de ses clients des chauffeurs et des véhicules de haut niveau, ce qui est assuré par un système de contrôle de la qualité. La conduite compétente et l'état impeccable du véhicule permettent au passager de se détendre. Le système de réservation en ligne simplifié, ainsi que le processus de paiement et de facturation électronique sans tracas, complètent le service de Taxi VIP St-Hubert.",
   fixedPriceTitle:[" Depuis l'aéroport de Saint-Hubert Vers l'aéroport (YUL)","De l'aéroport de Saint-Hubert au centre-ville de Montréal"," De ville saint Hubert Vers l'aéroport de Montréal (YUL ) ","Le déverrouillage d’une portière","Déverrouillage des portières / survoltage de batterie"],
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