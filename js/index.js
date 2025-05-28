//import photoloader from "./lib/photoloader.js";
//getPicture(window.location.hash ? window.location.hash.substr(1): 105);

//npm run td6

import { loadPicture, loadRessource } from "./photoloader.js";
import { displayCategorie, displayCommentaires, displayPicture } from "./ui.js";
import * as gallery from "./gallery.js";
import { displayGallery } from "./gallery_ui.js";

/*
 * Chargement de la photo et de ses détails
 * @param {number} id - L'identifiant de la photo à charger
 */
export function getPicture(id) {
  loadPicture(id) // Appel de la fonction pour charger la photo
    .then((photo) => {
      displayPicture(photo); // Affichage de la photo
      //console.log(photo);
      return Promise.all([photo, getCategorie(photo)]); // Récupération de la catégorie associée à la photo
    })
    .then(([photo, cate]) => { 
      displayCategorie(cate); // Affichage de la catégorie
      return getCommentaires(photo); // Récupération des commentaires associés à la photo
    })
    .then((com) => {
      //console.log(com);
      displayCommentaires(com); // Affichage des commentaires
    })
    .catch((error) =>
      console.error("Impossible de récupérer la photo :", error) // Gestion des erreurs
    );
}

function getCategorie(donnees) { // Récupération de la catégorie associée à la photo
  const cate = donnees.links.categorie.href;
  return loadRessource(cate);
}

function getCommentaires(donnees) { // Récupération des commentaires associés à la photo
  const com = donnees.links.comments.href;
  return loadRessource(com);
}

getPicture(105); // Chargement de la photo avec l'ID 105 au démarrage

document.getElementById("load_gallery").addEventListener("click", () => { // Événement pour charger la galerie
  console.log("Chargement de la galerie");
  gallery
    .load()
    .then((galerie) => displayGallery(galerie)) // Affichage de la galerie
    .catch((err) =>
      console.error("Erreur lors du chargement de la galerie :", err)
    );
});

window.addEventListener("hashchange", () => { // Événement pour gérer le changement de hash dans l'URL
  const id = window.location.hash.substring(1);
  if (id) getPicture(id);
});

document.getElementById("btn-next").addEventListener("click", () => { // Événement pour charger la page suivante de la galerie
  console.log("Chargement de la page suivante de la galerie");
  gallery.next().then(displayGallery).catch(console.error); 
});

document.getElementById("btn-prev").addEventListener("click", () => { // Événement pour charger la page précédente de la galerie
  gallery.prev().then(displayGallery).catch(console.error);
});

document.getElementById("btn-first").addEventListener("click", () => { // Événement pour charger la première page de la galerie
  gallery.first().then(displayGallery).catch(console.error);
});

document.getElementById("btn-last").addEventListener("click", () => { // Événement pour charger la dernière page de la galerie
  gallery.last().then(displayGallery).catch(console.error);
});
