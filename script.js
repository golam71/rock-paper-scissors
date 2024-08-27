/*
 *  2 funtions getComputerChoice and getHumanChoice
 * computer gets an int between 0 and 2 randomly and they are respectively rock, paper and scissors
 * human gets a prompt to enter number between 0 and 2 for now and check if input is correct or not
 * then retrun the same stuff compare tem using if else and say result
 */

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  if (randomInt === 0) {
    return "rock";
  } else if (randomInt === 1) {
    return "paper";
  } else return "scissors";
}

function getHumanChoice() {
  let userInt = parseInt(
    prompt("Enter 0 for rock\n1 for paper\n2 for scissors")
  );
  if (userInt === 0 || userInt === 1 || userInt === 2) {
    if (userInt === 0) {
      return "rock";
    } else if (userInt === 1) {
      return "paper";
    } else return "scissors";
  }
  alert("Invalid input.");
  getHumanChoice();
}

let humanChoice;
let comptupterChoice;

function playRound(humanChoice, comptupterChoice) {
  comptupterChoice = getComputerChoice();
  humanChoice = getHumanChoice();

  console.log(`Computer ${comptupterChoice} VS Human ${humanChoice}`);

  switch (comptupterChoice) {
    //
    case "rock":
      if (humanChoice === "paper") {
        console.log("Human wins Computer looses");
        humanScore++;
      } else if (humanChoice === "scissors") {
        console.log("Computer wins. Human loses");
        computerScore++;
      } else console.log("This match is drawn as both players chose rock");

      break;
    //
    case "paper":
      if (humanChoice === "scissors") {
        console.log("Human wins Computer looses");
        humanScore++;
      } else if (humanChoice === "rock") {
        console.log("Computer wins. Human loses");
        computerScore++;
      } else console.log("This match is drawn as both players chose paper");

      break;
    case "scissors":
      if (humanChoice === "rock") {
        console.log("Human wins Computer looses");
        humanScore++;
      } else if (humanChoice === "paper") {
        console.log("Computer wins. Human loses");
        computerScore++;
      } else console.log("This match is drawn as both players chose scissors");
      //

      break;

    default:
      break;
  }
  console.log(`Computer score : ${computerScore}`);
  console.log(`Human score : ${humanScore}`);
}

for (let i = 0; i < 5; i++) {
  playRound(humanChoice, comptupterChoice);
}
