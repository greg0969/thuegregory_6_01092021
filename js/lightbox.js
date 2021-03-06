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
        let lightboxMedia = document.querySelector(".lightbox__container__content");
        let title = document.querySelector("#lightboxTitle");
        let index;

        for (let i = 0; i < links.length; i++) {
          if (src == links[i].getAttribute("src")) {
            index = i;
          }
        }
        const lastIndex = links.length;
        let prevIndex = index - 1;

        if (prevIndex == 0) {
          prevIndex = lastIndex;
        }

        if (links[i - 1].getAttribute("data-type") == "video") {
          console.log("type :", links[i - 1].getAttribute("data-type"))
          const lightboxContainer = document.querySelector(".lightbox__container");
          lightboxContainer.innerHTML = ` <video controls="controls" class="lightbox__container__content " 
          src="${links[i - 1].getAttribute("src")}" type="${links[i - 1].getAttribute("data-type")}/mp4"  
          role="button" aria-label="${links[i - 1].getAttribute("aria-label")}">     
          </video> `;
          title.innerHTML = links[i - 1].getAttribute("aria-label");
         
        }

        if (links[i - 1].getAttribute("data-type") == "img") {
          console.log("type :", links[i - 1].getAttribute("data-type"))
          const lightboxContainer = document.querySelector(".lightbox__container");
          lightboxContainer.innerHTML = ` <img class="lightbox__container__content " 
          aria-label="${links[i - 1].getAttribute("data-type")}"
          src="${links[i - 1].getAttribute("src")}" 
          alt="${links[i - 1].getAttribute("aria-label")}" /> `;
          title.innerHTML = links[i - 1].getAttribute("alt");
        }
        lightboxMedia.setAttribute("src", links[i--].getAttribute("src"))
      });

      // Previous avec le clavier
      window.addEventListener("keydown", previousMedia, false);
      function previousMedia(key) {
        if (key.keyCode === 37) {
          let src = document.querySelector(".lightbox__container__content");
        let lightboxMedia = document.querySelector(".lightbox__container__content");
        let title = document.querySelector("#lightboxTitle");
        let index;

        for (let i = 0; i < links.length; i++) {
          if (src == links[i].getAttribute("src")) {
            index = i;
          }
        }
        const lastIndex = links.length;
        let prevIndex = index - 1;

        if (prevIndex == 0) {
          prevIndex = lastIndex;
        }

        if (links[i - 1].getAttribute("data-type") == "video") {
          console.log("type :", links[i - 1].getAttribute("data-type"))
          const lightboxContainer = document.querySelector(".lightbox__container");
          lightboxContainer.innerHTML = ` <video controls="controls" class="lightbox__container__content " 
          src="${links[i - 1].getAttribute("src")}" type="${links[i - 1].getAttribute("data-type")}/mp4"  
          role="button" aria-label="${links[i - 1].getAttribute("aria-label")}">     
          </video> `;
          title.innerHTML = links[i - 1].getAttribute("aria-label");
         
        }

        if (links[i - 1].getAttribute("data-type") == "img") {
          console.log("type :", links[i - 1].getAttribute("data-type"))
          const lightboxContainer = document.querySelector(".lightbox__container");
          lightboxContainer.innerHTML = ` <img class="lightbox__container__content " 
          aria-label="${links[i - 1].getAttribute("data-type")}"
          src="${links[i - 1].getAttribute("src")}" 
          alt="${links[i - 1].getAttribute("aria-label")}" /> `;
          title.innerHTML = links[i - 1].getAttribute("alt");
        }
        lightboxMedia.setAttribute("src", links[i--].getAttribute("src"))
        }
      }

      // next
      const next = document.querySelector(".lightbox__next");
      next.addEventListener("click", () => {
        let src = document.querySelector(".lightbox__container__content");
        let lightboxMedia = document.querySelector(".lightbox__container__content");
        let title = document.querySelector("#lightboxTitle");
        let index;
        for (let i = 0; i < links.length; i++) {
          if (src == links[i].getAttribute("src")) {
            index = i;
          }
        }
        let nextIndex = index + 1;

        if (nextIndex == links.length) {
          nextIndex = 0;

        }

        if (links[i + 1].getAttribute("data-type") == "video") {
          console.log("type :", links[i + 1].getAttribute("data-type"))
          const lightboxContainer = document.querySelector(".lightbox__container");
          lightboxContainer.innerHTML = ` <video controls="controls" class="lightbox__container__content " 
          src="${links[i + 1].getAttribute("src")}" type="${links[i + 1].getAttribute("data-type")}/mp4"  
          role="button" aria-label="${links[i + 1].getAttribute("aria-label")}">     
          </video> `;
          title.innerHTML = links[i + 1].getAttribute("aria-label");
         
        }

        if (links[i + 1].getAttribute("data-type") == "img") {
          console.log("type :", links[i + 1].getAttribute("data-type"))

          const lightboxContainer = document.querySelector(".lightbox__container");
          lightboxContainer.innerHTML = ` <img class="lightbox__container__content " 
          aria-label="${links[i + 1].getAttribute("data-type")}"
          src="${links[i + 1].getAttribute("src")}" 
          alt="${links[i + 1].getAttribute("aria-label")}" /> `;
          title.innerHTML = links[i + 1].getAttribute("alt");
          //lightboxMedia.setAttribute("src", links[i++].getAttribute("src"))
        }
        lightboxMedia.setAttribute("src", links[i++].getAttribute("src"))
      });

      // Next avec clavier

      window.addEventListener("keydown", nextMedia, false);
      function nextMedia(key) {
        if (key.keyCode === 39) {
          let src = document.querySelector(".lightbox__container__content");
        let lightboxMedia = document.querySelector(".lightbox__container__content");
        let title = document.querySelector("#lightboxTitle");
        let index;
        for (let i = 0; i < links.length; i++) {
          if (src == links[i].getAttribute("src")) {
            index = i;
          }
        }
        let nextIndex = index + 1;

        if (nextIndex == links.length) {
          nextIndex = 0;

        }

        if (links[i + 1].getAttribute("data-type") == "video") {
          console.log("type :", links[i + 1].getAttribute("data-type"))
          const lightboxContainer = document.querySelector(".lightbox__container");
          lightboxContainer.innerHTML = ` <video controls="controls" class="lightbox__container__content " 
          src="${links[i + 1].getAttribute("src")}" type="${links[i + 1].getAttribute("data-type")}/mp4"  
          role="button" aria-label="${links[i + 1].getAttribute("aria-label")}">     
          </video> `;
          title.innerHTML = links[i + 1].getAttribute("aria-label");
         
        }

        if (links[i + 1].getAttribute("data-type") == "img") {
          console.log("type :", links[i + 1].getAttribute("data-type"))

          const lightboxContainer = document.querySelector(".lightbox__container");
          lightboxContainer.innerHTML = ` <img class="lightbox__container__content " 
          aria-label="${links[i + 1].getAttribute("data-type")}"
          src="${links[i + 1].getAttribute("src")}" 
          alt="${links[i + 1].getAttribute("aria-label")}" /> `;
          title.innerHTML = links[i + 1].getAttribute("alt");
          //lightboxMedia.setAttribute("src", links[i++].getAttribute("src"))
        }
        lightboxMedia.setAttribute("src", links[i++].getAttribute("src"))
        }
      }

    });
  }
}
