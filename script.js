let num
let choice = '';
let compChoice = '';


function rock() {
    choice = 'rock';
    compMove('rock')
}

function paper() {
    choice = 'paper';
    compMove('paper')
}

function scissors() {
    choice = 'scissors';
    compMove('scissors')
}

function compMove() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        compChoice = 'rock';
        rps(choice, compChoice);
    } else if (num == 1) {
        compChoice = 'paper';
        rps(choice, compChoice);
    } else {
        compChoice = 'scissors';
        rps(choice, compChoice);
    }
        //document.getElementById("message-el").innerText = `Computer picked ${compChoice}`;       
}
    
function rps(choice, compChoice) {
    if (choice === compChoice) {
        document.getElementById("message-el").innerText = `Computer picked ${compChoice}. Draw!`;
    } else if (choice == 'rock') {
        switch (compChoice) {
            case 'paper':
                document.getElementById("message-el").innerText = `Computer picked ${compChoice}. Computer wins!`;
                break;
            case 'scissors':
                document.getElementById("message-el").innerText = `Computer picked ${compChoice} You win!`;
                break;
        }
    } else if (choice == 'paper') {
        switch (compChoice) {
            case 'rock':
                document.getElementById("message-el").innerText = `Computer picked ${compChoice} You win!`;
                break;
            case 'scissors':
                document.getElementById("message-el").innerText = `Computer picked ${compChoice}. Computer wins!`;
                break;
        }
    } else if (choice == 'scissors') {
        switch (compChoice) {
            case 'rock':
                document.getElementById("message-el").innerText = `Computer picked ${compChoice} Computer wins!`;
                break;
            case 'paper':
                document.getElementById("message-el").innerText = `Computer picked ${compChoice} You win!`;
                break;
        }
    }
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