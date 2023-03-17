// giving user values and bot values 
let Game = {
    userVal : '', 
    botVal : ''
}

const clicked = (x) => {    
    
    if (x.target.tagName != 'BUTTON') return

    if (x.target.innerText === 'X'){
        Game.userVal = 'X'
        Game.botVal = 'O'
        divAddDel()
    }
    else{
        Game.userVal = 'O'
        Game.botVal = 'X'
        divAddDel()
    }
    return Game 
    
}

const divAddDel = () => {
    // hiding the main page once player makes a selection
    const deleteDiv = document.querySelector(".header")
    deleteDiv.classList.add("hidden");   
    
    // showing the game once the player makes a selection
    const showDiv = document.querySelector(".container")
    showDiv.classList.add("visible");   
}

const side = document.querySelector('.side')
side.addEventListener('click', clicked)


// saving previous value  -- will change with entries 
let prev_val = ''

// function to identify winner 
let entry = [...Array(9)]
const winner = (val) => {
    return ((entry[0] === val) && (entry[1] === val) && (entry[2] === val)) ? val + " wins" 
        : ((entry[3] === val) && (entry[4] === val) && (entry[5] === val)) ? val + " wins"
        : ((entry[6] === val) && (entry[7] === val) && (entry[8] === val)) ? val + " wins"
        : ((entry[0] === val) && (entry[3] === val) && (entry[6] === val)) ? val + " wins"
        : ((entry[1] === val) && (entry[4] === val) && (entry[7] === val)) ? val + " wins"
        : ((entry[2] === val) && (entry[5] === val) && (entry[8] === val)) ? val + " wins"
        : ((entry[0] === val) && (entry[4] === val) && (entry[8] === val)) ? val + " wins"
        : ((entry[2] === val) && (entry[4] === val) && (entry[6] === val)) ? val + " wins"
        : 'Continue Playing'
}


// changing the status of the game 
let state = document.getElementById("game-status")

// addVal -- adds text to the maze 
const addVal = (x) => {
    if (x.target.tagName != 'BUTTON') return
    else if(prev_val === ''){
        if(x.target.innerText != '') return
        else if(Game.userVal === 'O'){
            x.target.innerText = 'O'
            entry[x.target.getAttribute('id')] = 'O'
            prev_val = 'O' // updating previous value 
            state.innerHTML = 'Continue Playing'
        }
        else if(Game.userVal === 'X'){
            x.target.innerText = 'X'
            entry[x.target.getAttribute('id')] = 'X'
            prev_val = 'X'      
            state.innerHTML = 'Continue Playing'  
        }
    }

    else{
        if ((x.target.innerText != '')) return
        else if(prev_val === "O"){
            x.target.innerText = 'X'
            entry[x.target.getAttribute('id')] = 'X'
            prev_val = "X" // updating previous value to X from O 
            state.innerHTML = winner("X") 
        }
        else if(prev_val === "X"){
            x.target.innerText = 'O'
            entry[x.target.getAttribute('id')] = 'O'
            prev_val = "O"  
            state.innerHTML = winner("O")    
        }

        // checking if its a tie -- checking for non undefined values and when no one has won 
        (((entry.filter(element => {
            return element !== undefined
        })).length === 9) && (state.innerHTML == 'Continue Playing') ) ? state.innerHTML = "Its a tie" : null 
    }

    
    // console.log(entry)
} 

//adding event listener to fill values 
const playArea = document.querySelector('.play-area')
playArea.addEventListener('click', addVal)

// function to reset 
const reset = () => {
    window.location.reload() 
}
//restart
const restart = document.querySelector('.restart')
restart.addEventListener('click', reset)