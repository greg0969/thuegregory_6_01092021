

//DOM


const passerAuContenu = document.querySelector(".passer-au-contenu");

// faire apparaitre "passer au contenu" au scroll

const displayPasserAuContenu = () => {
    window.addEventListener("scoll",() => {
        const scrolled = window.scrollY;
        if (scrolled >= 30) {
            passerAuContenu.getElementsByClassName.display = "block";
        }
        else {
            passerAuContenu.getElementsByClassName.display = "none";
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

// Filtre les photographes par tags

const filterTag = () => 
    getElementById

// récupérer fichier JSON


const getData = async () =>
    await fetch("../data.json")
      .then((res) => res.json())
      .catch ((error) => console.log("erreur"))
  
  

const init = async() => {
    displayPasserAuContenu();
    const data = await getData();
    displayPhotographer(data.photographers);
    filterTag(data.photographers);
}
init();
