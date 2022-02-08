const touches = document.querySelectorAll(".touche");

//les notes

const note = document.querySelector(".note-encours");

//index des span
const indice = document.querySelectorAll(".indice");

function jouerNote(event){
    //Recup dynamique de la balise audio

    const audio = document.querySelector(`audio[data-touches="${event.keyCode}"]`);
    const touche = document.querySelector(`.touche[data-touches="${event.keyCode}"]`);

    
}