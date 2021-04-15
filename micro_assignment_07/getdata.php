<<?php

include('configue.php');

//open user name text

$alldata= trim(file_get_contents($filename));

//cut apart all chunkcs

$allnames=explode('\n', $alldata);

print "<ul>";
for ($i=0; $i<sizeof($allnames); $i++){
  print "<li>".$allnames[$i]."</li>\n";
}
print "</ul>";
 ?>
