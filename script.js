function rps(p1, p2) {
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
}