//import photoloader from "./lib/photoloader.js";

import { API_URL } from "./config.js";

export function loadPicture(idPicture) {
    const api = `${API_URL}/photos/${idPicture}`;
    return fetch(api)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject("Erreur lors de la récupération de l'image");
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

export function loadRessource(uri){
    return fetch(`https://webetu.iutnc.univ-lorraine.fr${uri}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject("Erreur lors de la récupération de l'image");
            }
        })
        .catch((error) => {
            console.error(error);
        });
}