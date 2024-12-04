

// выбор в игре

const choices = ["rock", "paper", "scissors"];


//создадим переменные для очков

let userScore = 0;
let computerScore = 0;

//свяжем resetButton

let resetButton = document.getElementById("resetButton");

//Event Listener for userChoices

document.querySelectorAll(".desk img").forEach((img) => {
  img.addEventListener("click", (event) => {
    const userSelection = event.target.id;
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    determineWinner(userSelection, computerSelection);
  });
});

//код для определение кто выиграл

function determineWinner(user, computer){
  const userChoiceElement = document.getElementById("userChoice");
  const computerChoiceElement = document.getElementById("computerChoice");
  const outcomeElement = document.getElementById("outcome");


  //выводить экран кто что выбрал. 

  userChoiceElement.textContent = `Your Choice: ${capitalize(user)}`;
  computerChoiceElement.textContent = `Computer's Choice: ${capitalize(computer)}`;

  //determine Outcome:

  if(user === computer){
    outcomeElement.textContent = "Outcome: It's a tie!"; 
  } else if(
    (user === "rock" && computer === "scissors") || 
    (user === "paper" && computer === "rock") || 
    (user === "scissors" && computer === "paper")
  ){
    outcomeElement.textContent = "Outcome: You win!";
    updateScore("user");
  } else{
    outcomeElement.textContent = "Outcome: Computer wins!";
    updateScore("computer");
  }
}

function updateScore(winner){
  if(winner === "user"){
    userScore++;
    document.getElementById("userScore").textContent = userScore;
  } else if(winner === "computer"){
    computerScore++;
    document.getElementById("computerScore").textContent = computerScore;
  }
}

resetButton.onclick = function(){
  userScore = 0;
  computerScore = 0;
  document.getElementById("userScore").textContent = userScore;
  document.getElementById("computerScore").textContent = computerScore;
}

//Capitalize first letter of a string

function capitalize(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}

