
function updateLike(isLiked) {
    const nbLikes = document.querySelectorAll(".numberOfLikes");
    const hearts = document.querySelectorAll(".fa-heart");
  
    for (let i = 0; i < nbLikes.length; i++) {
        let mediaNbLike = nbLikes[i].textContent ;
        
        console.log(mediaNbLike++)

    }
  
    for (let i = 0; i < hearts.length; i++) {
        isLiked = hearts[i].getAttribute("aria-label");
        console.log(isLiked)
    }
    
    hearts.forEach(heart => {
      heart.addEventListener('click', () => {
        if (isLiked == "unliked") {
     
            //heart[i].setAttribute("aria-label","liked")/* Il faut récuperer la valeur du span like puis 
            //selon le label augmenter ou baisser le nb et également penser au nb de likes total */
  
          console.log("liker")
        }
        if (isLiked == "liked") {
           
            //heart[i].setAttribute("aria-label","unliked")
        }
        console.log("click")
      });
      
    });
    
  }
  