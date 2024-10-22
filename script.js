const cells = document.querySelectorAll('[data-cell]');
const winBtn = document.getElementById('winBtn');
const loseBtn = document.getElementById('loseBtn');

let currentPlayer = 'X';

// Imagens para os jogadores
const xImage = 'x.png';  
const oImage = 'o.png';  

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
    const cell = e.target;
    placeMark(cell, currentPlayer);
    if (checkWin(currentPlayer)) {
        endGame(`${currentPlayer} ganhou!`);
    } else if (isDraw()) {
        endGame('Empate!');
    } else {
        swapTurns();
    }
}

function placeMark(cell, player) {
    const img = document.createElement('img');
    img.classList.add('animacao-elemento')
    img.src = player === 'X' ? xImage : oImage;
    cell.appendChild(img);
}

function swapTurns() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin(player) {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winCombos.some(combo => {
        return combo.every(index => {
            const cell = cells[index];
            const img = cell.querySelector('img');
            return img && img.src.includes(player === 'X' ? xImage : oImage);
        });
    });
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.querySelector('img');
    });
}

function endGame(message) {
    setTimeout(() => {
        alert(message);
        resetGame();
    }, 100);
}

function updateScore(player) {
    if (player === 'X') {
        scorePlayer1++;
        scorePlayer1El.textContent = scorePlayer1;
    } else {
        scorePlayer2++;
        scorePlayer2El.textContent = scorePlayer2;
    }

    // Reseta o placar quando alguém atinge 10 vitórias
    if (scorePlayer1 === 10 || scorePlayer2 === 10) {
        resetScore();
    }
}

function resetScore() {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    scorePlayer1El.textContent = scorePlayer1;
    scorePlayer2El.textContent = scorePlayer2;
}

function resetGame() {
    cells.forEach(cell => {
        cell.innerHTML = '';  // Remove a imagem
        cell.addEventListener('click', handleClick, { once: true });
    });
    currentPlayer = 'X';
}