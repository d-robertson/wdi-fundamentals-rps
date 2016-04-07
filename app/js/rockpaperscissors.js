var playerTracker = [];
var computerTracker = [];

function playRPC(){

  var playerChoice;
  var computerChoice;


  var playerChoice = prompt("please choose rock paper or scissors");

  var cpuChoice = function(){
      var computerChoice = Math.random();
      if (computerChoice < 0.33) {
          return "rock";
      } else if (computerChoice < 0.66) {
          return "paper";
      } else {
          return "scissors";
      }
  }
  var computerChoice = cpuChoice();
  console.log(computerChoice);
  console.log(playerChoice);

  function compareResults() {

    if(playerChoice === computerChoice) {
      return 'tie';
    } else if(playerChoice === 'rock') {
      if(computerChoice === 'scissors') {
        return 'player wins';
      }
      return 'player loses';
    } else if (playerChoice === 'paper') {
      if(computerChoice === 'rock') {
        return 'player wins';
      }
      return 'player loses';
    } else {
      if (computerChoice === 'paper') {
        return 'player wins';
      }
      return 'player loses';
    }

  }

  var winner = compareResults();
  console.log(winner);
  function pushWin(){
    if(winner == "player wins"){
      playerTracker.push('1');
    } else if(winner == "player loses"){
      computerTracker.push('1');
    } else if(winner == "tie") {
      console.log('damn ties');
    }
  }
  pushWin();
  console.log(playerTracker.length);
  console.log(computerTracker.length);

  function checkWinner(){
    if(playerTracker.length === 5){
      console.log('you beat the stupid computer');
    } else if(computerTracker.length === 5) {
      console.log('the computer stomped you');
    } else {
     console.log('keep playing');
     playRPC();
    }
  }
  checkWinner();
};
playRPC();

