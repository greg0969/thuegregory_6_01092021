// test pattern factory

class Picture { 
    constructor(data) {  
    this.name = data.name ;
    this.photographerId = data.photographerId ;
    this.title = data.title ;
    this.image = data.image ;
    this.alt = data.alt ;
    this.tags = data.tags ;
    this.likes = data.likes ;
    this.date = data.date ;
    this.price = data.price ;
}
createhtml() {
    return `
        <img src="${this.image} alt="${this.alt}">`
}
    }

class Video { 
    constructor(data) {
        this.name = data.name ;
        this.photographerId = data.photographerId ;
        this.title = data.title ;
        this.video = data.video ;
        this.tags = data.tags ;
        this.likes = data.likes ;
        this.date = data.date ;
        this.price = data.price ;
        this.type = data.type ;
    }
    
}

export default class MediasFactory {
    constructor(data) {
        if(data.type) {
            return new Video(data.type);
        }
        else {
            return new Picture(data.type);
        }
    }
}

const image = new MediasFactory(Picture);
const video = new MediasFactory(Video);
image.affich();
video.affich();