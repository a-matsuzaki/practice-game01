// スタートボタン
const startBtn = document.querySelector("#startBtn");
// コンテンツ全体
const container = document.querySelector("#container");
// マス目(配列が入る)
const blockes = document.querySelectorAll(".block");
// プレイヤー
const player = document.querySelector("#player");
// 日時
const datetime = document.querySelector("#datetime");
// 可変テキスト
const text = document.querySelector("#text");
// 結果
const result = document.querySelector("#result");
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
  // 全てのマスにクリックされた場合の挙動を設定
  blockes.forEach(function (block) {
    block.addEventListener("click", blockClicked)
  });
  // スタートボタンの挙動を設置
  startBtn.addEventListener("click", startGame);
  // リスタートボタンの挙動を設置
  restartBtn.addEventListener("click", restartGame);
  // テキストに初期プレイヤーを表示
  player.textContent = `${currentPlayer}`;
  // テキストを表示
  text.textContent = `のターン`;
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

// マスの中身を更新する関数（O,Xを設定する）
function updateBlock(block, index) {
  // 配列にcurrentPlayerを代入
  options[index] = currentPlayer;
  // HTMLのテキストの内容としてcurrentPlayerを入れる（OかXか）
  block.textContent = currentPlayer;
}

// プレイヤーの交代をする関数
function changePlayer() {
  // OだったらXに、OでなければOにして代入
  currentPlayer = (currentPlayer == "O") ? "X" : "O";
  // プレイヤーを表示
  player.textContent = `${currentPlayer}`;
  // テキスト部分の表示
  text.textContent = `のターン`;
}

// 勝利条件を満たしたかどうかチェックする関数
function checkConditions() {
  // 初期値は勝利条件を満たしていない
  let win = false;
  // 各勝利条件の配列に何が入っているかを定数に代入
  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const blockA = options[condition[0]];
    const blockB = options[condition[1]];
    const blockC = options[condition[2]];

    //AかBかCが空の場合はループ続行
    if (blockA == "" || blockB == "" || blockC == "") {
      continue;
    }
    //AとBとCの全てが同じプレイヤーの場合は勝利条件を満たしているのでループ終了
    if (blockA == blockB && blockB == blockC) {
      win = true;
      break;
    }
  }

  // 勝利条件を満たしている場合
  if (win) {
    // 勝者を表示
    player.textContent = `${currentPlayer}`;
    // 「勝ち」を表示
    text.textContent = `の勝ち！`;
    // 結果をフォームに送信
    result.value = currentPlayer;
    // ゲームを終了
    running = false;
  }
  // 勝利条件を満たしていない場合で、全てのマスが埋まっている場合
  else if (!options.includes("")) {
    // 引き分けなのでプレイヤーは空
    player.textContent = ``;
    // 引き分けを表示
    text.textContent = `引き分け`;
    // 結果をフォームに送信
    result.value = '引き分け';
    // ゲームを終了
    running = false;
  }
  // それ以外の場合
  else {
    // プレイヤーを交代
    changePlayer();
  }
}

// スタートの関数
function startGame() {
  // ゲーム画面を表示
  if (getComputedStyle(container).display == 'none') {
    container.style.display = "block";
  }
  // スタートボタンを非表示
  if (getComputedStyle(startBtn).display == 'inline-block') {
    startBtn.style.display = "none";
  };
}

// リスタートの関数
function restartGame() {
  if (!running) {
    // 日付オブジェクトの作成
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    let now = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    datetime.value = now;
  }
  // プレイヤーを初期値に設定
  currentPlayer = "O";
  // マスの中身を空にする
  options = ["", "", "", "", "", "", "", "", ""];
  // テキストに初期プレイヤーを表示
  player.textContent = `${currentPlayer}`;
  // テキストに初期プレイヤーを表示
  text.textContent = `のターン`;
  // マスの表示を空にする
  blockes.forEach(function (block) {
    block.textContent = ""
  });
  // ゲームは実行中にする
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


