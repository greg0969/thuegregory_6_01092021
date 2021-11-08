// Class photographer
class Photographer {
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.city = data.city;
    this.country = data.country;
    this.tags = data.tags;
    this.tagline = data.tagline;
    this.price = data.price;
    this.portrait = data.portrait;
    this.type = data.type;
  }
  displayPhotographers() {
    //html index
    return `
        <figure class="card">
        <a href="photographe.html?id=${this.id}" id ="${
      this.id
    } "class="card__img">
        <img src="public/images/photographes/Photographers ID Photos/${
          this.portrait
        }" alt="">
          <h2>${this.name}</h2>
        </a>
        <figcaption class="card__content">
          <h3 class="cardTitle">${this.city}, ${this.country}</h3>
          <p class="card__content__tagline">
            ${this.tagline}
          </p>
          <p class="card__content__price">${this.price}€/jour</p>
          <ul class="card__content__tag tag-style">
              ${this.tags
                .map(
                  (tag) => `<li><a><span class="tag">#${tag}</span> </a></li>`
                )
                .join("")}
          </ul>
        </figcaption>
        </figure>
        
        `;
  }
  displayPhotographerCard() {
    //html photographerModel
    return `
      <section class="card-details">
      <div class="card-details__content">
        <h1 class="card-details__title">${this.name}</h2>
        <h2>${this.city}, ${this.country}</h3>
        <p class="card-details__content__tagline">
          ${this.tagline}
        </p>
        <ul class="card__content__tag tag-style">
        ${this.tags
          .map((tag) => `<li><a><span class="tag">#${tag}</span> </a></li>`)
          .join("")}
      </ul>
        </div>
        <button class="btn-contact" type="button" aria-role="contact">
            <p>Contactez-moi</p>
          </button>
        <img src="public/images/photographes/Photographers ID Photos/${
          this.portrait
        }" alt="">
        </section>
        
      `;
  }
  displayPrice() {
    return `
      <span class="price">${this.price}</span>
    `;
  }
  displayModal() {
    return `
    
    <div class="background">  
      <div class="modalForm__body">
        <form
          name="contact"
          action="photographe.html"
          method="get">
        
          <div class="modalForm__body__title">
            <p>Contactez-moi</p>
            <i class="fas fa-times modalForm__body__title__close"></i>
            
          </div>

          <div
            class="formData">
            <label for="first">Prénom</label><br>
            <input
              class="text-control"
              type="text"
              id="first"
              name="first"
              minlength="2"                                  
            /><br>
            
            
          </div>
          <div
            class="formData">
            <label for="last">Nom</label><br>
            <input
              class="text-control"
              type="text"
              id="last"
              name="last"
                                  
            /><br>
          
          </div>
          <div
            class="formData">
            <label for="email">E-mail</label><br>
            <input
              class="text-control"
              type="email"
              id="email"
              name="email"
            /><br>
          </div>

          <div class="formData">
            <label for="message">Votre message</label><br>
            <textarea class="text-control" name="message" id="message">
            
            </textarea>
            <br>
          </div>
          
          <input
            class="btn-submit button"
            type="submit"
            value="Envoyer"
            id="submit-btn"
          />
          
        </form>
      </div>
    </div> 
    `
  }
}
