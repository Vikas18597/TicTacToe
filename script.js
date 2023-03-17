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

//adding event listener to fill values 

let arr = []

const addVal = (x) => {
    if(arr.length === 0){
        if (x.target.tagName != 'BUTTON') return
        else if((x.target.innerText === '') && (Game.userVal === 'O')){
            x.target.innerText = 'O'
            arr.push("O")
        }
        else if((x.target.innerText === '') && (Game.userVal === 'X')){
            x.target.innerText = 'X'
            arr.push("X")
        }
    
    }
    else{
        if (x.target.tagName != 'BUTTON') return
        else if((arr[arr.length -1] === "O") && (x.target.innerText === '')){
            x.target.innerText = 'X'
            arr.push("X")
        }
        else if((arr[arr.length -1] === "X") && (x.target.innerText === '')){
            x.target.innerText = 'O'
            arr.push("O")
        }
    }
    
    console.log(arr)
} 

// playing the game by selecting where to enter value 
const playArea = document.querySelector('.play-area')
playArea.addEventListener('click', addVal)




// const addVal_O = (x) => {
//     if (x.target.tagName === 'BUTTON') {
//         if(x.target.innerText === ''){
//             x.target.innerText = 'O'
//         }
//     }
// } 



// const fillVal = () => {
//     for (let i = 0; i < 9 ; i++){
//         console.log(Game.userVal === 'O')
//         if (Game.userVal === 'O'){
//             if(i%2 == 0){
//                 playArea.addEventListener('click', addVal_O)
//                 playArea.removeEventListener("mousemove", addVal_O)
//             }else{
//                 playArea.addEventListener('click', addVal_X)
//                 playArea.removeEventListener("mousemove", addVal_X)
//             }
//         }  
//     }    
// }

// const fillVal = () => {
//     for (let i = 0; i < 9 ; i++){
//         console.log(Game.userVal === 'O')
//         if (Game.userVal === 'O'){
//             if(i%2 == 0){
//                 playArea.addEventListener('click', addVal_O)
//                 playArea.removeEventListener("mousemove", addVal_O)
//             }else{
//                 playArea.addEventListener('click', addVal_X)
//                 playArea.removeEventListener("mousemove", addVal_X)
//             }
//         } 
//         else{
//             if(i%2 == 0){
//                 playArea.addEventListener('click', addVal_X)
//                 playArea.removeEventListener("mousemove", addVal_X)
//             } else{
//                 playArea.addEventListener('click', addVal_O)
//                 playArea.removeEventListener("mousemove", addVal_O)
//             }
//         }
//     }
     
// }