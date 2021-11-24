
// Affiche les photographes 

const displayPhotographer = (ArrayOfPhotographer) => {
    const main = document.querySelector(".main");
    ArrayOfPhotographer.forEach((photographer) => {
        let photographerModel = new Photographer(photographer)
        main.innerHTML += photographerModel.displayPhotographers()
    });
};



// Filtre les photographes par tags

const filterTag = (arrayOfPhotographer) => {
    const tags = document.querySelectorAll(".tag-style");
    tags.forEach((tag) => {
      tag.addEventListener("click", (e) => {
        let currentTag = e.currentTarget.getAttribute("tag");
        const newArrayOfPhotographer = arrayOfPhotographer.filter((div) =>
          div.tags.includes(currentTag)
        );
        currentArrayOfPhotographer = [newArrayOfPhotographer];
        main.innerHTML = "" ;
        displayPhotographer(newArrayOfPhotographer);
        main.style.justifyContent = "unset"
      });
    });
  };
  
  const getData = async () =>
  await fetch("./data.json")
    .then((res) => res.json())
    .catch((error) => console.log("erreur"));






const init = async() => {
    const data = await getData();
    displayPhotographer(data.photographers);
    filterTag(data.photographers);
}
init();

