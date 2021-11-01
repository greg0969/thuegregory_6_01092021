// lightbox
const lightbox = (media) => {
  const lightboxSection = document.querySelector(".lightbox");
  const links = document.querySelectorAll(".media");
  const container = document.getElementById("content-container");
  const lightboxContainer = document.querySelector(".lightbox");
  

  links.forEach((link) => {
    link.addEventListener("click", () => {
        const src = link.getAttribute("alt");
        const selectedMedia = media.find((oneMedia) => {
        const mediaSrc = oneMedia.title.toString();
        console.log(src);
        return mediaSrc === src;
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
    });
  });
};
