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
          <li><a href="index.php" class="navlink">Home</a></li>
          <li><a href="about.php" class="navlink">About</a></li>
          <li><a href="policies.php" class="navlink">Policies</a></li>
          <li><a href="admin.php" class="navlink active">Admin</a></li>
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
          //check the cookie, are they logged in
          if ($_COOKIE['loggedin']=='yes'){
            print "<p> Welcome ".$_COOKIE['firstname']." ".
            $_COOKIE['lastname']."</p>";
            print "<p> <a href=\"logout.php\">Logout</a></p>";
            print "<p> <a href=\"admin.php\">Admin </a></p>";

            // $hometext=file_get_contents($file_path.'/home.txt');
            // $policiestext=file_get_contents($file_path.'/policies.txt');
            // $abouttext=file_get_contents($file_path.'/about.txt');
            // $alerttext=file_get_contents($file_path.'/alert.txt');
            // $file=$file_path.'/adminlog.txt';
            // $a="Edit to Home";
            // $b="Edit to Alert";
            // $c="Edit to Policy";
            // $d="Edit to About";

            ?>





            <?php
            $logged=trim(file_get_contents($file_path.'/adminlog.txt'));
            // print $logged;
          //check to make sure the username and password are correctcc
            $info=explode("\n", $logged);
            // print_r ($info);
            // for ($i=0; $i<sizeof($info); $i++ ){
            //   // print $info[$i];
            //   $present=explode(",", $info[$i]);
            //     }
            //
            //   print $present[$i];
              // print "<table>$present[$i]<table>";
?>
              <table style="width:100%">
                <tr>
                  <th>Time </th>
                  <th>Username </th>
                  <th>Action</th>
                </tr>
                <!-- <tr> -->
                  <?php
                  for ($i=0; $i<sizeof($info); $i++ ){
                      // print $info[$i];
                      $present=explode(" ", $info[$i]);
                      $t=date('Y-m-d H:i:s', $present[0]);

                      print "<tr>";
                      print "<td>$t</td>";
                      print "<td>$present[1]</td>";
                      print "<td>$present[2]</td>";
                      print "</tr>";

                    }
                    // date('Y-m-d H:i:s', $present[0])
                   ?>



              </table>
          <?php
        }

          else{


            header('Location:admin.php?error=incorrect');
            exit();
}
           ?>
        </div>
      </div>
    </div>
  </body>
</html>
