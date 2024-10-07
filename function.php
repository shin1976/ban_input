<?php

function v($dump)
{
  echo '<pre>';
  var_dump($dump);
  echo '</pre>';
}

function getData($db)
{
  $stmt = $db->query("SELECT * FROM answerData");
  $time_rank_data = $stmt->fetchAll();
  return $time_rank_data;
}

function data_insert($pdo, $user_name, $sasiste)
{
  global $db;
  $time_data_second = date('h時i分s秒');
  try {
    $stmt = $pdo->prepare(
      "INSERT into
      answerData ( name,time,answer)
      values (?,?,?)"
    );
    $stmt->execute(array($user_name, $time_data_second, $sasiste));
    // print 'data inserted';
    return true;
  } catch (PDOException $e) {
    throw $e;
    //print "Could't add database";
  }
}

//htmlspecialcharsを関数化
function h($output)
{
  return htmlspecialchars($output ?? '', ENT_QUOTES, 'UTF-8');
}

function delete_data($db)
{
  // $time_rank_data='';
  try {
    $stmt = $db->prepare(
      "Delete from
    answerData"
    );
    $stmt->execute();
    // $time_rank_data = $stmt->fetchAll();
    // return $time_rank_data;
  } catch (PDOException $e) {
    throw $e;
    //print "Could't add database";
  }
}
