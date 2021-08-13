const div = document.querySelector("div")
const p = document.createElement("p");

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
        p.textContent = `It's a tie! ${playerSelection} ties ${computerSelection}`;
        div.appendChild(p);
        return 2;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS"){
        // console.log("you win!");
        p.textContent = "You win!";
        div.appendChild(p);
        return 0;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER"){
        p.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        div.appendChild(p);
        return 0;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK"){
        p.textContent = `You win! ${ playerSelection} beats ${ computerSelection }`;
        div.appendChild(p)
        return 0;

    } else {
        p.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        div.appendChild(p);
        return 1;
    }
}
let playerScore = 0;
let computerScore = 0;

window.addEventListener("click", function(e){
    if (playRound(e.target.innerHTML, computerPlay()) === 0){
        playerScore += 1;
    } else if (playRound(e.target.innerHTML, computerPlay()) === 1){
        computerScore += 1;
    };
    console.log(playerScore);
    console.log(computerScore);
//     if (playerScore === 5 && !computerScore === 5) {
//         console.log("You won the whole game!!");
//     } else if (computerScore === 5 && !playerScore === 5) {
//         console.log("You lost the whole game!!");
//     };
    if (playerScore >= 5){
        p.textContent = "You win!";
    } else if (computerScore >= 5){
        p.textContent = "You lost!";
    };
});