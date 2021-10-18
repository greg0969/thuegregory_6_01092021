function updateLike(isLiked) {
    const nbLikes = document.querySelectorAll(".numberOfLikes");
    const hearts = document.querySelectorAll(".fa-heart");
    const sectionTotalLikeAndPrice = document.querySelector(".LikesAndPrice");
    sectionTotalLikeAndPrice.innerHTML = `<span id="totalLikes">${this.price}</span><span class="price">${this.price}</span>`;
    const totalLikes = document.getElementById("totalLikes").innerHTML = nbLikes.reduce(getTotalLike);


  for (let i = 0; i < hearts.length; i++) {
    isLiked = hearts[i].getAttribute("aria-label");
  }

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {

      for (let i = 0; i < nbLikes.length; i++) {
        let mediaNbLike = nbLikes[i].textContent;

        if (isLiked == "unliked") {
          mediaNbLike++;
          nbLikes[i].innerHTML = mediaNbLike;
          heart.setAttribute("aria-label", "liked");
        }
        
        if (isLiked == "liked") {
          mediaNbLike--;
          nbLikes[i].innerHTML = mediaNbLike;
          heart.setAttribute("aria-label", "unliked");
        }
      }
    });
  });
}


function getTotalLike(total,nbOfLikes){
  return total + Math.round(nbOfLikes);
}
