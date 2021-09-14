

//DOM

const mainLink = document.querySelector(".main-link");
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


// récupérer fichier JSON test


const getData = async () => {
    await fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        displayPhotographer(data.photographers);
  
        filterTag(data.photographers);
      });
  };
  

const init = async() => {
    displayPasserAuContenu();
    getData();
    displayPhotographer();
}
init();
