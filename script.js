function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1){
        return "Rock";
    } else if (random === 2){
        return "Paper";
    } else {
        return "Scissors";
    }
}
function playRound(playerSelection, computerSelection){
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        return `It's a tie! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} ties ${computerSelection}`;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS"){
        return "You win!";
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER"){
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK"){
        return `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`
    }
}
function game(){
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Choose one: ")
        if (playRound(playerSelection, computerPlay()).includes("win!")){
            playerScore++;
        } else {
            computerScore++;
        }
    }
    if (playerScore > computerScore){
        console.log("You win this game!");
    } else if (playerScore < computerScore){
        console.log("You lose this game!");
    } else {
        console.log("It's a tie!");
    }
}

game()