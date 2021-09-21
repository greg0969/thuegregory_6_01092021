
const displayPhotographerModel = (ArrayOfPhotographer) => {
    let urlId = window.location.search.substr(4);
    const main = document.querySelector(".main");
    ArrayOfPhotographer.forEach((photographer) => {
        let photographerModel = new Photographer(photographer)
        main.innerHTML = photographerModel.createhtml1();
    });
    };

const getData = async () =>
    await fetch("./data.json")
      .then((res) => res.json())
      .catch((error) => console.log("erreur"));

  

const init = async() => {
    const data = await getData();
    displayPhotographerModel(data.photographers); 
}
init();

