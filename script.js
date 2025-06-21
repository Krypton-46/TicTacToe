let boxes       = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset');

let winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

let moves = 0;
let turnX = true;
let gameOver = false;               // NEW – flag to stop extra checks

const showWinner = (winner) => {
  document.querySelector('#winmsg').innerText = `Winner is ${winner}`;
  document.querySelector('#winmsg').classList.remove('hidden');
  document.querySelector('#newbtn').classList.remove('hidden');
  boxes.forEach(b => b.disabled = true);
  gameOver = true;                  // mark the game as finished
};

/* return true if someone wins, otherwise false */
const checkWin = () => {
  for (let pattern of winPatterns) {
    const [a,b,c] = pattern;
    if (
      boxes[a].innerText &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[b].innerText === boxes[c].innerText
    ) {
      showWinner(boxes[a].innerText);
      return true;                  // tell caller a win happened
    }
  }
  return false;
};

boxes.forEach(box => box.addEventListener('click', () => {
  if (gameOver) return;             // safety‑net

  box.innerText = turnX ? 'X' : 'O';
  box.disabled  = true;
  turnX = !turnX;
  moves++;

  if (checkWin()) return;           // **don’t run draw logic if win**

  if (moves === 9) {                // only runs when there’s no winner
    showWinner("No one, it's a draw!");
  }
}));

const resetGame = () => {
  moves = 0;
  turnX = true;
  gameOver = false;                 // reset the flag
  boxes.forEach(b => { b.innerText = ''; b.disabled = false; });
  document.querySelector('#winmsg').classList.add('hidden');
  document.querySelector('#newbtn').classList.add('hidden');
};
resetButton.addEventListener('click', resetGame);
document.querySelector('#newbtn').addEventListener('click', resetGame);
