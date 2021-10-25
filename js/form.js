const main = document.querySelector(".main");
const contactBtn = document.querySelector(".btn-contact");

contactBtn.addEventListener("click", () => {
    main.innerHTML = `
    <div class="bground">
        
        <div class="content">
          <span class="close"></span>
          <div class="modal-body">
            <form
              name="contact"
              action="photographe.html"
              method="get"
            >
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
              
              <input
                class="btn-submit button"
                type="submit"
                value="C'est parti"
                id="submit-btn"
              />
            </form>
          </div>
        </div>
      </div>
    `
})


// FIRSTNAME
form.first.addEventListener("change", function () { validFirst(this); });

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
});


/*<section class="bground" role="dialog" aria-hidden="true">
        <div class="content" aria-label="formulaire de contact">
            <h1>Contacter-moi</h1>
            <span tabindex="0" aria-label="bouton fermer" class="close" id="closeform"></span>
            <div class="modal-body">
                <form action="photographe.html" method="GET" id="contactForm">
                    <!-- garder id= user -->
                    <input type="hidden" id="id"  name="id" value="243" />
                    <div class="formData noBr">
                        <label tabindex="0" for="first">Prénom</label>
                        <input tabindex="0" aria-required="true" aria-invalid="false" class="text-control" value="" type="text" id="first" name="first" placeholder="Ecrire votre prénom ici" />
                        <small id="smallFirst"></small>
                    </div>
                    <div class="formData noBr">
                        <label tabindex="0" for="last">Nom</label>
                        <input tabindex="0" aria-required="true" aria-invalid="false" class="text-control" type="text" id="last" name="last" placeholder="Ecrire votre nom ici" />
                        <small id="smallLast"></small>
                    </div>
                    <div class="formData noBr">
                        <label tabindex="0" for="email">Email</label>
                        <input tabindex="0" aria-required="true" aria-invalid="false" class="text-control" type="email" id="email" name="email" placeholder="Ecrire votre email ici" />
                        <small id="smallEmail"></small>
                    </div>
                    <div class="formData noBr">
                        <label tabindex="0" for="message">Votre message</label>
                        <textarea aria-required="true" aria-invalid="false" class="text-control" id="message" name="textarea" placeholder="Ecrire votre message ici"></textarea>
                        <small id="smallTextarea"></small>
                    </div>
                    
                    <!-- btn validate form -->
                    <input aria-label="bouton d'envoi" class="btn-submit" id="btn_message" type="submit" value="Envoyer" />
                </form>
            </div>
        </div>
    </section>*/ 