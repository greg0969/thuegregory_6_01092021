
class Lightbox {
    static init(){
        const medialightbox = document.querySelectorAll('a[href$=".png"],a[href$=".mp4"]')
        .forEach(medialightbox => medialightbox.addEventListener("click", e => {
            e.preventDefault()
            new Lightbox(e.currentTarget.getAttribute("href"));
        }));
    }

    constructor (url) {
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
    
}
