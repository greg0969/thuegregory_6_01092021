

/*class Lightbox {
    static init(){
        const lightbox = document.querySelectorAll('a[href$=".png"],a[href$=".mp4"]')
        .forEach(medialightbox => medialightbox.addEventListener("click", e => {
            e.preventDefault()
            new Lightbox(e.currentTarget.getAttribute("href"));
        }));
    }

   constructor () {
        const 
    }

    displayLightBox() {

        return `
            <button class="lightbox__close">Fermer</button>
            <button class="lightbox__next">Suivant</button>
            <button class="lightbox__prev">Précédent</button>
            <div class="lightbox__container">
            <img src="chemin/vers/image.jpg" alt="">
            </div>
        `
    }
    
}*/

const photoContainer = document.querySelector("#portfolio_photos");
const lightboxBtnOpen = document.querySelectorAll(".test");
const lightboxBg = document.querySelector(".lightbox_bground");
const lightboxCrossClose = document.querySelectorAll(".lightbox_close");
const lightboxBtnClose = document.querySelector("#btn_message");

/**
 * @param {HTMLElement} element
 * @param {string[]} images liste des URL des images du diaporama
 * @param {string} url image actuel dans la lightbox
 */
 class Lightbox {

    static init() {
      const links = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]'))
      const gallery = links.map(link => link.getAttribute('href'))
      
      links.forEach(link => link.addEventListener('click', e => {
          e.preventDefault()
          new Lightbox(e.currentTarget.getAttribute('href'), gallery)
      }))
    }
  
    constructor(url, images) {
      this.element = this.buildDOM(url);
      this.images = images;
      this.loadMedia(url);
      this.onKeyUp = this.onKeyUp.bind(this);
      document.body.appendChild(this.element);
      document.addEventListener('keyup', this.onKeyUp);
    }
  
    loadMedia(url) {
      const extension = url.split('.').pop();
      this.url = null;
  
      if(extension == 'jpg') {
        
        const image = document.createElement('img');
        image.controls = true;
        const containerImage = this.element.querySelector('.lightbox_container');
        const loader = document.createElement('div');
        loader.classList.add('lightbox_loader');
        containerImage.innerHTML = '';
  
        containerImage.appendChild(loader);
        
        image.onload = () => {
          this.url = url;
          containerImage.removeChild(loader);
          containerImage.appendChild(image);
        }
        image.src = url;
      }
  
      else if(extension == 'mp4') {
        const video = document.createElement('video');
        video.controls = true;
        // ajout de sous titre
        video.innerHTML = `<track kind="subtitles" src="${url}.vtt" srclang="fr" label="Français">`;
        const containerVideo = this.element.querySelector('.lightbox_container');
        const loader = document.createElement('div');
        loader.classList.add('lightbox_loader');
        containerVideo.innerHTML = '';
  
        containerVideo.appendChild(loader);
        
        video.onloadstart  = () => {
          this.url = url;
          containerVideo.removeChild(loader);
          containerVideo.appendChild(video);
          
        }
        video.src = url;
      }
      
    }
  
    
    onKeyUp(e) {
      if      (e.key === 'Escape')     { this.close(e) }
      else if (e.key === 'ArrowLeft')  { this.prev(e) }
      else if (e.key === 'ArrowRight') { this.next(e) }
    }
  
    close(e) {
      e.preventDefault()
      this.element.classList.add('fadeOut')
      window.setTimeout(() => {
          this.element.parentElement.removeChild(this.element)
      }, 500)
      document.removeEventListener('keyup', this.onKeyUp)
      mainContainer.setAttribute('aria-hidden', 'false');
      photoContainer.setAttribute('aria-hidden', 'true');
    }
  
   
    next(e) {
      e.preventDefault()
      
      let i = this.images.findIndex(image => image === this.url)
      if (i === this.images.length - 1) {
          i = -1;
      }
      this.loadMedia(this.images[i + 1])
    }
  
    prev(e) {
      e.preventDefault()
      let i = this.images.findIndex(image => image === this.url)
      if (i === 0) {
          i = this.images.length;
      }
      this.loadMedia(this.images[i - 1])
    }
  
    
    buildDOM(url) {
      mainContainer.setAttribute('aria-hidden', 'true');
      photoContainer.setAttribute('aria-hidden', 'false');
  
      const dom = document.createElement('div')
      dom.classList.add('lightbox_bground')
      dom.innerHTML = `
          <button class="lightbox_close">Fermer</button>
          <button class="lightbox_next">Suivant</button>
          <button class="lightbox_prev">Précédent</button>
          <div class="lightbox_container"></div>
      `
      dom.querySelector('.lightbox_close').addEventListener('click', this.close.bind(this))
      dom.querySelector('.lightbox_next').addEventListener('click', this.next.bind(this))
      dom.querySelector('.lightbox_prev').addEventListener('click', this.prev.bind(this))
      return dom
    }
  }