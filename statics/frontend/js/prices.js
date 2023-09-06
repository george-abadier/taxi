translateObject={
    english:{
        placeHolderOptionRegion:"select your region",
        placeHolderOptionCity:"select your city"
    },
    french:{
        placeHolderOptionRegion:"sélectionnez votre région",
        placeHolderOptionCity:"sélectionnez votre ville"
    }
}
document.querySelector('#region').addEventListener('change',function(){
  fetch(`${domainName}price/${this.value}`, {
    method: 'GET',
    headers:{"Content-Type": "application/json" } ,
  }).then(response=>response.json())
  .then(data=>{
    var thereIsACityInThisRegion=false
    for(let city in data.data){
        thereIsACityInThisRegion=true
        const option=document.createElement('option')
        option.setAttribute('value',data.data[city])
        option.innerHTML=city
        document.querySelector('#city').appendChild(option)
    }
    if(thereIsACityInThisRegion){
        document.querySelector('#city').removeAttribute('disabled')
    }else{
        document.querySelector('#city').setAttribute('disabled',true)
    }
  })
})
document.querySelector('#city').addEventListener('change',function(){
   var price= document.querySelector('#thePrice')
   price.innerHTML=this.value
   price.classList.remove('d-none')

})
translate(localStorage.getItem('language'))