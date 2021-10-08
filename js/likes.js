
const heart = document.getElementsByClassName("fa-heart");
const nbLike = document.getElementsByClassName("nbLike");
let isLiked = false ; 

function addLike() {
    heart.style.fontWeight == "bold";
    return isLiked = true ;
} 

function removeLike() {
    heart.style.fontWeight == "bold";
    return isLiked = false ;
}

function updateLike() {
    const divFav = document.querySelectorAll(".likes");

    if (isLiked){
        divFav.forEach(fav => fav.addEventListener("click",addLike)); 
    }

    if (isLiked = true){
        divFav.forEach(fav => fav.addEventListener("click",removeLike));
    }
}

