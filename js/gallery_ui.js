import Handlebars from "handlebars";


export function displayGallery(galleryData) {
  const container = document.querySelector('#galerie');
  container.innerHTML = ""; 

  const templateSource = document.getElementById("galleryTemplate").innerHTML;
  const template = Handlebars.compile(templateSource);

  galleryData.photos.forEach(photo => {
    const data = {
        titre: photo.photo.titre,
        id: photo.photo.id,
        thumbnail: "https://webetu.iutnc.univ-lorraine.fr/" + photo.photo.thumbnail.href,

    }

    const html = template(data); 
    container.insertAdjacentHTML('beforeend', html);
  });
}
