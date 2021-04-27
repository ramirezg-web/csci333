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
            print "<p> <a href=\"admin_report2.php\">Admin Report</a></p>";

            $hometext=file_get_contents($file_path.'/home.txt');
            $policiestext=file_get_contents($file_path.'/policies.txt');
            $abouttext=file_get_contents($file_path.'/about.txt');
            $alerttext=file_get_contents($file_path.'/alert.txt');
            $file=$file_path.'/adminlog.txt';


            ?>
            <form method="post" action="savetext.php">
              Homepage Text:
              <textarea name="homepage"> <?php print $hometext;
?> </textarea>
              <input type="submit">
            </form>

            <form method="post" action="savealert.php">
              Alert Text:
              <textarea name="alertpage"> <?php print $alerttext;
?> </textarea>
              <input type="submit">
            </form>

            <form method="post" action="saveabout.php">
              About Text:
              <textarea name="aboutpage"> <?php print $abouttext;
 ?> </textarea>
              <input type="submit">
            </form>

            <form method="post" action="savepolicies.php">
              Policies Text:
              <textarea name="policiespage"> <?php print $policiestext;
?> </textarea>
              <input type="submit">

            </form>





            <?php
            // $username=$_COOKIE['username'];
            // $file=$file_path.'/adminlog.txt';
            // $time = time();
            // //function date()
            //     $edit= "Edit";
            // //destroy cookies and send to admin forms
            // file_put_contents($file, $time.' '.$username.' '.$edit."\n", FILE_APPEND);

          }

          else{


           ?>
          <form method="post" action ="login.php">
            Username:
            <input type="text" name="username"> <br>
            Password:
            <input type="text" name="password">
            <input type="submit">
          </form>
          <?php
}
           ?>
        </div>
      </div>
    </div>
  </body>
</html>
