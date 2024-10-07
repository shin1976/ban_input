<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once './function.php';
header("Access-Control-Allow-Origin: https://yutatomo.sakura.ne.jp");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
// header('Content-Type: application/json');
$db = new PDO('sqlite:answerData.db');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


$time_rank_data = getData($db);

// $value = null;
if($db) {
if($_SERVER["REQUEST_METHOD"]==='POST'){
    $value = filter_input(INPUT_POST, 'value', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    data_insert ($db, $name,$value);
    
}
$action = filter_input(INPUT_GET,'action');
    if($action === 'data_delete') {
      delete_data($db);
    }
    if($action === 'data_get') {
      getData($db);

    }
}
?>
 <!doctype html>
<html lang="ja">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>目隠し詰将棋結果</title>
  </head>
  <body>
          <table class="table table-success table-striped">
                  <thead>
                      <tr>
                          <th scope="col">順位</th>
                          <th scope="col">名前</th>
                          <th scope="col">答え</th>
                          <th scope="col">時間</th>
                      </tr>
                  </thead>
                  <tbody>
          <?php foreach($time_rank_data as $time): ?>


                      <tr>
                      <th scope="row"><?= h($time[0])."位"; ?></th>
                      <td><?= h($time[1]); ?></td>
                      <td><?= h($time[3]); ?></td>
                      <td><?= h($time[2]); ?></td>
                      </tr>


          <?php endforeach; ?>
          </tbody>
              </table>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      <form action="?action=data_get" method="get">

      <button type="submit" id="get_btn">再読み込み</button>
      </form>
      <form action="?action=data_delete" method="post">

      <button type="submit" id="delete_btn">削除</button>
      </form>
  </body>
  
</html>