const startBtn = document.querySelector("#startBtn");
const container = document.querySelector("#container");
const boxes = document.querySelectorAll(".box");
const result = document.querySelector("#result");
const restartBtn = document.querySelector("#restartBtn");

// マスの初期値は空
let options = ["", "", "", "", "", "", "", "", ""];
// 初期のプレイヤー
let currentPlayer = "O";
// ゲームが実行中かどうか
let running = false;

// スタートボタンを押すとゲームが表示され、スタートボタンが非表示になる
// startBtn.addEventListener("click", () => {
//   if (getComputedStyle(container).display == 'none') {
//     container.style.display = "block";
//   }
//   if (getComputedStyle(startBtn).display == 'inline-block') {
//     startBtn.style.display = "none";
//   }
// })

// リスタートボタンを押すとゲームが非表示になり、スタートボタンが表示される
// restartBtn.addEventListener("click", () => {
//   if (getComputedStyle(container).display == 'block') {
//     container.style.display = "none";
//   }
//   if (getComputedStyle(startBtn).display == 'none') {
//     startBtn.style.display = "inline-block";
//   }
// })
