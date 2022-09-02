
/* VARIABLE */
let regExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

/* VARIABLES FOR SELECT */
const emailDs = document.getElementById("email-ds-input");
const emailMobile = document.getElementById("email-mobile-input");
const validationText = document.getElementById("validation");
const buttonDs = document.getElementById("button-ds");
const buttonMobile = document.getElementById("button-mobile");

/* MOBILE AND DESKTOP HAS DIFFERENT FORMS */
/* CHECK THE INPUT IF ITS VALID OR NOT AND MANIPULATE IT */
function check(){
    if(emailDs.value.match(regExp)){
        validationText.style.display = "none";
        emailDs.style.border = "1px solid green"
        emailMobile.style.border = "1px solid green"
    }


    else if(emailMobile.value.match(regExp)){
        validationText.style.display = "none";
        emailDs.style.border = "1px solid green"
        emailMobile.style.border = "1px solid green"
    }

    else{
        validationText.style.display = "flex";
        emailDs.style.border = "1px solid red"
        emailMobile.style.border = "1px solid red"
    }
}

/* I DON'T FEEL CONFORTABLE USING ARROW FUNCTIONS WITH EVENTS */
/* MOBILE AND DESKTOP HAS DIFFERENT FORMS THATS WHY I CREATED 2 DIFFERENT EVENT */
emailDs.addEventListener("keydown", function(){
    check()
})

emailMobile.addEventListener("keydown", function(){
    check()
})

buttonDs.addEventListener("click", function(e){
    e.preventDefault()
})

buttonMobile.addEventListener("click", function(e){
    e.preventDefault()
})