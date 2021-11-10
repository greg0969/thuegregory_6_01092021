class Picture {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.image = data.image;
    this.alt = data.alt;
    this.tags = data.tags;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.type = data.type;
  }
  displayLightbox() {
    return `
    <i class= "fas fa-chevron-left lightbox__previous"></i>
    <div class="lightbox__container">
    <img class="lightbox__container__content media" data-src="public/images/photographes/${this.photographerId}/${this.image}" src="public/images/photographes/${this.photographerId}/${this.image}" alt="${this.alt}" />
    </div>
    <i class="fas fa-chevron-right lightbox__next"></i>
    <i class="fas fa-times lightbox__close"></i>
    <span class="title" id ="lightboxTitle">${this.title}</span>
      `;
  }
  displayRelevantMedia() {
    return `
        <article>
            <figure>
                <img class="media" data-src="public/images/photographes/${this.photographerId}/${this.image}" aria-label="${this.title}" src="public/images/photographes/${this.photographerId}/${this.image}" alt="${this.alt}" />
            
              <figcaption class="mediaDetail">
                <p class="title">${this.title}</p>
                <div class="likes" aria-label="unliked">
                <span class="numberOfLikes">${this.likes}</span>
                    <i class="fa-heart far"></i>                 
                </div>
              </figcaption>
            </figure>
        </article>
        `;
  }
  
}

class Video {
  constructor(data) {
    this.id = data.id;
    this.photographerId = data.photographerId;
    this.title = data.title;
    this.video = data.video;
    this.tags = data.tags;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.type = data.type;
  }
  displayLightbox() {
    return `
    <i class= "fas fa-chevron-left lightbox__previous"></i>
    <div class="lightbox__container">
    <video controls="controls" class="lightbox__container__content media" data-src="public/images/photographes/${this.photographerId}/${this.video}"> 
            <source src="public/images/photographes/${this.photographerId}/${this.video}" type="${this.type}/mp4"  
            role="button" aria-label="${this.title}">
          </video>
    </div>
    <i class="fas fa-chevron-right lightbox__next"></i>
    <i class="fas fa-times lightbox__close"></i>
    <span class="title" id ="lightboxTitle">${this.title}</span>
      `;
  }
  displayRelevantMedia() {
    return `
    <article>
        <figure>
          <video controls="controls" data-src="public/images/photographes/${this.photographerId}/${this.video}" class="media" aria-label="${this.title}"> 
            <source src="public/images/photographes/${this.photographerId}/${this.video}" type="${this.type}/mp4"  
            role="button" >
          </video>
          <figcaption class="mediaDetail">
              <p class="title">${this.title}</p>
              <div class="likes" aria-label="unliked">
                  <span class="numberOfLikes">${this.likes}</span>
                  <i class="fa-heart far"></i>                 
              </div>
          </figcaption>
        </figure>
    </article>   
        `;
  }
  
}

class MediasFactory {
  constructor(data) {
    if (data.type == "video") {
      return new Video(data);
    }
    if (data.type == "img") {
      return new Picture(data);
    }
  }
  
}

