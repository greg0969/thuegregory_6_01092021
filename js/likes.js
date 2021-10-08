const divFav = document.querySelectorAll(".likes");
const nbLike = document.getElementsByClassName("nbLike");
const heart = document.getElementsByClassName("fa-heart");

divFav.addEventListener("click",e) 
e.preventDefault();
heart.setAttribute("aria-label","liked");
heart.style.fontWeight == "bold";


