//2nd try

let yourScore=0;
let computerScore=0;

const buttons = document.querySelectorAll(".btn"); 
const start = document.querySelector(".start-btn");
   console.log(buttons);

//function for computer's selection
let computerPlay = function(){
    const result = ['Rock','Paper','Scissor'];
     let x = Math.floor(Math.random()*3)
     console.log(x);
    return result[x];
}

//helper function for creating html and text
function divCreater(msg) {
    const content = document.createElement('div');
    content.classList.add('result');
    content.textContent = msg;
    (document.body).append(content);
}

// helper function for clearing window
function clearPage() {
    let content = document.querySelectorAll(".result"); 
    content.forEach((element)=>{
        element.remove();
    })
   }

//function for checking the winner
function checkWinner(){
    if(yourScore===5){
        clearPage();
        divCreater('You won the Game! Congratulations !!');
        yourScore=0;
        computerScore=0;
    }
    if(computerScore===5){
        clearPage();
        divCreater('You lost the Game! You suck !!');
        yourScore=0;
        computerScore=0;
    }
}



//function for single round of play
function playRound(playerSelection, computerSelection){
    //check if user input is valid or not 
    //condition for computer winning
    if((computerSelection==='Rock' && playerSelection==='Scissor') || (computerSelection==='Paper' && playerSelection==='Rock') || (computerSelection==='Scissor' && playerSelection==='Paper')) {
        computerScore++;
      
        divCreater(`You lost this round ! ${computerSelection} beat ${playerSelection} Score  ${yourScore}:${computerScore} `);
    }
    
    // condition for player winning
    else if((playerSelection==='Rock' && computerSelection==='Scissor') || (playerSelection==='Paper' && computerSelection==='Rock') || (playerSelection==='Scissor' && computerSelection==='Paper')) {
        yourScore++;
       
        divCreater(`You Won this round ! ${playerSelection} beat ${computerSelection} Score  ${yourScore}:${computerScore}`);
    }

    //condition for a tie
    else if (playerSelection === computerSelection){
        
        divCreater(`This round is a tie! ${computerSelection} tie with ${playerSelection}. Score  ${yourScore}:${computerScore} `);
    }
    // Invalid inputs
    else 
    
    divCreater('Invalid selection, try again! Make sure first character is not a blank space');
}


//event handler for playing buttons
   buttons.forEach((button)=>{
       button.addEventListener('click', ()=>{

        let computerSelection = computerPlay();
        let  playerSelection = button.innerText;
           console.log(playerSelection);
           playRound(playerSelection, computerSelection);
           checkWinner();

       })
   })

   

   //event handler for starting button,
   start.addEventListener('click', ()=>{
    clearPage();
   })