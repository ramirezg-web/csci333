<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Micro 07</title>
  </head>


  <body>
      <h1>Micro 07</h1>

    <?php
    if ($_GET['error']){
      print "<strong> Please enter username and password </strong>";
    }
    else if ($_GET['x']=='failed'){ ?>
      <div> Login failed </div>
      <?php
      print "<strong> Incorrect Username and Password Combo </strong>";
    }

    else if ($_GET['y']){
      print "<strong> Successfully Logged in  </strong>";
    }
    else if ($_GET['z']){
      print "<strong> Please Enter a Password </strong>";
    }
    else if ($_GET['a']){
      print "<strong> Please Enter a Username  </strong>";
    }

     ?>
    <form class="" action="micro07_process.php" method="POST">
    Username: = <input type="text" name="username" id="username" value="">
    Password: = <input type="text" name="password" id="password" value="">

    <input type="submit" name="" value="Submit">
    </form>

    <a href="log.php">click here</a>


  </body>
</html>
