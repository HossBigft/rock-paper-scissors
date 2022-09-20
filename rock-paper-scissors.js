const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
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
                return 'Draw! Rock can\'t beat rock';
                break;
            case PAPER:
                return 'You lose! Paper beats rock!';
                break;
            case SCISSORS:
                return 'You win! Scissors can\'t beat rock!';
                break;
        }
    } else if(playerSelection.toUpperCase()===PAPER){
        switch(computerSelection){
            case ROCK:
                return 'You win! Rock can\'t beat paper!';
                break;
            case PAPER:
                return 'Draw! Paper can\'t beat paper!';
                break;
            case SCISSORS:
                return 'You lose! Scissors beat paper!';
                break;
        }
    } else{
        switch(computerSelection){
            case ROCK:
                return 'You lose! Scissors can\'t beat rock!';
                break;
            case PAPER:
                return 'You win! Scissors beat paper!';
                break;
            case SCISSORS:
                return 'Draw! Scissors can\'t beat scissors!';
                break;
        }
    }
}