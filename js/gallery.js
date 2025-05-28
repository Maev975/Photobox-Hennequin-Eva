import { loadRessource } from "./photoloader";

let currentLinks = {};

export async function loadGallery(uri = "/www/canals5/phox/api/photos") {
  const gallery = await loadRessource(uri);
  currentLinks = gallery.links;
  return gallery;
}

export async function load() {
  return loadGallery(); 
}


// Fonctions de navigation
export function next() {
  if (currentLinks.next) {
    return loadGallery(currentLinks.next.href);
  } else {
    return Promise.reject("Pas de page suivante");
  }
}

export function prev() {
  if (currentLinks.prev) {
    return loadGallery(currentLinks.prev.href);
  } else {
    return Promise.reject("Pas de page précédente");
  }
}

export function first() {
  if (currentLinks.first) {
    return loadGallery(currentLinks.first.href);
  } else {
    return Promise.reject("Pas de première page");
  }
}

export function last() {
  if (currentLinks.last) {
    return loadGallery(currentLinks.last.href);
  } else {
    return Promise.reject("Pas de dernière page");
  }
}