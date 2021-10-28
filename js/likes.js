
function updateLike() {
  const divLikes = document.querySelectorAll(".likes");
  
  divLikes.forEach((divOfLike) => {
    divOfLike.addEventListener("click", () => {
      isLiked = divOfLike.getAttribute("aria-label");
      let nbOfLike = divOfLike.textContent;

      if (isLiked == "unliked") {
        nbOfLike++;
        divOfLike.innerHTML = ` <span class="numberOfLikes">${nbOfLike}</span> <i class="fa-heart far"></i>`;
        divOfLike.setAttribute("aria-label", "liked");
      }

      if (isLiked == "liked") {
        nbOfLike--;
        divOfLike.innerHTML = ` <span class="numberOfLikes">${nbOfLike}</span> <i class="fa-heart far"></i>`;
        divOfLike.setAttribute("aria-label", "unliked");
      }
      
      getTotalLike(); 

    });
    
  });
  
}


function getTotalLike() {

  const nbLikes = document.querySelectorAll(".numberOfLikes");
  const totalLikes = document.getElementById("totalLikes");
  let sumLike = 0;
  nbLikes.forEach((nbLike) => {
    sumLike += parseInt(nbLike.textContent);
  });

  totalLikes.innerHTML = `${sumLike} <i class="fa-heart far"></i>`;
}
