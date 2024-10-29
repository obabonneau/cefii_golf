/////////////////////// 
// ACCES MENU BURGER //
///////////////////////

const iconeBurger = document.querySelector(".iconeBurger");
const menuBurger = document.querySelector(".enteteNavigation");
let statutBurger = false;

// AFFICHAGE OU NON DU MENU BURGER AU CLICK
iconeBurger.addEventListener("click", () => {
    iconeBurger.classList.toggle("iconeBurgerClick"); // Test avec la classe iconeBurgerClick et la fonction toggle
    if (!statutBurger) {
        statutBurger = true;       
        menuBurger.style.display = "block";
        // iconeBurger.style = "color: #BF9A3C;";
    } else {
        statutBurger = false;
        menuBurger.style.display = "none";
        // iconeBurger.style = "color: #3B3A3A;";
    }
})


/////////////////////////////////// 
// TEST DE L'EMAIL DU FORMULAIRE //
///////////////////////////////////

const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
const formulaire = document.getElementById("formulaire");
const zoneErreur = document.getElementById("zoneErreur");
let messageErreur = "";

// TEST DU FORMULAIRE SUR L'EVENEMENT SUBMIT
formulaire.addEventListener("submit", (event) => {
    
    let testFormulaire = true;

    event.preventDefault(); // Empêche la soumission du formulaire et le rechargement de la page

    // TEST DE l'EMAIL AVEC REGEXP
    const email = document.getElementById("email").value.trim(); //trim() pour retirer les espaces avant et après
    if (!emailRegExp.test(email)){ // Test RegExp
        testFormulaire = false;
        if (!email) { // Test vierge
            messageErreur = "!!! Veuillez saisir votre email !!!";
        } else {
            messageErreur = "!!! Votre email est incorrect !!!";
        }
    }

    // TEST X, Y et Z
    // ...

    // TEST GLOBAL DU FORMULAIRE
    if (testFormulaire) {
        affichagePopUp("Merci pour votre enregistrement :)"); // Appel de la fonction
        //formulaire.submit();
    } else {
        zoneErreur.textContent = messageErreur;
        zoneErreur.style = "font-size: 0.8em;";
        setTimeout(() => {
            zoneErreur.style = "font-size: 0em;";
        }, 3000);
    }
})


//////////////////////// 
// MODE DARK ET LIGHT //
////////////////////////

let modeSombre = false;

// AFFICHAGE DU MODE DARK OU BLACK AU CLICK
// Les fonctions Dark et Black se trouvent dans fonction.js
document.getElementById("darkLight").addEventListener("click", () => { 
    if (!modeSombre) {
        modeSombre = true;
        modeDark();
    } else {
        modeSombre = false;
        modeLight();
    }
})


///////////
// POPUP //
///////////

const fontPopUp = document.querySelector(".fontPopUp");

// FONCTION AFFICHAGE PAR POPUP
function affichagePopUp (msg) {
    document.getElementById("messagePopUp").textContent = msg; 
    fontPopUp.style.display = "flex";
}

// DESAFFICHAGE DU POP AU CLICK
document.getElementById("closePopUp").addEventListener("click", () => {
    fontPopUp.style.display = "none";
})


//////////////////////////////
// FLECHE SCROLL HAUT PAGE  //
//////////////////////////////

const flecheScroll = document.querySelector(".flecheScroll");

window.addEventListener("scroll", ()=> {   
    if (window.scrollY > 100) {
        flecheScroll.style.visibility = "visible";
    } else {
        flecheScroll.style.visibility = "hidden";
    }
})

flecheScroll.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Pour un défilement doux
    });
});