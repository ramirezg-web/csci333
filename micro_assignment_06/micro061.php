<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Micro 06</title>
  </head>
  <body>

    <?php
    if ($_GET['error']){
      print "<strong> Please enter username and password </strong>";
    }
    else if ($_GET['x']){
      print "<strong> No Usermane </strong>";
    }
    else if ($_GET['y']){
      print "<strong> Successfully Logged in  </strong>";
    }
    else if ($_GET['g']){
      print "<strong> incorrect username and password </strong>";
    }
    else if ($_GET['z'] && $_GET['error']){
      print "<strong> Please Enter a Username and Password </strong>";
    }

     ?>
    <form class="" action="micro06_process.php" method="POST">
    Username: =<input type="text" name="username" value="">
    Password: =<input type="text" name="password" value="">

    <input type="submit" name="" value="">
    </form>

  </body>
</html>
