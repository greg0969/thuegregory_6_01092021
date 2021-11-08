function displayModalForm(){
  const contactBtn = document.querySelector(".btn-contact");

  contactBtn.addEventListener("click", () => {
    const modalForm = document.querySelector(".modalForm");
    const name = document.querySelector(".modalForm__body__title")
    modalForm.innerHTML = displayModal();
    /*modalForm.innerHTML = `
    <div class="background">  
      <div class="modalForm__body">
        <form
          name="contact"
          action="photographe.html"
          method="get">
        
          <div class="modalForm__body__title">
            <p>Contactez-moi</p>
            <i class="fas fa-times modalForm__body__title__close"></i>
            
          </div>

          <div
            class="formData">
            <label for="first">Prénom</label><br>
            <input
              class="text-control"
              type="text"
              id="first"
              name="first"
              minlength="2"                                  
            /><br>
            
            
          </div>
          <div
            class="formData">
            <label for="last">Nom</label><br>
            <input
              class="text-control"
              type="text"
              id="last"
              name="last"
                                  
            /><br>
          
          </div>
          <div
            class="formData">
            <label for="email">E-mail</label><br>
            <input
              class="text-control"
              type="email"
              id="email"
              name="email"
            /><br>
          </div>

          <div class="formData">
            <label for="message">Votre message</label><br>
            <textarea class="text-control" name="message" id="message">
            
            </textarea>
            <br>
          </div>
          
          <input
            class="btn-submit button"
            type="submit"
            value="Envoyer"
            id="submit-btn"
          />
          
        </form>
      </div>
    </div> `*/
    //name.innerHTML = displayPhotographerName();
    const close = document.querySelector(".modalForm__body__title__close");
    close.addEventListener("click", () => {
      modalForm.style.display = "none";
    })

    
  })

/*
// FIRSTNAME
form.first.addEventListener("change", function () { 
  validFirst(this); 
});

const validFirst = function (inputFirst) {
  let firstRegExp = new RegExp("^[a-zA-Z]{2,20}$", "g");

  let testFirst = firstRegExp.test(inputFirst.value);

  let small = inputFirst.nextElementSibling;

  if (testFirst) {
    small.style.display = "none";
    small.classList.remove("text-danger");
    inputFirst.style.border = "green solid 2px";
    form.first.setAttribute("aria-invalid", "true");
    return true;
  } else {
    small.style.display = "inline-block";
    small.innerHTML = "Vous devez entrer 2 caractères ou plus.";
    small.classList.add("text-danger");
    inputFirst.style.border = "red solid 2px";
    form.first.setAttribute("aria-invalid", "false");
    return false;
  }
};

// LASTNAME
form.last.addEventListener("change", function () { validLast(this); });

const validLast = function (inputLast) {
  let lastRegExp = new RegExp("^[a-zA-Z]{2,20}$", "g");

  let testLast = lastRegExp.test(inputLast.value);

  let small = inputLast.nextElementSibling;

  if (testLast) {
    small.style.display = "none";
    small.classList.remove("text-danger");
    inputLast.style.border = "green solid 2px";
    form.last.setAttribute("aria-invalid", "true");
    return true;
  } else {
    small.style.display = "inline-block";
    small.innerHTML = "Vous devez entrer 2 caractères ou plus.";
    small.classList.add("text-danger");
    inputLast.style.border = "red solid 2px";
    form.last.setAttribute("aria-invalid", "false");
    return false;
  }
};

//  MAIL
form.email.addEventListener("change", function () { validEmail(this); });

const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp( "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", "g" );

  let testEmail = emailRegExp.test(inputEmail.value);

  let small = inputEmail.nextElementSibling;

  if (testEmail) {
    small.style.display = "none";
    small.classList.remove("text-danger");
    inputEmail.style.border = "green solid 2px";
    form.email.setAttribute("aria-invalid", "true");
    return true;
  } else {
    small.style.display = "inline-block";
    small.innerHTML = "Vous devez entrer une adresse email valide.";
    small.classList.add("text-danger");
    inputEmail.style.border = "red solid 2px";
    form.email.setAttribute("aria-invalid", "false");
    return false;
  }
};

// MESSAGE
form.textarea.addEventListener("change", function () { validMessage(this); });

const validMessage = function (inputTextarea) {
  let textareaRegExp = new RegExp("^[a-zA-Z]{2,20}$", "g");

  let testTextarea = textareaRegExp.test(inputTextarea.value);

  let small = inputTextarea.nextElementSibling;

  if (testTextarea) {
    small.style.display = "none";
    small.classList.remove("text-danger");
    inputTextarea.style.border = "green solid 2px";
    form.textarea.setAttribute("aria-invalid", "true");
    return true;
  } else {
    small.style.display = "inline-block";
    small.innerHTML = "Vous devez entrer 2 caractères ou plus.";
    small.classList.add("text-danger");
    inputTextarea.style.border = "red solid 2px";
    form.textarea.setAttribute("aria-invalid", "false");
    return false;
  }
};


//  VALIDATION BTN

form.addEventListener("submit", function (e) {
  if (
    validFirst(form.first) &&
    validLast(form.last) &&
    validEmail(form.email) &&
    validMessage(form.textarea)
  ) {
    formBg.style.display = "none";
    main.setAttribute('aria-hidden', 'false');
    formBg.setAttribute('aria-hidden', 'true');
    formBtnOpen.focus();
    
    let searchParamsForm = new URLSearchParams(window.location.search);
    console.log(
      "ID = " +
      searchParamsForm.get(`id`) +
      " First = " +
      searchParamsForm.get(`first`) +
      " Last = " +
      searchParamsForm.get(`last`) +
      " Email = " +
      searchParamsForm.get(`email`) +
      " Textarea = " +
      searchParamsForm.get(`textarea`)
      );
    e.preventDefault();
  } else {
    formBg.style.display = "block";
    e.preventDefault();
  }
}); */
}
