<?php
include ('config.php');
//security audit make sure user is logged in before making changes
if ($_COOKIE['loggedin']=='yes'){
  // $homepage=$_POST['homepage'];
  // file_put_contents($file_path.'/home.txt',$homepage);
  //
  // $policiespage=$_POST['policiespage'];
  // file_put_contents($file_path.'/home.txt',$homepage);
  $aboutpage=$_POST['aboutpage'];
  file_put_contents($file_path.'/about.txt',$aboutpage);
  $username=$_COOKIE['username'];
  $file=$file_path.'/adminlog.txt';
  $time = time();
  //function date()
      $edit= "Edit";
  //destroy cookies and send to admin forms
  file_put_contents($file, $time.' '.$username.' '.$edit."\n", FILE_APPEND);



  header('Location:admin.php?confirmation=savedtext');
  exit();


}
else{
  header('Location:admin.php?error=notloggedin');
  exit();
}
//if logged in make changes to text file



 ?>
