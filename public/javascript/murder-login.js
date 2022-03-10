const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-message");

loginButton.addEventListener("click", (e) => { 
    e.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (user === "user" && password === "web_dev") {
        alert("You are now logged in!");
        location.reload();
    } else {
        loginErrorMessage.style.opacity =1;
    }
})