translateObject = {
    english: {
        careerTitle: "Join our team",
        careerText: `Do you enjoy driving a car and discovering parts of the city? Are you good with people? A career as a taxi driver may be perfect for you!

        For any questions, please call us
        `,
        careerFileInput: `<span class="text-danger">*</span>attach a copy of your driver's license, authorized driver's license and 3 pages of your recent driving record (maximum 7 files)`,
        careerApplyBtn: "apply now",
        placeHolders: {
            careerPhone: "*Phone",
            careerEmail: "*Email",
            careerFname: "*First Name",
            careerLname: "*Last Name",
            careerAddress: "*Address"
        }
    },
    french: {
        careerTitle: "Rejoindre notre équipe ",
        careerText: `
        Vous aimez vous balader en voiture et sillonner les rues de la ville, vous aimez les gens?
         Une carrière de chauffeur de taxi vous attend!

         Pour toute question, veuillez nous appeler`,
        careerFileInput: `<span class="text-danger">*</span>joignez des fichiers image de votre permis de conduire, de votre permis de conduire autorisé et de 3 pages de votre dossier de conduite récent (maximum 7 fichiers)`,
        careerApplyBtn: `Postulez maintenant`,
        placeHolders: {
            careerPhone: "*Téléphone",
            careerEmail: "*Courriel",
            careerFname: "*Prénom",
            careerLname: "*Nom ",
            careerAddress: "*Adresse"
        }
    }
}
function onSubmit(token) {
    document.getElementById("demo-form").submit();
}
// document.getElementById('careerForm').addEventListener('submit', function (e) {
//     e.preventDefault()
//     // var data=Object.values(this).reduce((obj,field) => { if(field.name=='attachments'){
//     //     obj[field.name] = /*[...*/field.files//]
//     // }else if(field.name){obj[field.name] = field.value}; return obj }, {})
//     // data.clientLanguage=localStorage.getItem('language')||'french'
//     const data = new FormData
//     data.append('firstName', document.getElementById(''))
//     console.log(data)
//     fetch(`${domainName}career`, {
//         method: 'POST',
//         body: JSON.stringify(data)
//     }).then(async (response) => {
//         responseAlert(await response.json(), response.status)
//         if (response.ok) { document.getElementById("careerForm").reset() }
//     })
// })
translate(localStorage.getItem('language'))
document.getElementById('careerlang').value=localStorage.getItem('language')