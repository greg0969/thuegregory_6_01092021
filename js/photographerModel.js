
const displayPhotographerModel = (photographers,media) => {
    let urlParam = new URLSearchParams(window.location.search); //récupère l'id dans l'url
    const photographerId = urlParam.get("id"); 
    const main = document.querySelector(".main");
    
    const selectedPhotographer = photographers.find(photographer => { 
        const photographerIdString = photographer.id.toString();
        return photographerIdString === photographerId ;
    });

    let photographerModel = new Photographer(selectedPhotographer)
        main.innerHTML = photographerModel.displayPhotographerCard  ();

        const mediaGallery = media.filter(element => element.photographerId == photographerId) 
        displayGallery(mediaGallery);    
        
    };

function displayGallery(mediaGallery) {
    const relevantMediaDiv =  document.querySelector(".gallerie");
    mediaGallery.forEach((media) => {
       const relevantMedia =  new MediasFactory(media);
       relevantMediaDiv.innerHTML += relevantMedia.displayRelevantMedia();
    }
    )};
    
const init = async() => {
    const data = await getData();
    displayPhotographerModel(data.photographers,data.media); 
}
init();

