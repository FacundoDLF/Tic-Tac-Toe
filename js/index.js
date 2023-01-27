var turn = "X";
var cells = document.getElementsByTagName("td");
var gameStatus = "";
var resetButton = document.getElementById("reset-button");
var theEnd = document.getElementById("the-end");

for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
        if (this.innerHTML === "" && gameStatus === "") {
            this.innerHTML = turn;
            checkForWinner();
            if (gameStatus === "") {
                checkForTheEnd();
            }
            if (turn === 'X') {
                turn = 'O';
            } else {
                turn = 'X';
            }
        }
    });
}

function checkForWinner() {
    var winningCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
        [1, 5, 9], [3, 5, 7] // diagonals
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var combination = winningCombinations[i];
        if (cells[combination[0] - 1].innerHTML === turn &&
            cells[combination[1] - 1].innerHTML === turn &&
            cells[combination[2] - 1].innerHTML === turn) {
            gameStatus = turn + " WINS!";
            resetButton.style.display = "block";
            // alert(gameStatus);
            theEnd.style.display = "block";
            const message = document.querySelector("#the-end");
            message.innerHTML = gameStatus;
            return;
        }
    }
}

function checkForTheEnd() {
    var isOver = true;
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML === "") {
            isOver = false;
            break;
        }
    }
    if (isOver) {
        gameStatus = "TIE!";
        resetButton.style.display = "block";
        // alert(gameStatus);
        theEnd.style.display = "block";
        const message = document.querySelector("#the-end");
        message.innerHTML = gameStatus;
    }
}

document.getElementById("reset-button").addEventListener("click", function () {
    // Remove the X's and O's from the cells
    for (var i = 1; i <= 9; i++) {
        var cell = document.getElementById("cell-" + i);
        cell.innerHTML = "";
    }
    // Reset the current player and the game status
    turn = "X";
    gameStatus = "";
    theEnd.style.display = "none"
})