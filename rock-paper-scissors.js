const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
function getComputerChoice(){
    const choices = [ROCK, PAPER, SCISSORS];
    return choices[Math.floor(Math.random()*choices.length)];
}
