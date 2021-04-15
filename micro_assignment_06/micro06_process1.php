<?php

//grab Username variable
$name= $_POST['username'];
$password= $_POST['password'];

if ($name=="pikachu" && $password=="pokemon"){
// if ($name=="pikachu" && $password=="pokemon"){
  header('Location: micro06.php?y=success');
  exit();;
}
else if (!$name){
  print "no name";
  header('Location: micro06.php?x=name');
  exit();
  }

  else if (!$password){
    print "no password";
    header('Location: micro06.php?z=password');
    exit();
    }
    else if ($name&&$password){
      print "no noun";
      header('Location: micro06.php?g=incorrect');
      exit();
      }
  else{
    header('Location: micro06.php?error=empty');
    exit();
    // print "???";
  }
//   if ($password){
// if ($password=="pokemon"){
//   print "welcome";
//   }
// else{
//   print "wrong";
//   header('Location: micro06.php?y=incorrect');
//   exit();
//   }
// }
//   else{
//     header('Location: micro06.php?z=empty');
//     exit();
//     // print "???";
//   }
 ?>
