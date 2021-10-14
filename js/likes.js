function updateLike(isLiked) {
  const nbLikes = document.querySelectorAll(".numberOfLikes");
  const hearts = document.querySelectorAll(".fa-heart");

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
