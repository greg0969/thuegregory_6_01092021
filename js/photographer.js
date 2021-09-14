class Photographer {
    constructor(data) {
        this.name = data.name ;
        this.photographerId = data.photographerId ;
        this.id = data.id ;
        this.city = data.city ;
        this.country = data.country ;
        this.tags = data.tags ;
        this.tagline = data.tagline ;
        this.price = data.price ;
        this.portrait = data.portrait ;
        this.type = data.type
    }
    createhtml() {
        return `
        <figure class="card">
        <a href="photographe.html" class="card__img">
        <img src="./public/images/photographes/miniatures/${this.portrait}" alt="">
          <h2>${this.name}</h2>
        </a>
        <figcaption class="card__content">
          <h3 class="cardTitle">${this.city}, ${this.country}</h3>
          <p class="card__content__tagline">
            ${this.tagline}
          </p>
          <p class="card__content__price">${this.price}€/jour</p>
        <div class="card__content__tag tag-style">
          ${this.tags}
        </div>
        </figcaption>
        </figure>
        
        `
    }
}


