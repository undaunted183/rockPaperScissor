//these two variable are used to keep track of score after each round of play
let yourScore = 0;
let computerScore = 0;


// this is the function which plays a single round of game and returns its result in string format and at the same time updates the global score variable
function playOnce(){ 

    //computer selection
    let computerPlay = function(){
        const result = ['Rock','Paper','Scissor'];
         let x = Math.floor(Math.random()*3)
         console.log(x);
        return result[x];
    }
    
    //console.log( computerPlay());
    let computerSelection = computerPlay();

    //player selection and formating player selection string
    let playerSelection = window.prompt("what do you choose? Rock, Paper or Scissor!");
    playerSelection = playerSelection[0].toUpperCase()+ (playerSelection.slice(1)).toLowerCase();
    
    console.log(playerSelection);
    
    function playRound(playerSelection, computerSelection){
        //check if user input is valid or not 
        //condition for computer winning
        if((computerSelection==='Rock' && playerSelection==='Scissor') || (computerSelection==='Paper' && playerSelection==='Rock') || (computerSelection==='Scissor' && playerSelection==='Paper')) {
            computerScore++;
            return(`You loose! ${computerSelection} beat ${playerSelection} :(( `);
        }
        
        // condition for player winning
        else if((playerSelection==='Rock' && computerSelection==='Scissor') || (playerSelection==='Paper' && computerSelection==='Rock') || (playerSelection==='Scissor' && computerSelection==='Paper')) {
            yourScore++;
            return(`You Win! ${playerSelection} beat ${computerSelection} :))`);
        }
    
        //condition for a tie
        else if (playerSelection === computerSelection){
            return(`Its a tie! ${computerSelection} tie with ${playerSelection} `);
        }
        // Invalid inputs
        else 
        return('Invalid selection, try again! Make sur e first character is not a blank space');
    }
    
    return playRound(playerSelection,computerSelection);
}

//function for playing 5 round of games, it prints result of each round and final result of 5 rounds

function game(){
    for(let i=0; i<5; i++){
        console.log(`Result of Round ${i+1}: ${playOnce()} `);
    }
    if (yourScore>computerScore){
        console.log(`Congratulation you won by score ${yourScore} : ${computerScore}`);
    }
    else if (yourScore<computerScore){
        console.log(`Sorry, you lost by score ${yourScore} : ${computerScore} `);
    }
    else {
        console.log(`Its a tie with the score of ${yourScore} : ${computerScore}`);
    }
    
    //resetting the score variables after game is over
    yourScore=0;
    computerScore=0;
}

game();