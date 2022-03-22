const signUpButton = document.querySelector(".signupbtn");

async function newSignUp () {

    const email = document.querySelector('#email-sign-up').value.trim();
    const password = document.querySelector('#password-sign-up').value.trim();
    const name = document.querySelector('#name-sign-up').value.trim();
    const age = document.querySelector('#age').value.trim();
    const gender = document.querySelector('#gender-sign-up').value.trim();

    fetch ('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            name,
            age,
            gender
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }) 
        .then((response) => {
            if (response.ok){
                document.location.replace('/login')
            } else {
                console.log('You are NOT signed up')
            }
        })
}



signUpButton.addEventListener("submit", newSignUp())  
    
    // event.preventDefault();

    // const username = loginForm.username.value;
    // const password = loginForm.password.value;

    // if (user === "user" && password === "web_dev") {
    //     alert("You are now logged in!");
    //     location.reload();
    // } else {
    //     alert("You are not logged in!");
    //     loginErrorMessage.style.opacity =1;
    // }


