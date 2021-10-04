
class Picture { 
    constructor(data) {  
    this.id = data.id ;
    this.photographerId = data.photographerId ;
    this.title = data.title ;
    this.image = data.image ;
    this.alt = data.alt ;
    this.tags = data.tags ;
    this.likes = data.likes ;
    this.date = data.date ;
    this.price = data.price ;
    }
    displayRelevantMedia() {
        return `
        <figure>
            <img src="public/images/photographes/${this.photographerId}/${this.image}" alt="${this.alt}" />
        </figure>
          <figcaption>
              <p>${this.title}</p>
              <div class="likes">
                  <span>${this.likes}</span>                 
              </div>
          </figcaption>
        
        `
    }   
}

class Video { 
    constructor(data) {
        this.id = data.id ;
        this.photographerId = data.photographerId ;
        this.title = data.title ;
        this.video = data.video ;
        this.tags = data.tags ;
        this.likes = data.likes ;
        this.date = data.date ;
        this.price = data.price ;
        this.type = data.type ;
    }
    displayRelevantMedia() {
        return `
        <figure>
        <video 
        src="public/images/photographes/${this.photographerId}/${this.video}" alt="${this.alt}" 
        controls="controls" role="button" aria-label="${this.video}"/>
        </figure>
          <figcaption>
              <p>${this.title}</p>
              <div class="likes">
                  <span>${this.likes}</span>                 
              </div>
          </figcaption>
        
        ` 
    }
}

class MediasFactory {
    constructor(data) {
        if(data.type) {
            return new Video(data.type);
        }
        else {
            return new Picture(data.type);
        }
    }
}

