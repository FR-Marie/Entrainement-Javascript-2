//constantes de connexion
const email = "mic@gmail.com";
const password = "test";

//recup la div id="error" pour afficher les erreurs de connexion
let errorLogin = document.getElementById("error");

//fonction appelée avec le bouton "sign in" attribut onclick = "connexion()"
function connexion(){
    //Récupèrer les 2 input à l'aide de leurs ID et afficher leurs valeurs dans la console
    let emailUser = document.getElementById("email").value;
    let passwordUser = document.getElementById("password").value;


    //Détection des erreurs
    //Vérifier que les champs ne soient pas vides
    if(emailUser === "" || passwordUser === ""){
        errorLogin.className = "error";
        errorLogin.innerHTML = "!! failed to connect, invalid email or password ";

    }else{
        //Seconde vérification
        // Si email entré par utilisateur === aux constantes utilisateur
        if(emailUser === email && passwordUser === password){
            
            //check dans la console si ça match
            console.log("Successed to connect, Welcome!");

            //On recup id du parent formualaire et on le cache avec css
            document.getElementById("login").style.display = "none";
            //On recup la div id=loader et on lui ajoute une classe
            document.getElementById("loader").classList.add("loader");
            

            //redirection grâce à l'objet (la classe) WINDOW.LOCATION = url index2.html (url absolue ou relative)
            function redirection(){
                window.location = "index2.html";
                console.log("test3s")
            }
            //délai avant activation de la fonction redirection
            setTimeout(redirection, 3000);
           
            
        }else{
            errorLogin.className = "error";
            errorLogin.innerHTML = "failed to connect, invalid email or password";
        }
    }
}