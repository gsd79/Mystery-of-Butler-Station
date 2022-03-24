const panels = document.querySelectorAll('.panel');
const engineerbtn = document.getElementById('engineer');

engineerbtn.addEventListener('click', clickMe)
function clickMe(){
console.log('engineerbtn')
}

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

    const character_id = document.querySelector('.panel active').value.trim();
    
   console.log(character_id)

    // const response = await fetch('/api/users/character', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         character_id
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })
    // if (response.ok) {
    //     document.location.replace('/homepage')
    // } else {
    //     console.log('You are NOT signed up')
    // }
}

document
    .getElementById("playbtn")
    .addEventListener("click", newCharSelect);


