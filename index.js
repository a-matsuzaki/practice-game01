// スタートボタン
const startBtn = document.querySelector("#startBtn");
// コンテンツ全体
const container = document.querySelector("#container");
// マス目(配列が入る)
const blockes = document.querySelectorAll(".block");
// テキスト
const text = document.querySelector("#text");
// リスタートボタン
const restartBtn = document.querySelector("#restartBtn");
// 勝利条件
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// マスの初期値は空
let options = ["", "", "", "", "", "", "", "", ""];
// 現在のプレイヤーの初期値
let currentPlayer = "O";
// ゲームが実行中かどうか
let running = false;

// ゲーム初期化
initializeGame();

// ゲームを初期化する関数
function initializeGame() {
  // 全てのマスにクリックされた場合のコールバック関数を設定
  blockes.forEach(function (block) {
    block.addEventListener("click", blockClicked)
  });
  // リスタートボタンがクリックされる
  restartBtn.addEventListener("click", restartGame);
  // テキストに初期プレイヤーを表示
  text.textContent = `${currentPlayer}のターン`;
  // ゲームを実行中に変更
  running = true;
}

// クリックされた場合の関数
function blockClicked(e) {
  // クリックされたマスのidを取得
  const id = e.target.id;
  // マスが空ではないか、ゲームが実行されていなければ何もしない
  if (options[id] != "" || !running) {
    return;
  }
  // マスの内容を更新する
  // thisには<div id=""~></div>が入る
  updateBlock(this, id);
  // 勝敗の判定をする
  checkConditions();
}

// マスの中身を更新
function updateBlock(block, index) {
  // 配列にcurrentPlayerを代入
  options[index] = currentPlayer;
  // HTMLのテキストの内容としてcurrentPlayerを入れる（OかXか）
  block.textContent = currentPlayer;
}

// プレイヤーの交代
function changePlayer() {
  // OだったらXに、OでなければOに変更
  currentPlayer = (currentPlayer == "O") ? "X" : "O";
  // テキスト部分の表示
  text.textContent = `${currentPlayer}のターン`;
}

// 勝利条件を満たしたかどうかチェック
function checkConditions() {
  // 初期値は勝利条件を満たしていない
  let win = false;
  // 各勝利条件の配列に何が入っているかを定数に代入
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const blockA = options[condition[0]];
    const blockB = options[condition[1]];
    const blockC = options[condition[2]];

    //AかBかCが空の場合は続行
    if (blockA == "" || blockB == "" || blockC == "") {
      continue;
    }
    //AとBとCの全てが同じプレイヤーの場合は勝利条件を満たしているので終了
    if (blockA == blockB && blockB == blockC) {
      win = true;
      break;
    }
  }

  // 勝利条件を満たしている場合
  if (win) {
    // 勝者を表示
    text.textContent = `${currentPlayer} の勝ち！`;
    // ゲームを終了
    running = false;
  }
  // 勝利条件を満たしていない場合で、全てのマスが埋まっている場合
  else if (!options.includes("")) {
    // 引き分けを表示
    text.textContent = `引き分け`;
    // ゲームを終了
    running = false;
  }
  // それ以外の場合
  else {
    // プレイヤーを交代
    changePlayer();
  }
}

// リスタート
function restartGame() {
  // プレイヤーを初期値に設定
  currentPlayer = "O";
  // マスの中身を空にする
  options = ["", "", "", "", "", "", "", "", ""];
  // テキストに初期プレイヤーを表示
  text.textContent = `${currentPlayer}のターン`;
  // マスの表示を空にする
  blockes.forEach(function (block) {
    block.textContent = ""
  });
  // ゲームは実行中に
  running = true;
  // ゲーム画面を非表示
  if (getComputedStyle(container).display == 'block') {
    container.style.display = "none";
  }
  // スタートボタンを表示
  if (getComputedStyle(startBtn).display == 'none') {
    startBtn.style.display = "inline-block";
  }
}
// スタートボタンを押したときの挙動
startBtn.addEventListener("click", function () {
  // ゲーム画面を表示
  if (getComputedStyle(container).display == 'none') {
    container.style.display = "block";
  }
  // スタートボタンを非表示
  if (getComputedStyle(startBtn).display == 'inline-block') {
    startBtn.style.display = "none";
  }
});

