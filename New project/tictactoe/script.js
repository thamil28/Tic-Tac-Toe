document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');
    const resetButton = document.getElementById('reset');
    let currentPlayer = 'X';
    let moves = 0;

    // Add click event listener to each box
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            if (box.textContent === '') { // Check if the box is empty
                box.textContent = currentPlayer; // Place current player's symbol
                moves++;
                if (checkWin(currentPlayer)) {
                    announceWinner(currentPlayer);
                } else if (moves === 9) {
                    announceDraw();
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch turns
                }
            }
        });
    });

    // Reset game button
    resetButton.addEventListener('click', () => {
        boxes.forEach(box => {
            box.textContent = '';
        });
        currentPlayer = 'X';
        moves = 0;
    });

    // Function to check for a win
    function checkWin(player) {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        return winningCombos.some(combination => {
            return combination.every(index => {
                return boxes[index].textContent === player;
            });
        });
    }

    // Function to announce the winner
    function announceWinner(player) {
        setTimeout(() => {
            alert(`Player ${player} wins!`);
            resetGame();
        }, 100);
    }

    // Function to announce a draw
    function announceDraw() {
        setTimeout(() => {
            alert('Draw!');
            resetGame();
        }, 100);
    }

    // Function to reset the game
    function resetGame() {
        boxes.forEach(box => {
            box.textContent = '';
        });
        currentPlayer = 'X';
        moves = 0;
    }
});