function menuBurger() {
  let x = document.getElementById("myMenu");
  if (x.className === "menu") {
    x.className += " responsive";
  } else {
    x.className = "menu";
  }
}



  //////  SIDE NAV
/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



/********DARK MODE***********/

function DarkLightMode(){
    //On récupère le <body>
    let btnLightDark = document.body;

    //On ajoute et retire la classe .dark-mode CSS
    btnLightDark.classList.toggle("dark-mode");
    //Recup du bouton + icone par son ID
    const toggleIcon = document.getElementById("toggleIcon");

    //Si l'icone possède la classe fa fa-toggle-off
    if(toggleIcon.className === "fa fa-toggle-off"){
        //On change l'icone en ON
        toggleIcon.className = "fa";
        toggleIcon.classList.toggle("fa-toggle-on");
    }else{
        //Sinon on fait l'inverse
        toggleIcon.className = "fa fa-toggle-off"
    }
  }