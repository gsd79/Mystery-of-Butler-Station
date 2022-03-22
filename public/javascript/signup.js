
const signUpButton = document.getElementsByClassName("signupbtn");

async function newSignUp (event) {
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
    .then(response => console.log(response));

    // if (response.ok){
    //     document.location.replace('/login')
    // } else {
    //     console.log('You are NOT signed up')
    // }
}

signUpButton.addEventListener("submit",newSignUp);
    