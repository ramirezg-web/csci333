<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Log</title>
    <style>
			body {
				font-family: 'Roboto';
				font-size: 22px;
			}

			.container {
			  border-radius: 5px;
			  background-color: #f2f2f2;
			  padding: 20px;
			  width: 50%;
			  margin: auto;
			}

			/* .results {
			  width: 50%;
			  margin: auto;
			  text-align: left;
			} */

			strong {
				color: red;
			}

			h1 {
				text-align: center;
			}
      #lisa{
        background-color: #5CCfff;
      }
      #homer{
        background-color: #55cccc;
      }
      #marge{
        background-color: #00ff00;
      }
      #bart{
        background-color: #ff00ff;
      }

		</style>
  </head>
  <body>
    <h1>Log!</h1>

    <?php

    //when user views previous stories, erase cookie so they
    //can start again
    setcookie('winner','');
  //path
  $file=getcwd().'/data/result.txt';

  //get data from file
$alldata= file_get_contents($file);

//isolate each Story

$lines=explode("\n", $alldata);
$a=0;
$b=0;
$c=0;
$d=0;

// $result= $lines[$i]."<br>";
// if ($result=="homer"){
//   // $a +=1;
//   print $a;
// }
  //out to user
  foreach ($lines as $value){
    // print $e;

   // ($i=0; $i<sizeof($lines); $i++)

      // print $lines[$i]."<br>";
      // $result= $lines[$i];
      // print $result;
      if ($value=="homer"){
        $a +=1;
        // print $value;
        // print $a."\n";
      }
      else if ($value=="marge"){
        $b +=1;
        // print $b."\n";
      }
      else if ($value=="bart"){
        $c +=1;
        // print $c."\n";
      }
      else {
        $d +=1;
        // print $d."\n";
      }

      //counters for results //have total
      //get fraction to get percentage over total
      //use css width =$bart div=bart percentage //round percentages to whole number
      //use a class div has a class, and class has a border, a height, margins etc
      //php print statement entire div tag with inline css to add widith that corresponds to percentage
      //print as a string and div with closing tag and concatinate variable with $bart percentage and continue with rest of the string
      //browser reads as HTMl
      $total = $a+$b+$c+$d ;

  }
  // $total = $a+$b+$c+$d ;

  $aa= round(($a/$total)*100);
  $bb= round(($b/$total)*100);
  $cc= round(($c/$total)*100);
  $dd= round(($d/$total)*100);


print "<h3> In total there have been ".$total." quiz submissions </h3>";
print "<div id='homer' style='width: ".$aa."%;' class='results'>Homer $aa%</div>";
print "<div id='marge' style='width: ".$bb."%;' class='results'>Marge $bb%</div>";
print "<div id='bart' style='width: ".$cc."%;' class='results'>Bart $cc%</div>";
print "<div id='lisa' style='width: ".$dd."%;' class='results'>Lisa $dd%</div>";

// print <a href
     ?>
     <form action="macro07.php" method="GET">
     <input id="button" type="submit" name="tryagain" value="Back to Quiz" >
     </form>

  </body>
</html>
