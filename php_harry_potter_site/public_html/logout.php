<?php
include('config.php');
$username=$_COOKIE['username'];
$file=$file_path.'/adminlog.txt';
$time = time();
//function date()
    $loggout= "LogOut";
//destroy cookies and send to admin forms
file_put_contents($file, $time.' '.$username.' '.$loggout."\n", FILE_APPEND);

// file_put_content($file."/adminlog.txt",TIME()." ".$username." "."\logout\n",FILE_APPEND);

setcookie('loggedin','', time()-3600);
setcookie('username','', time()-3600);
setcookie('firstname','', time()-3600);
setcookie('lastname','', time()-3600);
header('Location:admin.php?loggedout');
exit();

 ?>
