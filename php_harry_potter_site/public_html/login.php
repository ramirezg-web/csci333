<?php
include('config.php');

//grab username and Password
$username=$_POST['username'];
$password=$_POST['password'];
// make sure it entered something into forms
if ($username && $password){
  //access teacheraccounts.txtt text file
  // include('config.php');
  $data=file_get_contents($file_path.'/teacheraccounts.txt');
  // print $data;
//check to make sure the username and password are correctcc
  $x=explode("\n", $data);

  for ($i=0; $i<sizeof($x); $i++ ){
    $credentials=explode(",", $x[$i]);

    if ($username==$credentials[0]&& $password==$credentials[1]){
      // print "yay";
      //drop a cookie on the client computer
      // break();
      setcookie('loggedin','yes');
      setcookie('username',$credentials[0]);
      setcookie('firstname', $credentials[2]);
      setcookie('lastname',$credentials[3]);
      $file=$file_path.'/adminlog.txt';
      // $file=getcwd().'../data/adminlog.txt';

  $time = time();
  //function date()
      $yes= "LogIn";
      console.log($time);
      setcookie('time', $time);

      file_put_contents($file, $time.' '.$credentials[0].' '.$yes."\n", FILE_APPEND);

      //send back to the form;
      header('Location:admin.php?loggedin');
      exit();
    }
      }
    // else{
    //   //send back to the form
      header('Location:admin.php?error=incorrect');
      exit();
    // }




}
else{

  header('Location:admin.php?error=missinginfo');
  exit();
}
 ?>
