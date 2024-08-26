/*
 *  2 funtions getComputerChoice and getHumanChoice
 * computer gets an int between 0 and 2 randomly and they are respectively rock, paper and scissors
 * human gets a prompt to enter number between 0 and 2 for now and check if input is correct or not
 * then retrun the same stuff compare tem using if else and say result
 */

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


