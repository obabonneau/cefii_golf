// FONCTION POUR LE MODE DARK
function modeDark() {

    // MODIFICATION DU BOUTON DARK/LIGHT
    boutonSombre = document.querySelector(".fa-circle-half-stroke");
    boutonSombre.title = "Passer au mode normal";
    boutonSombre.style.color = "#BF9A3C";
    
    // MODIFICATION DU BODY
    document.body.style.backgroundColor = "#495057";

    // MODIFICATION DES H2 DANS MAIN
    const h2 = document.querySelectorAll("main h2");
    for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = "#FFFFFF";
    }

    // MODIFICATION DES BALISES P DANS SECTION INFORMATIONS
    const p = document.querySelectorAll(".sectionInformations p");
    for (let i = 0; i < h2.length; i++) {
            p[i].style.color = "#FFFFFF"; 
    }

    // MODIFICATION DES BALISES A DANS SECTION INFORMATIONS
    const a = document.querySelectorAll(".sectionInformations a");
    for (let i = 0; i < h2.length; i++) {
            a[i].style.color = "#FFFFFF";   
    }
}

// FONCTION POUR LE MODE LIGHT
function modeLight() {

    // MODIFICATION DU BOUTON DARK/LIGHT
    boutonSombre = document.querySelector(".fa-circle-half-stroke");
    boutonSombre.title = "Passer au mode sombre";
    boutonSombre.style.color = "#495057";
    
    // MODIFICATION DU BODY
    document.body.style.backgroundColor = "#FFFFFF";

    // MODIFICATION DES H2 DANS MAIN
    const h2 = document.querySelectorAll("main h2");
    for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = "#000000";   
    }

    // MODIFICATION DES BALISES P DANS SECTION INFORMATIONS
    const p = document.querySelectorAll(".sectionInformations p");
    for (let i = 0; i < h2.length; i++) {
            p[i].style.color = "#3B3A3A"; 
    }

    // MODIFICATION DES BALISES A DANS SECTION INFORMATIONS
    const a = document.querySelectorAll(".sectionInformations a");
    for (let i = 0; i < h2.length; i++) {
            a[i].style.color = "#3B3A3A"; 
    }
}