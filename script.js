let button = document.querySelector('button');
button.addEventListener('click', () => {
    let p = document.querySelector('p');
    p.remove();
    button.remove();
    document.querySelector('.container').classList.remove('hidden');
    document.querySelector('.game').classList.remove('hidden');
    document.querySelector('#reset').classList.remove('hidden');
});

let boxes = document.querySelectorAll('.box');

let resetButton = document.querySelector('#reset');
const resetGame = () => {
    moves = 0;
    turnX = false;
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    let msg = document.querySelector('#winmsg');
    msg.classList.add('hidden');
    turnX = true;
};
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
let moves = 0;
boxes.forEach(box => {
    box.addEventListener("click", () => {
    box.innerText = turnX ? "X" : "O";
    turnX = !turnX;
    box.disabled = true;
    moves++;
    checkWin();
    if (moves === 9) {
        console.log("It's a draw!");
        showWinner("No one, it's a draw!");
        boxes.forEach(box => box.disabled = true);
    }
    console.log(moves);
  });
});
const showWinner = (winner) => {
  let msg = document.querySelector('#winmsg');
  msg.innerText = `Winner is ${winner}`;
  msg.classList.remove('hidden');
  document.querySelector('#newbtn').classList.remove('hidden');
};

document.querySelector('#newbtn').addEventListener('click', () => {
  resetGame();
  document.querySelector('#newbtn').classList.add('hidden');
});
const checkWin = () => {
  for (let pattern of winPatterns) {
      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
       let pos3 = boxes[pattern[2]].innerText;
       if(pos1!==""&&pos2!==""&&pos3!=="") {
        if (pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            boxes.forEach(box => box.disabled = true);
        }
    }
  }
};
