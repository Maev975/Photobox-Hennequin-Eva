import { loadRessource } from "./photoloader";

let liensGallerie = {}; // Variable pour stocker les liens de navigation de la galerie

export async function loadGallery(uri = "/www/canals5/phox/api/photos") { // Fonction pour charger la galerie
  const gallery = await loadRessource(uri); // Appel de la fonction pour charger les ressources de la galerie
  liensGallerie = gallery.links;
  return gallery;
}

export async function load() { // Fonction pour charger la galerie 
  return loadGallery(); 
}


// Fonctions de navigation
export function next() {
  if (liensGallerie.next) {
    return loadGallery(liensGallerie.next.href); // Vérification de l'existence du lien "next"
  } else {
    return Promise.reject("Pas de page suivante"); // Si le lien "next" n'existe pas, on rejette la promesse
  }
}

// Pareil pour les autres fonctions de navigation
export function prev() {
  if (liensGallerie.prev) {
    return loadGallery(liensGallerie.prev.href);
  } else {
    return Promise.reject("Pas de page précédente");
  }
}

export function first() {
  if (liensGallerie.first) {
    return loadGallery(liensGallerie.first.href);
  } else {
    return Promise.reject("Pas de première page");
  }
}

export function last() {
  if (liensGallerie.last) {
    return loadGallery(liensGallerie.last.href);
  } else {
    return Promise.reject("Pas de dernière page");
  }
}

