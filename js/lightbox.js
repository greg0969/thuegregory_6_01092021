// lightbox

function lightbox(media) {

  const lightboxSection = document.querySelector(".lightbox");
  const links = document.querySelectorAll(".media");
  const container = document.getElementById("content-container");
  const lightboxContainer = document.querySelector(".lightbox");
 

  links.forEach((link) => {
    const src = link.getAttribute("data-src");
    
    link.addEventListener("click", () => {
        
        //const src = "public/images/photographes/243/Animals_Rainbow.jpg"
        const name = link.getAttribute("aria-label");
        const selectedMedia = media.find((oneMedia) => {
          const mediaSrc = oneMedia.title.toString();
          return mediaSrc === name;
      });
      const mediaLightbox = new MediasFactory(selectedMedia);
      container.style.display = "none";
      lightboxSection.style.display = "flex";
      lightboxContainer.innerHTML = mediaLightbox.displayLightbox();

      // Fermer la lightbox
      const close = document.querySelector(".lightbox__close");
      close.addEventListener("click", () => {
        lightboxSection.innerHTML = "";
        container.style.display = "block";
      });

  
        // previous

        const previous = document.querySelector(".lightbox__previous");
        previous.addEventListener("click", () => {
          
         // link.setAttribute("src",src[src.length -1])
        })
  
        // next
  
        const next = document.querySelector(".lightbox__next");
        next.addEventListener("click", () => {
          console.log("oui")
          link.setAttribute("src",src)
         
        })
      
      
      
     
    });
  })
}


