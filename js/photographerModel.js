const displayPhotographerModel = (photographers, media) => {


  /* On récupère l'id dans l'url */ 

  let urlParam = new URLSearchParams(window.location.search); 
  const photographerId = urlParam.get("id");
  const main = document.querySelector(".main");
  const priceSpan = document.getElementById("price");

  /* on cherche le photographe selon l id recupere */

  const selectedPhotographer = photographers.find((photographer) => {
    const photographerIdString = photographer.id.toString();
    return photographerIdString === photographerId;
  });
  

  /* On créer et affiche la carte du photographe */ 

  let photographerModel = new Photographer(selectedPhotographer);
  main.innerHTML = photographerModel.displayPhotographerCard();
  priceSpan.innerHTML = photographerModel.price +`€ / jour`;
  
  /* On affiche la gallerie de media du bon photographe */

  const mediaGallery = media.filter(
    (element) => element.photographerId == photographerId
  );
  displayGallery(mediaGallery);
 

/* permet d'afficher les medias trié selon l option selectionnée */

 document.addEventListener("change", (e) => {
   const filter = filterByOption(mediaGallery,e.target.value)
   const relevantMediaDiv = document.querySelector(".gallerie");
   relevantMediaDiv.innerHTML = ""
   displayGallery(filter)
   lightbox();
 })
  
};



/* fonction de tri selon les options */

function filterByOption (media,option) {
  if (option == "Popularité"){
    return media.sort((a,b)=> {
      return b.likes - a.likes
    });
  }
  if (option == "Date"){
    return media.sort((a,b) => new Date(b.date) - new Date(a.date));
  }
  if (option == "Titre"){
    return media.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) { 
        return -1; 
      }
      if (a.title.toLowerCase() > b.title.toLowerCase()) { 
        return  1; 
      } 
      return  0;
  })}
}


/* Fonction qui permet d'afficher la gallerie de medias */

function displayGallery(mediaGallery) {
  const relevantMediaDiv = document.querySelector(".gallerie");
  mediaGallery.forEach((media) => {
    const relevantMedia = new MediasFactory(media);

    relevantMediaDiv.innerHTML += relevantMedia.displayRelevantMedia();
    
  });
}




const init = async () => {
  const data = await getData();
  displayPhotographerModel(data.photographers, data.media);
  getTotalLike();
  updateLike();
  lightbox(data.media);
  displayModalForm();
};
init();