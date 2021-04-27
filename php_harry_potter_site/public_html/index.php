<?php
  // before we load the page we need to load in our 'config.php' file
  // this file contains PHP variables that our page will need to access,
  // such as the file path of the 'data' folder
  include('config.php');
?>
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <title>Hogwarts School Management System</title>
    <link type="text/css" href="styles.css" rel="stylesheet" />
  </head>
  <body>
    <div id="container">
      <div id="leftcolumn">
        <img src="images/hogwarts_logo.png">
        <ul>
          <li><a href="index.php" class="navlink active">Home</a></li>
          <li><a href="about.php" class="navlink">About</a></li>
          <li><a href="policies.php" class="navlink">Policies</a></li>
          <li><a href="admin.php" class="navlink">Admin</a></li>
        </ul>
      </div>
      <div id="rightcolumn">
        <div id="header">
          Welcome to Hogwarts
        </div>
        <?php
        //open alert.txt
        $data= file_get_contents($file_path.'/alert.txt');
        if (strlen($data)>0){
          print "<div id='alert'>$data</div>";
        }

        //if it has content generate a alert box
         ?>
        <div id="content">
          <?php
          include($file_path."/home.txt");
           ?>

        </div>
      </div>
    </div>
  </body>
</html>
