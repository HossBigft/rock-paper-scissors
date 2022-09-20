const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const PLAYERWIN = 1;
const PLAYERLOSE = -1;
const DRAW = 0;
function getComputerChoice(){
    const choices = [ROCK, PAPER, SCISSORS];
    return choices[Math.floor(Math.random()*choices.length)];
}
function getPlayerChoice(){
    let playerSelection = prompt('Select figure:\n 1 for rock, 2 for paper, 3 for scissors');
    switch(playerSelection){
        case '1':
            return ROCK;
            break;
        case '2':
            return PAPER;
            break;
        case '3':
            return SCISSORS;
            break;
        default:
            console.log('error')
        break;
    }
}
function playRound(playerSelection, computerSelection){

    if(playerSelection.toUpperCase()===ROCK){
        switch(computerSelection){
            case ROCK:
                console.log('Draw! Rock can\'t beat rock');
                return DRAW;
                break;
            case PAPER:
                console.log('You lose! Paper beats rock!');
                return PLAYERLOSE;
                break;
            case SCISSORS:
                console.log('You win! Scissors can\'t beat rock!');
                return PLAYERWIN; 
                break;
        }
    } else if(playerSelection.toUpperCase()===PAPER){
        switch(computerSelection){
            case ROCK:
                console.log('You win! Rock can\'t beat paper!');
                return PLAYERWIN;
                break;
            case PAPER:
                console.log('Draw! Paper can\'t beat paper!');
                return DRAW;
                break;
            case SCISSORS:
                console.log('You lose! Scissors beat paper!');
                return PLAYERLOSE;
                break;
        }
    } else{
        switch(computerSelection){
            case ROCK:
                console.log('You lose! Scissors can\'t beat rock!');
                return PLAYERLOSE;
                break;
            case PAPER:
                console.log('You win! Scissors beat paper!');
                return PLAYERWIN;
                break;
            case SCISSORS:
                console.log('Draw! Scissors can\'t beat scissors!');
                return DRAW;
                break;
        }
    }
}