
<!doctype html>
<html>

  <head>
    <title>Assignment 07</title>
    <style>
    h1{
      border: 1px;
      font-size: 60px;
      text-align: center;
      color: #FFCC00;
      padding: 10px;
    }
    button{
      display: block;
      margin-left: auto;
      margin-right: auto;
      border: 15px black;
      padding: 10px;
      color: green;
    }
    div{
      border:none;
      background-color: pink;
      border:5px black;
      margin-left: auto;
      font-size: 20px;

    }

    </style>
  </head>

  <body>
    <h1>Simpsons Quiz</h1>
    <hr>
    <?php
$tryagain=$_GET['tryagain'];
  if ($tryagain){
    setcookie('winner','');
  }

if ($_GET['z']=="error"){
  print "<strong> Please Answer All Questions!  </strong>";
}


   // if ($_COOKIE['winner']){
   // $prior=$_COOKIE['winner'];
   //
   // if ($prior){
   //   if ($prior =="homer");
   //   $img = 'assignment07_images/Homer.png';
   //   print "<img src=\"$img\">";
   //   print "<p> You are ".$prior."!</p>";
   //   setcookie('winner','');
   // }
   // else if ($prior=="marge"){
   //   $img = 'assignment07_images/Marge.png';
   //   print "<img src=\"$img\">";
   //   print "<p> You are ".$prior."!</p>";
   //   setcookie('winner','');
   //
   //
   // }
   // else if ($prior=="bart"){
   //   $img = 'assignment07_images/Bart.png';
   //   print "<img src=\"$img\">";
   //   print "<p> You are ".$prior."!</p>";
   //   setcookie('winner','');
   //
   //
   // }
   // else if ($prior=="lisa"){
   //   $img = 'assignment07_images/Lisa.png';
   //   print "<img src=\"$img\">";
   //   print "<p> You are ".$prior."!</p>";
   //   setcookie('winner','');
   //
   //
   // }
   // }
   // else{
     ?>


<!-- //    if ($_GET['login']=="error"){ -->

     <!-- <strong id='error'> Please answer all the questions!</strong>
       } -->


    <form action="processresults.php" method="GET">
      <div>
        What is your ideal job?
        <select name="job">
          <option value="empty">Select a Job</option>
          <option value="homer">Working at a bakery</option>
          <option value="marge">Web Design</option>
          <option value="bart"> Writer</option>
          <option value="lisa">Teacher</option>
        </select>
      </div>
      <div>
        What is your favorite food?
        <select name="food">
          <option value="empty">Select a food</option>
          <option value="homer">Donuts</option>
          <option value="marge">Apple Pie</option>
          <option value="bart">Krusty Flakes</option>
          <option value="lisa">Anything organic and locally sourced</option>
        </select>
      </div>
      <div>
        What is your favorite hobby?
          <select name="hobby">
          <option value="empty">Select a Hobby</option>
          <option value="homer">Running</option>
          <option value="marge">Painting</option>
          <option value="bart">Knitting</option>
          <option value="lisa">Reading</option>
        </select>
      </div>
      <div>
        What is your biggest fear?
                <select name="fear">
          <option value="empty">Select a Fear</option>
          <option value="homer">Heights</option>
          <option value="marge">Bugs</option>
          <option value="bart">Drowning</option>
          <option value="lisa"> The dark</option>
        </select>
      </div>

      <button>What character am I?</button>

    </form>


    <div class="results">
    		<a href="results.php">See Aggregate Results</a>
    		</div>
  </body>

</html>
