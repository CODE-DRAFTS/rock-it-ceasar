const computerchoiceDispaly = document.getElementById('computer-choice')
const userrchoiceDisplay = document.getElementById('user-choice')
const resultdisplay = document.getElementById('result')

const possiblechoice = document.querySelectorAll('button')
let userrchoice
let computerChoice
let result
possiblechoice.forEach( possiblechoice => possiblechoice.addEventListener('click', (e) =>{

    userrchoice = e.target.id
    userrchoiceDisplay.innerHTML = userrchoice
    generateComputerChoice()
    getResult()
}) )

function generateComputerChoice(){
    const randomNumber = Math.floor( Math.random() * 3 ) +1
    
    if(randomNumber == 1){
        computerChoice = "rock"
    }
    if(randomNumber == 3){
        computerChoice = "paper"
    }
    if(randomNumber == 2){
        computerChoice = "scissor"
    }

    computerchoiceDispaly.innerHTML = computerChoice
}

function getResult(){

    if(computerChoice == userrchoice){
        result = "its a draw "
    }
    if(computerChoice === "rock" && userrchoice ==="scissor"){
        result = "you win "
    }
    if(computerChoice === "rock" && userrchoice ==="rock"){
        result = "you win "
    }
    if(computerChoice === "rock" && userrchoice ==="paper"){
        result = "you win "
    }
    if(computerChoice === "paper" && userrchoice ==="scissor"){
        result = "you win "
    }
    if(computerChoice === "paper" && userrchoice ==="rock"){
        result = "you win "
    }
    if(computerChoice === "paper" && userrchoice ==="paper"){
        result = "you win "
    }
    if(computerChoice === "scissor" && userrchoice ==="scissor"){
        result = "you win "
    }
    if(computerChoice === "scissor" && userrchoice ==="rock"){
        result = "you win"
    }
    if(computerChoice === "scissor" && userrchoice ==="paper"){
        result = "you win "
    }

    resultdisplay.innerHTML = result
}
