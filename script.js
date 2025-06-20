let button = document.querySelector('button');
button.addEventListener('click', () => {
    let p = document.querySelector('p');
    p.remove();
    button.remove();
    document.querySelector('.container').classList.remove('hidden');
    document.querySelector('.game').classList.remove('hidden');
    document.querySelector('.reset').classList.remove('hidden');
});

let boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (box.classList.contains('x') || box.classList.contains('o')) {
            return;
        }
        box.classList.add('x');
        if (checkWin('x')) {
            setTimeout(() => alert('X wins!'), 100);
            resetGame();
            return;
        }
        if (isDraw()) {
            setTimeout(() => alert('It\'s a draw!'), 100);
            resetGame();
            return;
        }
        computerMove();
    });
});

let resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGame);
let turnX = true;
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach(box => {
  box.addEventListener("click", () => {
    box.innerText = turnX ? "X" : "O";
    turnX = !turnX;                
  });
});
