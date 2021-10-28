
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
                <img class="media" src="public/images/photographes/${this.photographerId}/${this.image}" alt="${this.alt}" />
            
              <figcaption class="mediaDetail">
                <p>${this.title}</p>
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
  displayRelevantMedia() {
    return `
    <article>
        <figure>
          <video controls="controls" class="media"> 
            <source src="public/images/photographes/${this.photographerId}/${this.video}" type="${this.type}/mp4"  
            role="button" aria-label="${this.title}">
          </video>
          <figcaption class="mediaDetail">
              <p>${this.title}</p>
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
    if (data.type == "picture") {
      return new Picture(data);
    }
  }
  
}
