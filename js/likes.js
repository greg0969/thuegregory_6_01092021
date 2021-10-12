const divFav = document.querySelectorAll(".likes");
const nbLike = document.querySelectorAll(".likeNumber");
const hearts = document.querySelectorAll(".fa-heart");

hearts.forEach(heart => {
    heart.addEventListener('click', updateLike);
  });

for (let i = 0; i < nbLike.length; i++) {
    console.log(nbLike[i]);
}

function updateLike() {

}


