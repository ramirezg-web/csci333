<?php

//grab Username variable
$name= $_POST['username'];
$password= $_POST['password'];
//store for later use
$path='/web/sgr342/webdev/micro_assignment_07/data';
// $path='/Users/gentleramirez/Documents/MAMP/webdev/micro_assignment_07/data';
// /Users/gentleramirez/Documents/MAMP/webdev/micro_assignment_07/data
//set up file name of destination file to store
$filename=$path.'/logged.txt';
//put data in file

// file_put_contents($filename, $name."\n", FILE_APPEND);

//tell user we done
// print "all done";

  if ($name =="pikachu" && $password =="pokemon"){
    // $path='/Users/gentleramirez/Documents/MAMP/webdev/micro_assignment_07/data';
    // $filename=$path.'/logged.txt';
    // $path='/Users/gentleramirez/Documents/MAMP/webdev/micro_assignment_07/data';
    // /Users/gentleramirez/Documents/MAMP/webdev/micro_assignment_07/data
    //set up file name of destination file to store
    $filename=$path.'/logged2.txt';
    //put data in file
    $yes= "successful";

    file_put_contents($filename, $yes."\n", FILE_APPEND);

    // $path= getcwd(). '/data';
    // file_put_contents($path."/logged.txt", $yes."\n", FILE_APPEND);
    // print $yes;
    setcookie('loggedin','yes');
    print "all done";

    header('Location: micro07.php?y=success');
    exit();
}

else if (!$name){
  $filename=$path.'/logged2.txt';
  //put data in file
  $no= "missing username";

  file_put_contents($filename, $no."\n", FILE_APPEND);

  // $path= getcwd(). '/data';
  // file_put_contents($path."/logged.txt", $yes."\n", FILE_APPEND);
  // print $yes;
  setcookie('loggedin','no');
  header('Location: micro07.php?a=error');
  exit();
}
else if (!$password){
  $filename=$path.'/logged2.txt';
  //put data in file
  $no= "missing password";

  file_put_contents($filename, $no."\n", FILE_APPEND);

  // $path= getcwd(). '/data';
  // file_put_contents($path."/logged.txt", $yes."\n", FILE_APPEND);
  // print $yes;
  setcookie('loggedin','no');
  header('Location: micro07.php?z=error');
  exit();
}
else{
  $filename=$path.'/logged2.txt';
  //put data in file
  $no= "unsuccessful";

  file_put_contents($filename, $no."\n", FILE_APPEND);

  // $path= getcwd(). '/data';
  // file_put_contents($path."/logged.txt", $yes."\n", FILE_APPEND);
  // print $yes;
  setcookie('loggedin','no');
  header('Location: micro07.php?x=failed');
  exit();
}
//   $path= getcwd(). '/data';
//   $no= "unsuccessful";
//   file_put_contents($path."/logged.txt", $no, FILE_APPEND);
//   print $no;
//
//   print "wrong";
//   setcookie('loggedin','no');
//   header('Location: micro07.php?login=failed');
//   exit();
//   }
//
//   else{
//     $path= getcwd(). '/data';
//     $missing= "missing";
//     file_put_contents($path."/logged.txt", $missing, FILE_APPEND);
//     print $missing;
//     setcookie('loggedin','missing');
//     header('Location: micro07.php?error=empty');
//     exit();
//   }
//

 ?>
