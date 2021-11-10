// lightbox

function lightbox(media) {
  const lightboxSection = document.querySelector(".lightbox");
  const links = document.querySelectorAll(".media");
  const container = document.getElementById("content-container");

  
  //links.forEach( (link) => {
    
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
      const lightboxContainer = document.querySelector(".lightbox");
      const name = links[i].getAttribute("aria-label");
      let selectedMedia = media.find((oneMedia) => {
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
          const lightboxMedia = document.querySelector(".lightbox__container__content");
          let src = links[i].getAttribute("data-src");
          let alt = links[i].getAttribute("alt");
          let ariaLabel = links[i].getAttribute("aria-label");
          let title = document.querySelector("#lightboxTitle");

          let index;
          console.log(src);
          for (let i = 0; i < links.length; i++) {
            //console.log(links[i].getAttribute("data-src"));
            if (src == links[i].getAttribute("data-src") && alt == links[i].getAttribute("alt") && ariaLabel == links[i].getAttribute("aria-label")) {
              index = i;
            }
            
          }
          lightboxMedia.setAttribute("src", links[index - 1].getAttribute("src"));
          lightboxMedia.setAttribute("alt",links[index - 1].getAttribute("alt"));
          lightboxMedia.setAttribute("data-src",links[index - 1].getAttribute("src"));
          lightboxMedia.setAttribute("aria-label",links[index - 1].getAttribute("alt"));
          title.innerHTML = links[index - 1].getAttribute("alt") ;
          src = links[i - 1].getAttribute("src")
          
        });

        // next

        const next = document.querySelector(".lightbox__next");
        next.addEventListener("click", () => {
          const lightboxMedia = document.querySelector(".lightbox__container__content");
          let src = links[i].getAttribute("data-src");
          // let alt = links[i].getAttribute("alt");
          // let ariaLabel = links[i].getAttribute("aria-label");
          let title = document.querySelector("#lightboxTitle");

          let index;
          
          for (let i = 0; i < links.length; i++) {
            //console.log(links[i].getAttribute("data-src"));
            if (src == links[i].getAttribute("data-src")) {
              
              index = i;
            }
            
          }
          
          lightboxMedia.setAttribute("src", links[index + 1].getAttribute("src"));
          lightboxMedia.setAttribute("alt",links[index + 1].getAttribute("alt"));
          lightboxMedia.setAttribute("data-src",links[index + 1].getAttribute("src"));
          lightboxMedia.setAttribute("aria-label",links[index + 1].getAttribute("alt"));
          title.innerHTML = links[index + 1].getAttribute("alt") ;
          
          console.log(src)
        });  

    });

  }

  //});
  

}



  
