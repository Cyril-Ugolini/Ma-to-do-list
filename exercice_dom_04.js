"use strict"
const listeTaches = document.getElementById("task-list");
const inputNouvelleTache = document.getElementById("task-name");
const boutonAjouter = document.getElementById("task-save")
const boutonSupp = document.getElementById("task-delete")

/*
boutonSupp.addEventListener("click", function (event)
{
  // let label = document.getElementById('checkbox10');
  // if(label){
  //   label.remove();
  // }
  event.target.parentNode.remove();

});
*/

// Ajout de nouvelles tâches


function ajouterTache() {
  console.log('ici');

  const monLi = document.createElement("li");
  const bouton = document.createElement("button");
  const checkbox = document.createElement("input");
  const label = document.createElement("label")

  checkbox.type = "checkbox"
  label.setAttribute("for", "checkbox1");
  label.textContent = inputNouvelleTache.value;
  bouton.textContent = "supprimer"

  // monLi.textContent = inputNouvelleTache.value;
  // monLi.textContent = ""

  monLi.appendChild(checkbox);
  listeTaches.appendChild(monLi);
  monLi.appendChild(label)
  monLi.appendChild(bouton);

  inputNouvelleTache.value = "";

}

boutonAjouter.addEventListener("click", ajouterTache);


//Suppression de tâches
function supprimerTache(event) {
  if (event.target.nodeName === "BUTTON") {
    // listeTaches.removeChild(event.target);
    event.target.parentNode.remove();
  }
}
listeTaches.addEventListener("click", supprimerTache);

/*
const mesLi = document.querySelectorAll("li");
mesLi.forEach(function (liActuel) {
  liActuel.addEventListener("click", supprimerTache);
});

*/
//Marquage des tâches comme terminées

document.querySelectorAll("ul").forEach(item => {
  item.addEventListener("change", event => {
    if (event.target.checked) {
      event.target.parentElement.classList.add("faite");
    }else{
      event.target.parentElement.classList.remove("faite");
    }
  });
});

function changerCouleur(){
  let checkbox = document.getElementById("checkbox");
  let label = document.getElementById("label");
  if (checkbox.checked){
    label.parentElement.classList.add("faite");
  }else {
    label.parentElement.classList.remove("faite");
  }
}
// Filtrage des tâches (toutes, actives, terminées)

// function filterTasks(filter) {
//   const ul = document.querySelectorAll('ul');
//   ul.forEach(ul => {
//       switch (filter) {
//           case 'all':
//               ul.classList.remove('hidden');
//               break;
//           case 'active':
//               ul.classList.toggle('hidden', !ul.classList.contains('faite'));
//               break;
//           case 'completed':
//               ul.classList.toggle('hidden', !ul.classList.contains('à faire'));
//               break;
//       }
//   });
// }

// Sauvegarde de tâches dans le localStorage du navigateur
// function supprimerTaches (event){
//   console.log (event);
//   if (event.target.tagName ==="BOUTON"){
//     console.log("C'est un bouton");
//   }
// }
// maListe.addEventListener("click", supprimerTache);