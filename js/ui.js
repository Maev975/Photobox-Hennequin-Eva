import Handlebars from "handlebars";

export function displayPicture(photo) {
  const templateSource = document.getElementById("photoTemplate").innerHTML;
  const template = Handlebars.compile(templateSource);

  const html = template({
    url: "https://webetu.iutnc.univ-lorraine.fr/" + photo.photo.url.href,
    titre: photo.photo.titre,
    type: photo.photo.type,
    description: photo.photo.descr,
    hauteur: photo.photo.height,
    largeur: photo.photo.width,
    categorie: photo.links.categorie.href,
  });

  const laPhoto = document.getElementById("la_photo");
  laPhoto.innerHTML = html;
}

export function displayCategorie(categorie) {
    const templateSource = document.getElementById("cateTemplate").innerHTML;
    const template = Handlebars.compile(templateSource);
    
    const html = template({
        nom: categorie.categorie.nom,
        description: categorie.categorie.descr,
        id: categorie.categorie.id,
    });
    
    const laPhoto = document.getElementById("la_categorie");
    laPhoto.innerHTML = html;
    }

export function displayCommentaires(com) {
    const templateSource = document.getElementById("comTemplate").innerHTML;
    const template = Handlebars.compile(templateSource);
    
    const html = template({
        commentaires: com.comments,
    });
    
    const laPhoto = document.getElementById("les_commentaires");
    laPhoto.innerHTML = html;
}
