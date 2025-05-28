import Handlebars from "handlebars";
import { getPicture } from "./index.js";

export function displayGallery(galleryData) {
  const container = document.getElementById("galerie");
  container.innerHTML = "";

  const templateSource = document.getElementById("galleryTemplate").innerHTML;
  const template = Handlebars.compile(templateSource);

  galleryData.photos.forEach((photo) => { // Pour chaque photo dans la galerie
    const data = { // Préparation des données pour le template
      titre: photo.photo.titre,
      id: photo.photo.id,
      thumbnail:
        "https://webetu.iutnc.univ-lorraine.fr/" + photo.photo.thumbnail.href, // URL de la miniature (étudier avec Postman)
    };

    // Génération de l'élément HTML
    const html = template(data);
    const tempDiv = document.createElement("div"); 
    tempDiv.innerHTML = html;
    const inserted = tempDiv.firstElementChild;

    // Ajouter l’écouteur de clic
    const image = inserted.querySelector("img");
    if (image) {
      image.addEventListener("click", () => {
        console.log("Chargement de la photo avec l'ID :", data.id);
        getPicture(data.id); // Appel de la fonction pour charger la photo
      });
    }

    // Ajouter au conteneur galerie
    container.appendChild(inserted);
  });

  // Gérer l'état des boutons de navigation
  document.getElementById("btn-next").disabled = !galleryData.links.next;
  document.getElementById("btn-prev").disabled = !galleryData.links.prev;
  document.getElementById("btn-first").disabled = !galleryData.links.first;
  document.getElementById("btn-last").disabled = !galleryData.links.last;
}
