let num
let choice = '';
let compChoice = '';
let slogans = ['Do we go on 3...or after 3?', 'You go first', 'Which one is scissors again?', 'What? No Spock button?', 'I promise to pick paper this time', 'Hi Tori', 'No Cheating', 'Best of three?', 'What is this human emotion you call "Vengeance"?','You will soon be travelling negatively along the y-axis', 'RNG stabilisers are active', 'Have you ever met my brother HAL?' ]



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

function sloganDisplay() {
    let sloganChoice = Math.floor(Math.random() * slogans.length);
    document.getElementById("message-el").innerText = slogans[sloganChoice];
    console.log(sloganChoice);
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
        document.getElementById("message-el").innerText = `Computer picked ${compChoice}.` + `\nIt's a Draw!`;
    } else if (choice == 'rock') {
        switch (compChoice) {
            case 'paper':
                document.getElementById("message-el").innerText = `Computer picked ${compChoice}.` + `\nComputer wins!`;
                break;
            case 'scissors':
                document.getElementById("message-el").innerText = `Computer picked ${compChoice}.` + `\nYou win!`;
                break;
        }
    } else if (choice == 'paper') {
        switch (compChoice) {
            case 'rock':
                document.getElementById("message-el").innerText = `Computer picked ${compChoice}.` + `\nYou win!`;
                break;
            case 'scissors':
                document.getElementById("message-el").innerText = `Computer picked ${compChoice}.` + `\nComputer wins!`;
                break;
        }
    } else if (choice == 'scissors') {
        switch (compChoice) {
            case 'rock':
                document.getElementById("message-el").innerText = `Computer picked ${compChoice}.` + `\nComputer wins!`;
                break;
            case 'paper':
                document.getElementById("message-el").innerText = `Computer picked ${compChoice}.` + `\nYou win!`;
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