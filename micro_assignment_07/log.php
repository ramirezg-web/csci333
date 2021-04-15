<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Log</title>
  </head>
  <body>
    <h1>Log!</h1>

    <?php

    //when user views previous stories, erase cookie so they
    //can start again
    setcookie('loggedin','');
  //path
  $file=getcwd().'/data/logged2.txt';

  //get data from file
$alldata= file_get_contents($file);

//isolate each Story

$lines=explode("\n", $alldata);


  //out to user
  for ($i=0; $i<sizeof($lines); $i++){
      print $lines[$i]."<br>";

  }
  // print $alldata;
     ?>

  </body>
</html>
