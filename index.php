<?php
session_start();
require('library.php');

$db = dbconnect();

?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>◯×ゲーム</title>
  <link rel="stylesheet" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Finger+Paint&display=swap">
</head>

<body>
  <div id="wrapper">
    <p class="text">3つ並べたら勝ち</p>
    <h1 class="title">OX Game</h1>
    <button id="startBtn">Start</button>
    <div id="container">
      <div id="board">
        <div id="0" class="block"></div>
        <div id="1" class="block"></div>
        <div id="2" class="block"></div>
        <div id="3" class="block"></div>
        <div id="4" class="block"></div>
        <div id="5" class="block"></div>
        <div id="6" class="block"></div>
        <div id="7" class="block"></div>
        <div id="8" class="block"></div>
      </div>
      <h2 id="text"></h2>
      <button id="restartBtn">Restart</button>
    </div>
  </div>
  <script src="index.js"></script>
</body>


</html>
