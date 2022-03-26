async function newSignUp (event) {
    event.preventDefault();

    const email = document.querySelector('#email-sign-up').value.trim();
    const password = document.querySelector('#password-sign-up').value.trim();
    const name = document.querySelector('#name-sign-up').value.trim();
    const age = document.querySelector('#age').value.trim();
    const gender = document.querySelector('#gender-sign-up').value.trim();
   
  const response =  await fetch ('/api/users/signup', {
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

document
  .querySelector(".modal-content")
  .addEventListener("submit", newSignUp);

