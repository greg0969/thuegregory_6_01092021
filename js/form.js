function displayModalForm() {
  const contactBtn = document.querySelector(".btn-contact");
  const modalForm = document.querySelector(".modalForm");
  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  const textarea = document.getElementById("message");
  

  // affiche le modal
  contactBtn.addEventListener("click", () => {
    modalForm.style.display = "block";


  });

  // ferme le modal
  const close = document.querySelector(".modalForm__body__title__close");
  close.addEventListener("click", () => {
    modalForm.style.display = "none";
  });
  
  // FIRSTNAME
  first.addEventListener("change", () => {
    validFirst();
    
  });

  // LASTNAME
  last.addEventListener("change", () => {
    validLast();
    
  });

  //  MAIL
  email.addEventListener("change", () => {
    validEmail();
  });

  // MESSAGE
  textarea.addEventListener("change", () => {
    validMessage();
  });
  

}


const modalForm = document.querySelector(".modalForm");
const form = document.querySelector("form");


function validFirst() {
  const errorMsg = document.querySelector(".firstError");
  const inputFirst = document.getElementById("first");

  let firstRegExp = new RegExp("^[a-zA-Z]{2,20}$", "g");
  let testFirst = firstRegExp.test(inputFirst.value);

  if (testFirst) {
    errorMsg.style.display = "none";
    inputFirst.style.border = "green solid 3px";
    form.first.setAttribute("aria-invalid", "true");
    return true;
  }
  if (!testFirst) {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Vous devez entrer 2 caractères ou plus.";
    inputFirst.style.border = "red solid 3px";
    form.first.setAttribute("aria-invalid", "false");
    return false;
  }
}



function validLast() {
  const errorMsg = document.querySelector(".lastError");
  const inputLast = document.getElementById("last");

  let lastRegExp = new RegExp("^[a-zA-Z]{2,20}$", "g");
  let testLast = lastRegExp.test(inputLast.value);

  if (testLast) {
    errorMsg.style.display = "none";
    inputLast.style.border = "green solid 3px";
    form.last.setAttribute("aria-invalid", "true");
    return true;
  }
  if (!testLast) {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = "Vous devez entrer 2 caractères ou plus.";
    inputLast.style.border = "red solid 3px";

    form.last.setAttribute("aria-invalid", "false");
    return false;
  }
}



function validEmail() {

  const errorMsg = document.querySelector(".mailError");
  const inputEmail = document.getElementById("email");
  
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  let testEmail = emailRegExp.test(inputEmail.value);

  if (testEmail) {
    errorMsg.style.display = "none";
    inputEmail.style.border = "green solid 3px";
    form.email.setAttribute("aria-invalid", "true");
    return true;
  }
  if (!testEmail) {
    inputEmail.style.border = "red solid 3px";
    errorMsg.style.display = "inline-block";
    form.email.setAttribute("aria-invalid", "false");
    return false;
  }
}


function validMessage() {

  const errorMsg = document.querySelector(".msgError");
  const inputTextarea = document.getElementById("message");

  let textareaRegExp = new RegExp("^[a-zA-Z]{2,20}$", "g");
  let testTextarea = textareaRegExp.test(inputTextarea.value);

  if (testTextarea) {
    errorMsg.style.display = "none";
    inputTextarea.style.border = "green solid 3px";
    form.textarea.setAttribute("aria-invalid", "true");
    return true;
  } 
  if (!testTextarea) {
    inputTextarea.style.border = "red solid 3px";
    errorMsg.style.display = "inline-block";
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
    modalForm.style.display = "none";
    console.log(
      "prénom :" + first.value 
      + "nom :" + last.value
      + "email :" + email.value
      + "message :" + textarea.value
    )

    // let searchParamsForm = new URLSearchParams(window.location.search);
    // console.log(
    //   "ID = " +
    //     searchParamsForm.get(`id`) +
    //     " First = " +
    //     searchParamsForm.get(`first`) +
    //     " Last = " +
    //     searchParamsForm.get(`last`) +
    //     " Email = " +
    //     searchParamsForm.get(`email`) +
    //     " Textarea = " +
    //     searchParamsForm.get(`message`)
    // );
    // e.preventDefault();
  } else {
    modalForm.style.display = "block";
    e.preventDefault();
  }
});
