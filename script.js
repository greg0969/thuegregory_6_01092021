// test pattern factory

function pictures(name,photographerId,title,image,alt,tags,likes,date,price) { //class ou fonction ?
    this.name = name ;
    this.photographerId = photographerId ;
    this.title = title ;
    this.image = image ;
    this.alt = alt ;
    this.tags = tags ;
    this.likes = likes ;
    this.date = date ;
    this.price = price ;
    this.type = "pictures" ;
}

function videos(name,photographerId,title,video,tags,likes,date,price) { //class ou fonction ?
    this.name = name ;
    this.photographerId = photographerId ;
    this.title = title ;
    this.video = video ;
    this.tags = tags ;
    this.likes = likes ;
    this.date = date ;
    this.price = price ;
    this.type = "videos" ;
}

function mediasFactory() {
    this.create = (name, type) => {
        switch(type) {
            case 1 :
                return new pictures(name,photographerId,title,image,tags,likes,date,price)
                break;
            case 2 :
                return new videos(name,photographerId,title,video,tags,likes,date,price)
                break;
        }
        
    }
}

const mediaFactory = new mediasFactory() ;
const media = [] ;
 

class photographers {
    constructor(name,id,city,country,tags,tagline,price,portrait) {
        this.name = name ;
        this.photographerId = photographerId ;
        this.id = id ;
        this.city = city ;
        this.country = country ;
        this.tags = tags ;
        this.tagline = tagline ;
        this.price = price ;
        this.portrait = portrait ;
        this.type = "photographers" ;
    }
}

// récupérer fichier JSON test

fetch("http://127.0.0.1:5500/P6/data.json")
.then(response => response.json())
//.then(response => console.log(JSON.stringify(response)))
.then(error => console.log("erreur : " + error));


let section = document.createElement("section");
let H1 = document.createElement("h1");
let photographer = document.createElement("div")
H1.textContent = "Nos photographes";
section.prepend(H1);
section.appendChild(photographer);
document.body.appendChild(section);
