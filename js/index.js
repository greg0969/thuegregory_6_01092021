

//DOM




// faire apparaitre "passer au contenu" au scroll

const displayPasserAuContenu = () => {
    window.addEventListener("scoll",() => {
        const passerAuContenu = document.querySelector(".passer-au-contenu");
        const scrolled = window.scrollY;
        if (scrolled > 50) {
            passerAuContenu.style.display = "block";
        }
        else {
            passerAuContenu.style.display = "none";
        }
    });
};

// Affiche les photographes 

const displayPhotographer = (ArrayOfPhotographer) => {
    const main = document.querySelector(".main");
    
    ArrayOfPhotographer.forEach((photographer) => {
        let photographerModel = new Photographer(photographer)
        main.innerHTML += photographerModel.createhtml()
       
    });
};

// Afficher seulement le photographe avec l'id correspondant ?

const displayPhotographerDetails = () => {

}

// Filtre les photographes par tags

const filterTag = (arrayOfPhotographer) => {
    const tags = document.querySelectorAll(".tags");
    tags.forEach((tag) => {
      tag.addEventListener("click", (e) => {
        let currentTag = e.currentTarget.getAttribute("tag");
        const newArrayOfPhotographer = arrayOfPhotographer.filter((div) =>
          div.tags.includes(currentTag)
        );
        currentArrayOfPhotographer = [newArrayOfPhotographer];
        main.innerHTML = "" ;
        displayPhotographer(newArrayOfPhotographer);
      });
    });
  };

  let urlId = window.location.search.substr(4);
  console.log(urlId);


// récupérer fichier JSON

const getData = async () =>
    await fetch("./data.json")
      .then((res) => res.json())
      .catch((error) => console.log("erreur"));

  

const init = async() => {
    displayPasserAuContenu();
    const data = await getData();
    displayPhotographer(data.photographers);
    filterTag(data.photographers);
}
init();

