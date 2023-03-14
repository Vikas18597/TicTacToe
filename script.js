const clicked = (x) => {
    if (x.target.tagName === 'BUTTON') {
        if (x.target.innerText === 'X'){
            const userVal = 'X'
            const botVal = 'O'
        }
        else{
            const userVal = 'O'
            const botVal = 'X'
        }
    divAddDel()
    
    }
}

const divAddDel = () => {
    // hiding the main page once player makes a selection
    const deleteDiv = document.querySelector(".header")
    deleteDiv.classList.add("hidden");   
    console.log(deleteDiv)
    // showing the game once the player makes a selection
    const showDiv = document.querySelector(".container")
    showDiv.classList.add("visible");   
    console.log(showDiv)
}




const side = document.querySelector('.side')
side.addEventListener('click', clicked)
