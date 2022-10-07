//Texte miroir
const Ecris = document.querySelector("#editeur");
let Lis = document.querySelector("#resultat");

function miroir() {
    let resultat = Ecris.value;
    Lis.innerHTML = resultat;
    //Barre compteur
    let result = Lis.innerText.length;
    let result2 = result / 2;

    console.log(result2)
    let barreProgress = document.querySelector(".barre");
    barreProgress.style.width = result2 + "%";
    
//Barre couleur
    
if (result2 <= 50) {
     barreProgress.style.backgroundColor = 'green';
}
else {
     if (50 < result2 <= 100) {
        barreProgress.style.backgroundColor = 'orange';
     }
     if (85 < result2 ) {
            barreProgress.style.backgroundColor = 'red';
     }
    }
    if (result2 == 100) {
     alert ("Paye si tu veux écrire plus !");
    }
//Max cara
    if (result2 == 100) {
     editeur.setAttribute("maxlength" , "0");
    } else{
     editeur.removeAttribute("maxlength");
    }
};
Ecris.addEventListener("input", miroir);


//changement de curseur
document.getElementById("editeur").style.cursor = 'crosshair';

//dark mode
function darkMode() {
    var DarkMode = document.querySelector("body");
    var DarkMode2 = document.querySelector("#editeur");
    var DarkMode3 = document.querySelector(".barreCalc")
    DarkMode.classList.toggle("dark-mode");
    DarkMode2.classList.toggle("dark-mode");
    DarkMode3.classList.toggle("dark-mode");
}
//Bouton texte

function gras(){
    document.querySelector("#editeur").value += "<b></b>";
};
function italic(){
    document.querySelector("#editeur").value += "<i></i>";
};
function underline(){
    document.querySelector("#editeur").value += "<u></u>";
};
function strikethrough(){
    document.querySelector("#editeur").value += "<strike></strike>";
};

//Bouton reset
const btn = document.getElementById('btn_reset');
btn.addEventListener('click', function reset() {
    editeur.value = '';
    resultat.innerHTML= '';
    document.querySelector('.barre').style.width= '';
    editeur.maxLength = 1;
});

