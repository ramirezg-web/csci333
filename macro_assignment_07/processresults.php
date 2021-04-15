
<?php

  // grab the incoming data from the form
  $food = $_GET['food'];
  $job = $_GET['job'];
  $fear = $_GET['fear'];
  $hobby = $_GET['hobby'];


  // compute who earned the most points
  $homer = 0;
  $marge = 0;
  $bart  = 0;
  $lisa  = 0;
  if ($food !=="empty"){
  if ($food == "homer") {
    $homer += 1;
  }
  else if ($food == "marge") {
    $marge += 1;
  }
  else if ($food == "bart") {
    $bart += 1;
  }
  else {
    $lisa += 1;
  }
}
if ($job !=="empty"){
  if ($job == "homer") {
    $homer += 1;
  }
  else if ($job == "marge") {
    $marge += 1;
  }
  else if ($job == "bart") {
    $bart += 1;
  }
  else {
    $lisa += 1;
  }
}
  if ($hobby !=="empty"){
  if ($hobby == "homer") {
    $homer += 1;
  }
  else if ($hobby == "marge") {
    $marge += 1;
  }
  else if ($hobby == "bart") {
    $bart += 1;
  }
  else {
    $lisa += 1;
  }
}
  if ($fear !=="empty"){
  if ($fear == "homer") {
    $homer += 1;
  }
  else if ($fear == "marge") {
    $marge += 1;
  }
  else if ($fear == "bart") {
    $bart += 1;
  }
  else {
    $lisa += 1;
  }
}
if ($food =="empty" || $fear == "empty" || $job == "empty" || $hobby=="empty"){
  header('Location: macro07.php?z=error');
  exit();

}
    $path='/web/sgr342/webdev/macro_assignment_07/data';
    // $path='/Users/gentleramirez/Documents/MAMP/webdev/macro_assignment_07/data';
    $filename=$path.'/result.txt';


    if ($homer > $marge && $homer > $bart && $homer > $lisa) {
      $img = 'assignment07_images/Homer.png';
      // $path='/Users/gentleramirez/Documents/MAMP/webdev/macro_assignment_07/data';
      // $filename=$path.'/result.txt';
      $winner="homer";
      file_put_contents($filename, $winner."\n", FILE_APPEND);
      setcookie('winner','homer');
      // header('location:macro07.php');
      // exit();

    }
    else if ($marge > $homer && $marge > $bart && $marge > $list) {
      $img = 'assignment07_images/Marge.png';
      $winner="marge";
      file_put_contents($filename, $winner."\n", FILE_APPEND);
      setcookie('winner','marge');
      // header('location:macro07.php');
      // exit();
    }
    else if ($bart > $homer && $bart > $marge && $bart > $list) {
      $img = 'assignment07_images/Bart.png';
      $winner="bart";
      file_put_contents($filename, $winner."\n", FILE_APPEND);
      setcookie('winner','bart');
      // header('location:macro07.php');
      // exit();
    }
    else {
      $img = 'assignment07_images/Lisa.png';
      $winner="lisa";
      file_put_contents($filename, $winner."\n", FILE_APPEND);
      setcookie('winner','lisa');
      // header('location:macro07.php?');
      // exit();
    }
//inline css
    print "<img style=\"display:block;       margin-right: auto;
          margin-left: auto; background:green;\"
src=\"$img\">";
    print "<p style=\"text-align:center; font-size:30px;\"> You are ".$winner."!</p>";

    // print $homer;
    // print $marge;
    // print $bart;
    // print $lisa;
  ?>
  <style media="screen">
    background{
      color:green;
      text-align: center;
      align-items: center;
    }
    #button{
      display: block;
      margin-right: auto;
      margin-left: auto;
      text-align: center;
      border: 5px black;
      padding: 10px;
      color: green;


    }
  </style>
    <form action="macro07.php" method="GET">
    <input id="button" type="submit" name="tryagain" value="TryAgain" >
    </form>
  <?php
  print "    <a style=\"display:block; text-align:center; font-size:30px; margin-right: auto;
        margin-left: auto; background:green;\"href=\"results.php\">See Results</a>
"
   ?>
