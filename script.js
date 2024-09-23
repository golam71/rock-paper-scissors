/*
 *  2 funtions getComputerChoice and getHumanChoice
 * computer gets an int between 0 and 2 randomly and they are respectively rock, paper and scissors
 * human gets a prompt to enter number between 0 and 2 for now and check if input is correct or not
 * then retrun the same stuff compare tem using if else and say result
 */

let humanScore = 0;
let computerScore = 0;
let rounds = 0;
const resultDiv = document.getElementById("result");
let result;

const rock = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="100"
  height="100"
  viewBox="0 0 512 512"
>
  <path
    fill="currentColor"
    d="M71 22.406v102.53h202.25v18.69h-73.22v36.968h-18.686v-36.97H79.156l43.375 53.782h180.44v18.688H180.905v36.97H162.22v-36.97h-39.407v163.562h58.53v-44.75H157.47V316.22h74.155v-33.66H193.72v-18.687h97.218v18.688h-40.625v33.656h73.28v18.686h-32.437v44.75h26.313v18.688h-63.69l-2.686 74.03l-18.688-.687l2.656-73.343H93.032V398h-.22l-28.687 92.844h79.844l9.81-70.688l18.5 2.563l-9.468 68.124H453.25L424.562 398h-30.03V197.78l51.812-64.25V22.407h-64.406v52.438h-39.22V22.406h-65.124v52.438h-38.53V22.406h-65.126v52.438h-38.5V22.406zm129.03 312.5v44.75h72.44v-44.75z"
  />
</svg>
`;

const paper = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="100"
  height="100"
  viewBox="0 0 512 512"
>
  <rect
    width="96"
    height="96"
    x="96"
    y="112"
    fill="none"
    rx="16"
    ry="16"
  />
  <path
    fill="currentColor"
    d="M468 112h-52v304a32 32 0 0 0 32 32a32 32 0 0 0 32-32V124a12 12 0 0 0-12-12"
  />
  <path
    fill="currentColor"
    d="M431.15 477.75A64.11 64.11 0 0 1 384 416V44a12 12 0 0 0-12-12H44a12 12 0 0 0-12 12v380a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 .3-2.25M96 208v-96h96v96Zm224 192H96v-32h224Zm0-64H96v-32h224Zm0-64H96v-32h224Zm0-64h-96v-32h96Zm0-64h-96v-32h96Z"
  />
</svg>
`;

const scissors = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="100"
  height="100"
  viewBox="0 0 24 24"
>
  <g fill="none" fill-rule="evenodd">
    <path
      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
    />
    <path
      fill="currentColor"
      d="M18.172 4.945a2.5 2.5 0 0 0-.614-3.481l-.41-.287l-5.146 7.35l-5.147-7.35l-.41.287a2.5 2.5 0 0 0-.613 3.481l4.339 6.197l-1.8 2.57a4.5 4.5 0 1 0 2.39 1.816l1.24-1.77l1.24 1.768a4.5 4.5 0 1 0 2.392-1.815l-1.8-2.569zM5.5 18a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m10 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
    />
  </g>
</svg>
`;

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  if (randomInt === 0) {
    return "rock";
  } else if (randomInt === 1) {
    return "paper";
  } else return "scissors";
}

let comptupterChoice;

function playRound(humanChoice, comptupterChoice) {
  comptupterChoice = getComputerChoice();

  console.log(`Computer ${comptupterChoice} VS Human ${humanChoice}`);

  document.getElementById("humanChoice").innerHTML = eval(humanChoice);
  document.getElementById("robotChoice").innerHTML = eval(comptupterChoice);

  switch (comptupterChoice) {
    //
    case "rock":
      if (humanChoice === "paper") {
        result = "You win. Computer loses";
        humanScore++;
      } else if (humanChoice === "scissors") {
        result = "Computer wins. You lose";
        computerScore++;
      } else result = "This match is drawn as both players chose rock";

      break;
    //
    case "paper":
      if (humanChoice === "scissors") {
        result = "You win. Computer loses";
        humanScore++;
      } else if (humanChoice === "rock") {
        result = "Computer wins. You lose";
        computerScore++;
      } else result = "This match is drawn as both players chose paper";

      break;
    case "scissors":
      if (humanChoice === "rock") {
        result = "You win. Computer loses";
        humanScore++;
      } else if (humanChoice === "paper") {
        result = "Computer wins. You lose";
        computerScore++;
      } else result = "This match is drawn as both players chose scissors";
      //

      break;

    default:
      break;
  }
  document.getElementById("human").innerText = humanScore;
  document.getElementById("robot").innerText = computerScore;
  document.getElementById("result").innerHTML  = `Round ${rounds} : ${result}`

  // console.log(`Computer score : ${computerScore}`);
  // console.log(`Human score : ${humanScore}`);
}

// for (let i = 0; i < 5; i++) {
//   playRound(humanChoice, comptupterChoice);
// }

function play(choice) {
  playRound(choice, comptupterChoice);
  rounds++;
}
