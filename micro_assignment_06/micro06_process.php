<?php

//grab Username variable
$name= $_POST['username'];
$password= $_POST['password'];

  if ($name && $password){
if ($name=="pikachu" && $password=="pokemon"){
  header('Location: micro06.php?y=success');
  exit();;
  }
else{
  print "wrong";
  header('Location: micro06.php?x=incorrect');
  exit();
  }
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
