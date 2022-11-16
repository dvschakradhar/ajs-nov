console.log("Hello");
let choices = ['rock', 'paper', 'scissors'];
let numberOfRounds = 5;
window.computerChoose = function() {
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
};

document.getElementById('game-container').addEventListener('click',function(event){
    console.log(event.target.innerText.toLowerCase());
    startGame(event.target.innerText.toLowerCase());
})


// rock 0
// paper 1
// scissors 2
function startGame(userChoice) {
    if(numberOfRounds > 0) {
        numberOfRounds --;
        console.log(numberOfRounds);
        let computerChoice = window.computerChoose();
        let resultElement = document.getElementById('result');
        if(userChoice === 'rock') {
            if(computerChoice == 'paper'){
                // winner is computer
                resultElement.innerHTML = 'Computer won';
            } else if(computerChoice == 'rock'){
                //tie
                resultElement.innerHTML = 'Its a tie';
            } else {
                // winner is user
                resultElement.innerHTML = 'You won';
        
            }
        }
        else if(userChoice === 'paper') {
            if(computerChoice == 'scissors'){
                // winner is computer
            } else if(computerChoice == 'paper'){
                //tie
            } else {
                // winner is user
            }
        
        }
        else if(userChoice === 'scissors') {
            if(computerChoice == 'rock'){
                // winner is computer
            } else if(computerChoice == 'scissors'){
                //tie
            } else {
                // winner is user
            }
        
        }
    }
    
}
