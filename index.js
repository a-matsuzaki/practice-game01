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
// ゲームの開始のタイミングでtrueにする
let running = false;

// ゲーム初期化
initializeGame();

// ゲームを初期化する関数
function initializeGame() {
  // 開始時のプレイヤー名を表示
  result.textContent = `${currentPlayer}のターン`;
  // ゲーム実行中
  running = true;
}

// スタートボタンを押したときの挙動
function startGame() {
  // ゲーム画面を表示
  if (getComputedStyle(container).display == 'none') {
    container.style.display = "block";
  }
  // スタートボタンを非表示
  if (getComputedStyle(startBtn).display == 'inline-block') {
    startBtn.style.display = "none";
  }
}

// リスタートボタンを押したときの挙動
function restartGame() {
  // ゲーム画面を非表示
  if (getComputedStyle(container).display == 'block') {
    container.style.display = "none";
  }
  // スタートボタンを表示
  if (getComputedStyle(startBtn).display == 'none') {
    startBtn.style.display = "inline-block";
  }
}


