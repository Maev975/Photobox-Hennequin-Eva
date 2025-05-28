import Handlebars from "handlebars";

export function displayPicture(photo) { // Fonction pour afficher une photo
  const templateSource = document.getElementById("photoTemplate").innerHTML;
  const template = Handlebars.compile(templateSource);

  const html = template({ // Préparation des données pour le template
    url: "https://webetu.iutnc.univ-lorraine.fr/" + photo.photo.url.href,
    titre: photo.photo.titre,
    type: photo.photo.type,
    description: photo.photo.descr,
    hauteur: photo.photo.height,
    largeur: photo.photo.width,
    id: photo.photo.id,
  });

  const container = document.getElementById("photoContainer"); // Sélection du conteneur pour afficher la photo
  container.innerHTML = html;
}

// Même principe que pour displayPicture, mais pour afficher la catégorie
export function displayCategorie(categorie) {
  const templateSource = document.getElementById("cateTemplate").innerHTML;
  const template = Handlebars.compile(templateSource);

  const html = template({
    nom: categorie.categorie.nom,
    description: categorie.categorie.descr,
    id: categorie.categorie.id,
  });

  const container = document.getElementById("categorieContainer");
  container.innerHTML = html;
}

// Même principe que pour displayPicture, mais pour afficher les commentaires
export function displayCommentaires(com) {
  const templateSource = document.getElementById("comTemplate").innerHTML;
  const template = Handlebars.compile(templateSource);

  const html = template({
    commentaires: com.comments, // liste des commentaires
  });

  const container = document.getElementById("commentaireContainer");
  container.innerHTML = "<h4>Commentaires :</h4><ul>" + html + "</ul>";
}
