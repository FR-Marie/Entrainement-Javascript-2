// FONCTION déclenchée au clic sur le bouton "AJOUTER UNE TACHE"

function nouvelleTache() {
    //Récupérer la liste HTML ol
    const listeParent = document.getElementById("taches-liste");

    //Créer un noeud élément <li> pour <ol>
    let li = document.createElement("li");

    //Récupérer la valeur du champ input entrée par l'utilisateur
    const inputValue = document.getElementById("input-ajout-tache").value;

    //Création d'un noeud de type texte qui convertit la valeur du champs INPUT en type texte
    let liNode = document.createTextNode(inputValue);

    //Ajouter le champ texte à <li> (en tant qu'enfant appendchild)
    li.appendChild(liNode);


    //Vérifier que le champ n'est pas vide
    if (inputValue === "") {
        alert("merci de remplir le champ")
    } else {
        listeParent.appendChild(li);
    }

    //Vider le champ après avoir ajouté une tâche)
    document.getElementById("input-ajout-tache").value = "";


    //Ajouter un bouton supprimer à chaque <li>
    //Ajout d'une balise span à chaque <li>
    let span = document.createElement("span");

    //Dans chaque span on ajoute un noeud texte avec croix (X)
    let croix = document.createTextNode(" x ");
    

    //Ajout du noeud texte à la span
    span.appendChild(croix);
    span.className = "supprimer";

    //Ajout chaque span à <li>
    li.appendChild(span);


    //Supprimer une tache
    //Recuper les elements span qui on la classe supprimer ['supprimer']
    let btnSupprimer = document.getElementsByClassName("supprimer");

    //Boucle de parcours de toutes les span qui on la classe supprimer <span class="supprimer">
    let i;
    //3 paramètres i = 0; i est < a la longueur du tableau <span class="supprimer"; i += 1
    for(i = 0; i < btnSupprimer.length; i++){
        //Au clic sur chaque span = on declenche une fonction anonyme
        btnSupprimer[i].onclick = function (){
            //let spanParentLI = btnSupprimer[i].parentElement;
            //On recupere les <li> parent de <span class="supprimer">
            let spanParentLI = this.parentElement;
            spanParentLI.style.display = "none";
        }
    }

}