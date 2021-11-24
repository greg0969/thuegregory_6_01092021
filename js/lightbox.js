// lightbox

function lightbox(media) {
  const lightboxSection = document.querySelector(".lightbox");
  const links = document.querySelectorAll(".media");
  const container = document.getElementById("content-container");


  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
      const lightboxContainer = document.querySelector(".lightbox");

      let name = links[i].getAttribute("aria-label");

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

      window.addEventListener("keydown", closeLightbox, false);
      function closeLightbox(key) {
        if (key.keyCode === 27) {
          lightboxSection.innerHTML = "";
          container.style.display = "block";
        }
      }

      // previous

      const previous = document.querySelector(".lightbox__previous");
      previous.addEventListener("click", () => {
        let src = document.querySelector(".lightbox__container__content");
        const lightboxMedia = document.querySelector(".lightbox__container__content");
        src = links[i].getAttribute("data-src");
        let title = document.querySelector("#lightboxTitle");


        let index;

        for (let i = 0; i < links.length; i++) {
          //console.log(links[i].getAttribute("data-src"));
          if (src == links[i].getAttribute("data-src")) {
            index = i;
          }
        }
        galleryLink = links;
        let prevIndex = index - 1;
        if (index == 0) {
          prevIndex = links.length - 1;
          
        }

        console.log(galleryLink[prevIndex].getAttribute("data-type"))
        if (galleryLink[prevIndex].getAttribute("data-type") == "video") {
          const lightboxContainer = document.querySelector(".lightbox__container");

          lightboxContainer.innerHTML = ` <video controls="controls" class="lightbox__container__content media" aria-label="" 
            data-src="${links[prevIndex].getAttribute("data-src")}"> 
              <source src="${links[prevIndex].getAttribute("data-src")}" type="${galleryLink[prevIndex].getAttribute("data-type")}/mp4"  
                role="button" aria-label="${links[prevIndex].getAttribute("aria-label")}">
            </video> `;
          title.innerHTML = links[prevIndex].getAttribute("aria-label");
          galleryLink[i].setAttribute("data-src", links[prevIndex].getAttribute("data-src"));
        }

        if (galleryLink[prevIndex].getAttribute("data-type") == "img") {
          console.log("img")
          const lightboxContainer = document.querySelector(".lightbox__container");
          lightboxContainer.innerHTML = ` <img class="lightbox__container__content media" aria-label="${galleryLink[prevIndex].getAttribute("data-type")}"
             data-src="${links[prevIndex].getAttribute("data-src")}" src=${links[prevIndex].getAttribute("data-src")} alt="${links[prevIndex].getAttribute("aria-label")}" /> `;

          lightboxMedia.setAttribute("data-src", links[prevIndex].getAttribute("src"));
          lightboxMedia.setAttribute("src", links[prevIndex].getAttribute("src"));
          lightboxMedia.setAttribute("alt", links[prevIndex].getAttribute("alt"));
          lightboxMedia.setAttribute("aria-label", links[prevIndex].getAttribute("alt"));
          title.innerHTML = links[prevIndex].getAttribute("alt");
          galleryLink[i].setAttribute("data-src", links[prevIndex].getAttribute("src"));
        }
      });

      // Previous avec le clavier
      window.addEventListener("keydown", previousMedia, false);
      function previousMedia(key) {
        if (key.keyCode === 37) {
          let src = document.querySelector(".lightbox__container__content");
          const lightboxMedia = document.querySelector(
            ".lightbox__container__content"
          );
          src = links[i].getAttribute("data-src");
          let title = document.querySelector("#lightboxTitle");

          let index;

          for (let i = 0; i < links.length; i++) {
            //console.log(links[i].getAttribute("data-src"));
            if (src == links[i].getAttribute("data-src")) {
              index = i;
            }
          }
          galleryLink = links;
          let prevIndex = index - 1;
          // console.log(index)
          // console.log(links.length)
          if (index == 0) {
            prevIndex = links.length - 1;
            console.log(prevIndex)
          }


          if (galleryLink[prevIndex].getAttribute("data-type") == "video") {
            const lightboxContainer = document.querySelector(".lightbox__container");

            lightboxContainer.innerHTML = ` <video controls="controls" class="lightbox__container__content media" aria-label="" 
            data-src="${links[prevIndex].getAttribute("data-src")}"> 
              <source src="${links[prevIndex].getAttribute("data-src")}" type="${galleryLink[prevIndex].getAttribute("data-type")}/mp4"  
                role="button" aria-label="${links[prevIndex].getAttribute("aria-label")}">
            </video> `;
            title.innerHTML = links[prevIndex].getAttribute("aria-label");
            galleryLink[i].setAttribute("data-src", links[prevIndex].getAttribute("data-src"));
          }

          if (galleryLink[prevIndex].getAttribute("data-type") == "img") {
            console.log("img")
            const lightboxContainer = document.querySelector(".lightbox__container");
            lightboxContainer.innerHTML = ` <img class="lightbox__container__content media" aria-label="${galleryLink[prevIndex].getAttribute("data-type")}"
             data-src="${links[prevIndex].getAttribute("data-src")}" src=${links[prevIndex].getAttribute("data-src")} alt="${links[prevIndex].getAttribute("aria-label")}" /> `;

            lightboxMedia.setAttribute("data-src", links[prevIndex].getAttribute("src"));
            lightboxMedia.setAttribute("src", links[prevIndex].getAttribute("src"));
            lightboxMedia.setAttribute("alt", links[prevIndex].getAttribute("alt"));
            lightboxMedia.setAttribute("aria-label", links[prevIndex].getAttribute("alt"));
            title.innerHTML = links[prevIndex].getAttribute("alt");
            galleryLink[i].setAttribute("data-src", links[prevIndex].getAttribute("src"));
          }
        }
      }

      // next
      const next = document.querySelector(".lightbox__next");
      next.addEventListener("click", () => {
        let src = document.querySelector(".lightbox__container__content");
        const lightboxMedia = document.querySelector(".lightbox__container__content");
        src = links[i].getAttribute("data-src");
        let title = document.querySelector("#lightboxTitle");


        let index;

        for (let i = 0; i < links.length; i++) {
          //console.log(links[i].getAttribute("data-src"));
          if (src == links[i].getAttribute("data-src")) {
            index = i;

          }
        }
        galleryLink = links;
        let nextIndex = index + 1;

        if (nextIndex == links.length) {
          nextIndex = 0;

        }


        if (galleryLink[nextIndex].getAttribute("data-type") == "video") {
          const lightboxContainer = document.querySelector(".lightbox__container");

          lightboxContainer.innerHTML = ` <video controls="controls" class="lightbox__container__content media" aria-label="" 
            data-src="${links[nextIndex].getAttribute("data-src")}"> 
              <source src="${links[nextIndex].getAttribute("data-src")}" type="${galleryLink[nextIndex].getAttribute("data-type")}/mp4"  
                role="button" aria-label="${links[nextIndex].getAttribute("aria-label")}">
            </video> `;
          title.innerHTML = links[nextIndex].getAttribute("aria-label");
          galleryLink[i].setAttribute("data-src", links[nextIndex].getAttribute("data-src"));
        }

        if (galleryLink[nextIndex].getAttribute("data-type") == "img") {
          console.log("img")
          const lightboxContainer = document.querySelector(".lightbox__container");
          lightboxContainer.innerHTML = ` <img class="lightbox__container__content media" aria-label="${galleryLink[nextIndex].getAttribute("data-type")}"
             data-src="${links[nextIndex].getAttribute("data-src")}" src=${links[nextIndex].getAttribute("data-src")} alt="${links[nextIndex].getAttribute("aria-label")}" /> `;

          lightboxMedia.setAttribute("data-src", links[nextIndex].getAttribute("src"));
          lightboxMedia.setAttribute("src", links[nextIndex].getAttribute("src"));
          lightboxMedia.setAttribute("alt", links[nextIndex].getAttribute("alt"));
          lightboxMedia.setAttribute("aria-label", links[nextIndex].getAttribute("alt"));
          title.innerHTML = links[nextIndex].getAttribute("alt");
          galleryLink[i].setAttribute("data-src", links[nextIndex].getAttribute("src"));
        }
      });

      // Next avec clavier

      window.addEventListener("keydown", nextMedia, false);
      function nextMedia(key) {
        if (key.keyCode === 39) {
          let src = document.querySelector(".lightbox__container__content");
          const lightboxMedia = document.querySelector(".lightbox__container__content");
          src = links[i].getAttribute("data-src");
          let title = document.querySelector("#lightboxTitle");


          let index;

          for (let i = 0; i < links.length; i++) {
            //console.log(links[i].getAttribute("data-src"));
            if (src == links[i].getAttribute("data-src")) {
              index = i;

            }
          }
          galleryLink = links;
          let nextIndex = index + 1;

          if (nextIndex == links.length) {
            nextIndex = 0;

          }


          if (galleryLink[nextIndex].getAttribute("data-type") == "video") {
            const lightboxContainer = document.querySelector(".lightbox__container");

            lightboxContainer.innerHTML = ` <video controls="controls" class="lightbox__container__content media" aria-label="" 
            data-src="${links[nextIndex].getAttribute("data-src")}"> 
              <source src="${links[nextIndex].getAttribute("data-src")}" type="${galleryLink[nextIndex].getAttribute("data-type")}/mp4"  
                role="button" aria-label="${links[nextIndex].getAttribute("aria-label")}">
            </video> `;
            title.innerHTML = links[nextIndex].getAttribute("aria-label");
            galleryLink[i].setAttribute("data-src", links[nextIndex].getAttribute("data-src"));
          }

          if (galleryLink[nextIndex].getAttribute("data-type") == "img") {
            console.log("img")
            const lightboxContainer = document.querySelector(".lightbox__container");
            lightboxContainer.innerHTML = ` <img class="lightbox__container__content media" aria-label="${galleryLink[nextIndex].getAttribute("data-type")}"
             data-src="${links[nextIndex].getAttribute("data-src")}" src=${links[nextIndex].getAttribute("data-src")} alt="${links[nextIndex].getAttribute("aria-label")}" /> `;

            lightboxMedia.setAttribute("data-src", links[nextIndex].getAttribute("src"));
            lightboxMedia.setAttribute("src", links[nextIndex].getAttribute("src"));
            lightboxMedia.setAttribute("alt", links[nextIndex].getAttribute("alt"));
            lightboxMedia.setAttribute("aria-label", links[nextIndex].getAttribute("alt"));
            title.innerHTML = links[nextIndex].getAttribute("alt");
            galleryLink[i].setAttribute("data-src", links[nextIndex].getAttribute("src"));
          }
        }
      }
    });
  }
}
