let currentPlayer = "O";
let moveCount = 0;
let resultDisplay = document.getElementById("result");
let messageDisplay = document.getElementById("message");
let newGameButton = document.getElementById("new-game");

const boxes = document.querySelectorAll(".grid-box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", handleBoxClick);
}

function handleBoxClick(e) {
  if (!e.target.innerText) {
    currentPlayer = currentPlayer === "O" ? "X" : "O";
    e.target.innerHTML = `<div class="tic-tac ${currentPlayer === 'X' ? 'x' : 'o'}">${currentPlayer}</div>`;
    moveCount++;
  }
  if (moveCount === 9) {
    showResult("It's a DRAW!");
  }
  checkWinner();
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (boxes[a].innerText + boxes[b].innerText + boxes[c].innerText === "XXX") {
      showResult("'X' Won the game!");
      return;
    } else if (boxes[a].innerText + boxes[b].innerText + boxes[c].innerText === "OOO") {
      showResult("'O' Won the game!");
      return;
    }
  }
}

function showResult(message) {
  messageDisplay.innerText = message;
  resultDisplay.style.visibility = "visible";
}

newGameButton.addEventListener("click", () => {
  location.reload();
});
