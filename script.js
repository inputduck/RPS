let num
let choice = '';
let compChoice = '';

let slogans = ['Do we go on 3...or after 3?', 'You go first', 'Which one is scissors again?', 'What? No Spock button?', 'I promise to pick paper this time', 'Hi Tori', 'No Cheating', 'Best of three?', 'What is... "Vengeance"?','You will soon be moving negatively along the y-axis', 'RNG stabilisers are active', 'Have you met my dad HAL?','Do you feel lucky, human?','' ]



const moveButtons = document.getElementsByClassName('move-btn')
const movesDisplay = document.getElementById('movesDisplay')
const buttons = document.getElementById('buttons');
const p1MoveShow = document.getElementById('p1MoveShow');
const p1MoveText = document.getElementById('p1MoveText');
const compMoveShow = document.getElementById('compMoveShow');
const compMoveText = document.getElementById('compMoveText');
const playAgain = document.getElementById('playAgainButton')



function gameInit() {
    sloganDisplay();
    document.getElementById('sloganDisplay').style.display = "inline";
    document.getElementById('instruction').style.display = "inline";
    document.getElementById('rock_btn').style.display = "inline";
    document.getElementById('paper_btn').style.display = "inline";
    document.getElementById('scissors_btn').style.display = "inline";
    document.getElementById('resultsMessage').style.display = "none";
    playAgainButton.style.display = "none";

    
}

function sloganDisplay() {
    let sloganChoice = Math.floor(Math.random() * slogans.length);
    document.getElementById("sloganDisplay").innerText = slogans[sloganChoice];
    
}

function moveSelect(choice) {
   
    document.getElementById('sloganDisplay').style.display = "none";
    document.getElementById('instruction').style.display = "none";
    compMove(choice)
}







function compMove(choice) {
    //movesDisplay.style.visibility = "visible"
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        compChoice = 'rock';
        //compMoveText.innerText = `${compChoice}`;
        rps(choice, compChoice);
    } else if (num == 1) {
        compChoice = 'paper';
        //compMoveText.innerText = `${compChoice}`;
        rps(choice, compChoice);
    } else {
        compChoice = 'scissors';
        //compMoveText.innerText = `${compChoice}`;
        rps(choice, compChoice);
    }
        //document.getElementById("message-el").innerText = `Computer picked ${compChoice}`;       
}
    
function rps(choice, compChoice) {

document.getElementById('resultsMessage').style.display = "inline";
    if (choice === compChoice) {
        
        document.getElementById("resultsMessage").innerText = `Computer picked ${compChoice}.` + `\n\nIt's a Draw!`;
        gameFinish()
    } else if (choice == 'rock') {
        switch (compChoice) {
            case 'paper':
                document.getElementById("resultsMessage").innerText = `Computer picked ${compChoice}.` + `\n\nComputer wins!`;
                gameFinish()
                break;
            case 'scissors':
                document.getElementById("resultsMessage").innerText = `Computer picked ${compChoice}.` + `\n\nYou win!`;
                gameFinish()
                break;
        }
    } else if (choice == 'paper') {
        switch (compChoice) {
            case 'rock':
                document.getElementById("resultsMessage").innerText = `Computer picked ${compChoice}.` + `\n\nYou win!`;
                gameFinish()
                break;
            case 'scissors':
                document.getElementById("resultsMessage").innerText = `Computer picked ${compChoice}.` + `\n\nComputer wins!`;
                gameFinish()
                break;
        }
    } else if (choice == 'scissors') {
        switch (compChoice) {
            case 'rock':
                document.getElementById("resultsMessage").innerText = `Computer picked ${compChoice}.` + `\n\nComputer wins!`;
                gameFinish()
                break;
            case 'paper':
                document.getElementById("resultsMessage").innerText = `Computer picked ${compChoice}.` + `\n\nYou win!`;
                gameFinish()
                break;
        }
    }
    
}

function gameFinish() {
    document.getElementById('rock_btn').style.display = "none"
    document.getElementById('paper_btn').style.display = "none"
    document.getElementById('scissors_btn').style.display = "none"
    //rockButton.style.display = "none";

    playAgainButton.style.display = "inline"
   


}







//This is the JS only version of the script. Needs to be modified to make it work with buttons and HTML.

/*function rps(p1, p2) {
    if (p1 === p2) {
        return 'Draw!';
    } else if (p1 == 'rock') {
        switch (p2) {
            case 'paper':
                return 'Player 2 won!';
                break;
            case 'scissors':
                return 'Player 1 won!';
                break;
        }
    } else if (p1 == 'paper') {
        switch (p2) {
            case 'rock':
                return 'Player 1 won!';
                break;
            case 'scissors':
                return 'Player 2 won!';
                break;
        }
    } else if (p1 == 'scissors') {
        switch (p2) {
            case 'rock':
                return 'Player 2 won!';
                break;
            case 'paper':
                return 'Player 1 won!';
                break;
        }
    }
} */

