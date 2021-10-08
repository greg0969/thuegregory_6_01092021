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
  }
  displayRelevantMedia() {
    return `
        <article>
            <figure>
                <img src="public/images/photographes/${this.photographerId}/${this.image}" alt="${this.alt}" />
            </figure>
            <figcaption class="mediaDetail">
                <p>${this.title}</p>
                <div class="likes">
                    <span class="nbLike">${this.likes}</span>
                    <i class="fa-heart far"></i>                 
                </div>
            </figcaption>
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
  displayRelevantMedia() {
    return `
    <article>
        <figure>
        <video 
        src="public/images/photographes/${this.photographerId}/${this.video}" alt="${this.alt}" 
        controls="controls" role="button" aria-label="${this.title}"/>
        </figure>
          <figcaption>
              <p>${this.title}</p>
              <div class="likes">
                    <span class="nbLike">${this.likes}</span>
                    <i class="fa-heart far"></i>                 
                </div>
          </figcaption>
    </article>   
        `;
  }
}

class MediasFactory {
  constructor(data) {
    if (data.type == "video") {
      return new Video(data);
    }
    if (data.type == "picture") {
      return new Picture(data);
    }
  }
}
