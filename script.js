let messageEl = document.getElementById("message-el");
let choice = '';





function rock() {
    choice = 'rock'
    let num = Math.floor(Math.random()) * 3;
    document.getElementById("message-el").innerHTML = num;
    console.log('Rock was clicked');
    return choice
   
}

function paper() {
    choice = 'paper'
    document.getElementById("message-el").innerHTML = "PAPER";
    console.log('Paper was clicked');
    return choice
}

function scissors() {
    choice = 'scissors'
    document.getElementById("message-el").innerHTML = "SCISSORS";
    console.log('Scissors was clicked');
    return choice
}

function compMove() {

}


startGame() {

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