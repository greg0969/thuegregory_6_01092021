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
        <a href="photographe.html?id=${this.id}" id ="${this.id} "class="card__img">
        <img src="public/images/photographes/Miniatures/${this.portrait}" alt="">
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
    createhtml1() { 
      return `
      <section class="card-details">
      <div class="card-details__content">
        <h1 class="card-details__title">${this.name}</h2>
        <h2>${this.city}, ${this.country}</h3>
        <p class="card-details__content__tagline">
          ${this.tagline}
        </p>
        <div class="card-details__content__tag tag-style">
          ${this.tags}
        </div>
      </div>
      <a href="" class="btn-contact">
          <p>Contactez-moi</p>
        </a>
      <img src="public/images/photographes/Miniatures/${this.portrait}" alt="">
      </section>
      <span>
        <p>Trier par</p>
      </span>
      
      `
  }
}




