import { loadRessource } from "./photoloader";

export async function load(){
    const gallery = await loadRessource("/www/canals5/phox/api/photos");
    console.log(gallery.photos);
    console.log(gallery.photos[1].photo.thumbnail.href);
    console.log("load");

    return gallery
}