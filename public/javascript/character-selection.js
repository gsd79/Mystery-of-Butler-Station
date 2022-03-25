const panels = document.querySelectorAll('.panel');

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



async function newCharSelect(event) {
    event.preventDefault();

    const character_id = document.querySelector('.panel.active').dataset.value;
      //console.log(character_id);
    
    const response = await fetch('/api/users/character-selection', {
        method: 'POST',
        body: JSON.stringify({
            character_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        document.location.replace('/mystery-of-butler-station')
    } else {
        console.log('You are NOT signed up')
    }
}

document.getElementById("playbtn").addEventListener("click", newCharSelect);


