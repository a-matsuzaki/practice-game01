<?php
/* DBへの接続 */
function dbconnect() {
    //mysqliクラス - PHPとMySQLデータベースの間の接続
    //new - mysqliというインスタンスの作成
    $db = new mysqli('localhost', 'root', 'root', 'practice-game01');
    if (!$db) {
		die($db->error);
	}

    return $db;
}
?>
