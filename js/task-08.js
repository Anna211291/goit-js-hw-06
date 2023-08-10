const loginForm = document.querySelector(".login-form"); 

loginForm.addEventListener("submit", hendlerSubmit);

function hendlerSubmit(evt) {

    evt.preventDefault();

    const { email, password } = evt.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
    }
 
console.log({ email: email.value, password: password.value });
  evt.currentTarget.reset();
}
