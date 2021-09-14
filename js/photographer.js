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
        <figure>
            <img src="${this.portrait}">
            <h2>${this.name}</h2>
            <figcaption>
                <p>${this.city},<p>${this.country}</p></p>
                <p>${this.tagline}</p>
                <p>${this.price}</p>
                <p>${this.tags}</p>
            </figcaption>
        </figure>
        `
    }
}

const displayPhotographer = (ArrayOfPhotographer) => {
    ArrayOfPhotographer.foreach((photographer) => {
        let tag = "";
        photographer.tags.foreach((tag) => {
            tag += `
            <button onclick="newFilterTag('${tag}')" class="tags" tag="${tag}">#${tag}</button>
            `;
        });

        main.innerHTML += `
        <figure class="card">
        <a href="./photographe.html?id=${photographer.id}&name=${photographer.name}" class="card__img">
          <img src="./public/images/photographes/${photographer.portrait}" alt="" />
          <h2>${photographer.name}</h2>
        </a>
        <figcaption class="card__content">
          <h3 class="cardTitle">${photographer.city}, ${photographer.country}</h3>
          <p class="card__content__tagline">
            ${photographer.tagline}
          </p>
          <p class="card__content__price">${photographer.price}€/jour</p>
        </figcaption>
        <div class="card__content__link">
          ${tagHTML}
        </div>
        </figure>
        `;
    });
};


