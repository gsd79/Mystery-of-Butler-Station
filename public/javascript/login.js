async function newLogIn (event) {
    event.preventDefault();

    const email = document.querySelector('#username-field').value.trim();
    const password = document.querySelector('#password-field').value.trim();


    if (email && password) {
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
            alert('You are NOT logged in')
        }
    }
}
document
  .querySelector("#login-form")
  .addEventListener("submit", newLogIn);
