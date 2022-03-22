const signUpButton = document.querySelector(".signupbtn");

async function newSignUp () {
    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const name = document.querySelector('input[name="name"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const gender = document.querySelector('input[name="gender"]').value;
    console.log(email)
    console.log(password)
    console.log(name)
    console.log(age)
    console.log(gender)

    fetch (`/api/users/signup`, {
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
    if (response.ok){
        document.location.replace('/login')
    } else {
        console.log('You are NOT signed up')
    }
}



signUpButton.addEventListener("submit", newSignUp)  
    
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


