//import photoloader from "./lib/photoloader.js";
//getPicture(window.location.hash ? window.location.hash.substr(1): 105);

//npm run td6

import { loadPicture, loadRessource } from "./photoloader.js";
import { displayCategorie, displayCommentaires, displayPicture } from "./ui.js";
import { load} from "./gallery.js";
import { displayGallery } from "./gallery_ui.js";


function getPicture(id) {
  loadPicture(id)
    .then((photo) => {
      displayPicture(photo);
      console.log(photo);
      return Promise.all([photo, getCategorie(photo)]);
    })
    .then(([photo, cate]) => {
      displayCategorie(cate);
      return getCommentaires(photo);
    })
    .then((com) => {
      console.log(com);
      displayCommentaires	(com);
    })
    .catch((error) =>
      console.error("Impossible de récupérer la photo :", error)
    );
}

function getCategorie(donnees) {
  const cate = donnees.links.categorie.href;
  return loadRessource(cate);
}

function getCommentaires(donnees) {
  const com = donnees.links.comments.href;
  return loadRessource(com);
}

getPicture(105);

document.getElementById("load_gallery").addEventListener("click", () => {
  console.log("Chargement de la galerie");
  load()
    .then((galerie) => displayGallery(galerie))
    .catch((err) => console.error("Erreur lors du chargement de la galerie :", err));
});


window.addEventListener("hashchange", () => {
  const id = window.location.hash.substring(1);
  if (id) getPicture(id);
});
