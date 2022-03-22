const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click',() => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}



async function newCharSelect() {
    event.preventDefault();

    const character_id = document.querySelector('#email-sign-up').value.trim();

   

    const response = await fetch('/api/users/character', {
        method: 'POST',
        body: JSON.stringify({
            character_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        document.location.replace('/homepage')
    } else {
        console.log('You are NOT signed up')
    }
}

document
    .querySelector(".container")
    .addEventListener("submit", newCharSelect);


