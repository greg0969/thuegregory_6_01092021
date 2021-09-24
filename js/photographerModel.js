
const displayPhotographerModel = (photographers) => {
    let urlParam = new URLSearchParams(window.location.search); //URLSearchParams
    const photographerId = urlParam.get("id"); 
    const main = document.querySelector(".main");
    
    const selectedPhotographer = photographers.find(photographer => {
        const photographerIdString = photographer.id.toString();
        return photographerIdString === photographerId ;
    });

    let photographerModel = new Photographer(selectedPhotographer)
        main.innerHTML = photographerModel.createhtml1();


        const mediaGallery = (urlId) =>  { 
            medias.filter(media.photographerId.toString() === urlId )
            return mediaGallery ; 
        }
        const updatedMediaGallery = mediaGallery(photographerId);

        
        
    };

const init = async() => {
    const data = await getData();
    displayPhotographerModel(data.photographers); 
}
init();

