async function newLogIn () {
    event.preventDefault();

    const email = document.querySelector('#username-field').value.trim();
    const password = document.querySelector('#password-field').value.trim();

    const response =  await fetch (`/api/users/login`, {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok){
        document.location.replace('/character')
    } else {
        console.log('You are NOT logged in')
    }
}

document
  .querySelector("#login-form")
  .addEventListener("submit", newLogIn);
