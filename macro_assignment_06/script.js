// isolate our DOM queries
let screen_start = document.querySelector('#screen_start');
let screen_game = document.querySelector('#screen_game');
let screen_gameover = document.querySelector('#screen_gameover');
let start = document.querySelector('#start');
let gameOverText = document.getElementById("gameOverContent");

//Modes
let easyMode = document.getElementById("easyMode");
let mediumMode = document.getElementById("mediumMode");
let hardMode = document.getElementById("hardMode");

let intro = document.getElementById("intro");
let chooseMode = document.getElementById("chooseMode");
let header = document.getElementById("header");
//buttons
let again = document.getElementById("again");
// let start = document.querySelector("#start");
let switchMode = document.getElementById("switchMode");
//game

let tokens = document.querySelector("#tokens");
//scores
let timeText = document.getElementById("timer");
let yourScore = document.getElementById("yourScore");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let score3 = document.getElementById("score3");
let ModeType = document.getElementById("ModeType");

//mode picked
let pickMode;
let pickModeNum;
window.localStorage.setItem("easyuser1", null);
window.localStorage.setItem("easyuser2", null);
window.localStorage.setItem("easyuser3", null);
window.localStorage.setItem("easybestTime", "999999999");
window.localStorage.setItem("easysecTime", "999999999");
window.localStorage.setItem("easythirdTime", "999999999");
//medium
window.localStorage.setItem("mediumuser1", null);
window.localStorage.setItem("mediumuser2", null);
window.localStorage.setItem("mediumuser3", null);
window.localStorage.setItem("mediumbestTime", "999999999");
window.localStorage.setItem("mediumsecTime", "999999999");
window.localStorage.setItem("mediumthirdTime", "999999999");
//hard
window.localStorage.setItem("harduser1", null);
window.localStorage.setItem("harduser2", null);
window.localStorage.setItem("harduser3", null);
window.localStorage.setItem("hardbestTime", "999999999");
window.localStorage.setItem("hardsecTime", "999999999");
window.localStorage.setItem("hardthirdTime", "999999999");
//highscores filled
let oneFilled = false;
let twoFilled = false;
let threeFilled = false;
//sound from JavaScript 30 Drum Kit
let correctSound = document.getElementById("correctSound");
let incorrectSound = document.getElementById("incorrectSound");
// array of all pokemon graphics
var assets = ['snorlax.png', 'electrabuzz.png', 'chansey.png', 'oddish.png',
        'pikachu.png', 'paras.png', 'arcanine.png', 'ponita.png',
        'venonat.png', 'eggsecute.png', 'machop.png', 'pidgey.png',
        'psyduck.png', 'tauros.png', 'vulpix.png', 'gloom.png',
        'krabby.png', 'butterfree.png', 'bulbasaur.png', 'clefairy.png',
        'koffing.png', 'goldeen.png', 'magikarp.png', 'beedrill.png',
        'lapras.png', 'meowth.png', 'ekans.png', 'jigglypuff.png',
        'horsea.png', 'polywog.png', 'sandshrew.png', 'rattata.png',
        'gengar.png', 'eevee.png', 'bellsprout.png', 'squirtle.png',
        'seel.png', 'caterpie.png']

// keep track of which elements were clicked
let token1 = false;
let token2 = false;
//don't click same one
let clickCounter = 0;
//matches
let matchCounter = 0;
again.addEventListener("click", function () {
  //remove game over screen and reset game
  screen_gameover.classList.add("hidden");
  screen_game.classList.remove("hidden");
  header.classList.remove("hidden");
  generateGame(pickMode, pickModeNum);
});

// start to show the game playing screen
start.addEventListener('click', function() {
  //show the modes
easyMode.classList.remove("hidden");
mediumMode.classList.remove("hidden");
hardMode.classList.remove("hidden");
chooseMode.classList.remove("hidden");
intro.classList.add("hidden");
start.classList.add("hidden");
});
switchMode.addEventListener("click", function () {
//take you to switch mode screen
header.classList.remove("hidden");
screen_start.classList.remove("hidden");
screen_game.classList.add("hidden");
screen_gameover.classList.add("hidden");
});
easyMode.addEventListener("click", function () {
//generate game in ez mode
screen_start.classList.add("hidden");

// show the playing screen
screen_game.classList.remove("hidden");

pickMode = "easy";
pickModeNum = 6;
generateGame(pickMode, pickModeNum);
});
mediumMode.addEventListener("click", function () {
//game in medium mode
screen_start.classList.add("hidden");

// show the playing screen
screen_game.classList.remove("hidden");
pickMode = "medium";
pickModeNum = 10;
generateGame(pickMode, pickModeNum);
});
hardMode.addEventListener("click", function () {
//hard mode
screen_start.classList.add("hidden");

// show the playing screen
pickMode = "hard";
pickModeNum = 15;
screen_game.classList.remove("hidden");
generateGame(pickMode, pickModeNum);
});


function reset() {
  // hide both tokens
  token1.src = 'assignment06_images/pokeball.png';
  token2.src = 'assignment06_images/pokeball.png';

  // flip the tokens back to false to reset for the next match
  token1 = false;
  token2 = false;
  clickCounter = 0;

}
let timer = 1;
function startTiming() {
console.log(timer);
timeText.innerHTML = `Time: ${timer} seconds`;
timer++;
}
//game logic and code - bit of a mess
function generateGame(modeNum, winCon) {
//inital array to hold pokemon later
let pickedPokemon = [];
let startTimer = setInterval(startTiming, 1000);
//differentiateMode
if (modeNum == "easy") {
ModeType.innerHTML = "Easy Mode";
for (let i = 0; i < 6; i++) {
let randomP = parseInt(Math.random() * assets.length);
pickedPokemon.push(assets[randomP]);
pickedPokemon.push(assets[randomP]);
assets.splice(randomP, 1);
}
} else if (modeNum == "medium") {
ModeType.innerHTML = "Medium Mode";
//change the width of the div
tokens.style.width = "500px";
tokens.style.height = "400px";
for (let i = 0; i < 10; i++) {
let randomP = parseInt(Math.random() * assets.length);
pickedPokemon.push(assets[randomP]);
pickedPokemon.push(assets[randomP]);
assets.splice(randomP, 1);
}
} else if (modeNum == "hard") {
ModeType.innerHTML = "Hard Mode";
tokens.style.width = "600px";
tokens.style.height = "500px";
for (let i = 0; i < 15; i++) {
let randomP = parseInt(Math.random() * assets.length);
pickedPokemon.push(assets[randomP]);
pickedPokemon.push(assets[randomP]);
assets.splice(randomP, 1);
}
}

// randomize the pokemon in our array
while (pickedPokemon.length > 0) {
let tempImage = document.createElement("img");
tempImage.src = "assignment06_images/pokeball.png";

let secretIndex = parseInt(Math.random() * pickedPokemon.length);
tempImage.dataset.secret = pickedPokemon[secretIndex];
pickedPokemon.splice(secretIndex, 1);

tokens.appendChild(tempImage);

tempImage.addEventListener("click", function (event) {
if (clickCounter < 2) {
  if (token1 == false) {
    // this becomes token1!
    token1 = event.currentTarget;

    // reveal our secret image
    event.currentTarget.src =
      "assignment06_images/" + event.currentTarget.dataset.secret;
    clickCounter++;
  }

  // if this is the SECOND one clicked, we need to evaluate
  else {
    // must be on token2
    token2 = event.currentTarget;
    if (token1 == token2) {

      token2 == false;
    } else {
      clickCounter++;
      event.currentTarget.src =
        "assignment06_images/" + event.currentTarget.dataset.secret;

      if (token1.dataset.secret == token2.dataset.secret) {
        //if match
        //reset audio and play it
        correctSound.currentTime = 0;
        correctSound.play();
        console.log("pair!");
        token1 = false;
        token2 = false;
        clickCounter = 0;
        matchCounter++;
        //win condition
        if (matchCounter == winCon) {
          clearInterval(startTimer);
          timer = timer - 1;
          //leaderboard function
          //needs to check for edge cases where there aren't any entries and to update the scores below it

          setTimeout(function () {
            screen_gameover.classList.remove("hidden");
            header.classList.add("hidden");
            screen_game.classList.add("hidden");
            setTimeout(function () {
              if (
                timer <
                parseInt(
                  window.localStorage.getItem(modeNum + "bestTime")
                )
              ) {
                //for best score

                if (!oneFilled && !twoFilled && !threeFilled) {
                  window.localStorage.setItem(
                    modeNum + "user1",
                    prompt(
                      "New High Score! What's your name?"
                    )
                  );
                  console.log("11");
                  window.localStorage.setItem(
                    modeNum + "bestTime",
                    timer
                  );
                  yourScore.innerHTML = `Your time: ${timer}`;
                  score1.innerHTML = `Best Time: ${window.localStorage.getItem(
                    modeNum + "bestTime"
                  )}(${window.localStorage.getItem(
                    modeNum + "user1"
                  )}) - New High Score!`;
                  oneFilled = true;
                } else if (!twoFilled && !threeFilled) {
                  console.log("12");
                  window.localStorage.setItem(
                    modeNum + "user2",
                    window.localStorage.getItem(modeNum + "user1")
                  );
                  window.localStorage.setItem(
                    modeNum + "user1",
                    prompt(
                      "New High Score! What's your name??"
                    )
                  );
                  window.localStorage.setItem(
                    modeNum + "secTime",
                    window.localStorage.getItem(modeNum + "bestTime")
                  );

                  window.localStorage.setItem(
                    modeNum + "bestTime",
                    timer
                  );
                  yourScore.innerHTML = `Your time: ${timer}`;
                  score1.innerHTML = `Best Time: ${window.localStorage.getItem(
                    modeNum + "bestTime"
                  )}(${window.localStorage.getItem(
                    modeNum + "user1"
                  )}) - New High Score!`;
                  score2.innerHTML = `2nd Place: ${window.localStorage.getItem(
                    modeNum + "secTime"
                  )}(${window.localStorage.getItem(modeNum + "user2")})`;
                  twoFilled = true;
                } else if (!threeFilled) {
                  console.log("13");
                  window.localStorage.setItem(
                    modeNum + "user3",
                    window.localStorage.getItem(modeNum + "user2")
                  );
                  window.localStorage.setItem(
                    modeNum + "user2",
                    window.localStorage.getItem(modeNum + "user1")
                  );
                  window.localStorage.setItem(
                    modeNum + "user1",
                    prompt(
                      "New High Score! What's your name??"
                    )
                  );
                  window.localStorage.setItem(
                    modeNum + "thirdTime",
                    window.localStorage.getItem(modeNum + "secTime")
                  );
                  window.localStorage.setItem(
                    modeNum + "secTime",
                    window.localStorage.getItem(modeNum + "bestTime")
                  );
                  window.localStorage.setItem(
                    modeNum + "bestTime",
                    timer
                  );
                  yourScore.innerHTML = `Your time: ${timer}`;
                  score1.innerHTML = `Best Time: ${window.localStorage.getItem(
                    modeNum + "bestTime"
                  )}(${window.localStorage.getItem(
                    modeNum + "user1"
                  )}) - New High Score!`;
                  score2.innerHTML = `2nd Place: ${window.localStorage.getItem(
                    modeNum + "secTime"
                  )}(${window.localStorage.getItem(modeNum + "user2")})`;
                  score3.innerHTML = `3rd Place: ${window.localStorage.getItem(
                    modeNum + "thirdTime"
                  )}(${window.localStorage.getItem(modeNum + "user3")})`;
                  threeFilled = true;
                } else {
                  console.log("14");
                  window.localStorage.setItem(
                    modeNum + "user3",
                    window.localStorage.getItem(modeNum + "user2")
                  );
                  window.localStorage.setItem(
                    modeNum + "user2",
                    window.localStorage.getItem(modeNum + "user1")
                  );
                  window.localStorage.setItem(
                    modeNum + "user1",
                    prompt(
                      "New High Score! What's your name??"
                    )
                  );
                  window.localStorage.setItem(
                    modeNum + "thirdTime",
                    window.localStorage.getItem(modeNum + "secTime")
                  );
                  window.localStorage.setItem(
                    modeNum + "secTime",
                    window.localStorage.getItem(modeNum + "bestTime")
                  );
                  window.localStorage.setItem(
                    modeNum + "bestTime",
                    timer
                  );
                  yourScore.innerHTML = `Your time: ${timer}`;
                  score1.innerHTML = `Best Time: ${window.localStorage.getItem(
                    modeNum + "bestTime"
                  )}(${window.localStorage.getItem(
                    modeNum + "user1"
                  )}) - New High Score!`;
                  score2.innerHTML = `2nd Place: ${window.localStorage.getItem(
                    modeNum + "secTime"
                  )}(${window.localStorage.getItem(modeNum + "user2")})`;
                  score3.innerHTML = `3rd Place: ${window.localStorage.getItem(
                    modeNum + "thirdTime"
                  )}(${window.localStorage.getItem(modeNum + "user3")})`;
                }
              } else if (
                //second score
                timer <
                parseInt(window.localStorage.getItem(modeNum + "secTime"))
              ) {
                if (!twoFilled && !threeFilled) {
                  window.localStorage.setItem(
                    modeNum + "user2",
                    prompt(
                      "New High Score! What's your name??"
                    )
                  );
                  console.log("21");
                  yourScore.innerHTML = `Your time: ${timer} seconds`;
                  window.localStorage.setItem(modeNum + "secTime", timer);
                  score1.innerHTML = `Best Time: ${window.localStorage.getItem(
                    modeNum + "bestTime"
                  )}(${window.localStorage.getItem(modeNum + "user1")})`;
                  score2.innerHTML = `2nd Place: ${window.localStorage.getItem(
                    modeNum + "secTime"
                  )}(${window.localStorage.getItem(
                    modeNum + "user2"
                  )}) - New High Score!`;
                  twoFilled = true;
                } else if (!threeFilled) {
                  window.localStorage.setItem(
                    modeNum + "user3",
                    window.localStorage.getItem(modeNum + "user2")
                  );
                  window.localStorage.setItem(
                    modeNum + "user2",
                    prompt(
                      "New High Score! What's your name??"
                    )
                  );
                  window.localStorage.setItem(
                    modeNum + "thirdTime",
                    window.localStorage.getItem(modeNum + "secTime")
                  );
                  window.localStorage.setItem(modeNum + "secTime", timer);
                  yourScore.innerHTML = `Your time: ${timer} seconds`;
                  score1.innerHTML = `Best Time: ${window.localStorage.getItem(
                    modeNum + "bestTime"
                  )}(${window.localStorage.getItem(modeNum + "user1")})`;
                  score2.innerHTML = `2nd Place: ${window.localStorage.getItem(
                    modeNum + "secTime"
                  )}(${window.localStorage.getItem(
                    modeNum + "user2"
                  )}) - New High Score!`;
                  score3.innerHTML = `3rd Place: ${window.localStorage.getItem(
                    modeNum + "thirdTime"
                  )}(${window.localStorage.getItem(modeNum + "user3")})`;
                  twoFilled = true;
                  threeFilled = true;
                } else {
                  window.localStorage.setItem(
                    modeNum + "user3",
                    window.localStorage.getItem(modeNum + "user2")
                  );
                  window.localStorage.setItem(
                    modeNum + "user2",
                    prompt(
                      "New High Score! What's your name??"
                    )
                  );
                  window.localStorage.setItem(
                    modeNum + "thirdTime",
                    window.localStorage.getItem(modeNum + "secTime")
                  );
                  window.localStorage.setItem(modeNum + "secTime", timer);
                  yourScore.innerHTML = `Your time: ${timer} seconds`;
                  score1.innerHTML = `Best Time: ${window.localStorage.getItem(
                    modeNum + "bestTime"
                  )}(${window.localStorage.getItem(modeNum + "user1")})`;
                  score2.innerHTML = `2nd Place: ${window.localStorage.getItem(
                    modeNum + "secTime"
                  )}(${window.localStorage.getItem(
                    modeNum + "user2"
                  )}) - New High Score!`;
                  score3.innerHTML = `3rd Place: ${window.localStorage.getItem(
                    modeNum + "thirdTime"
                  )}(${window.localStorage.getItem(modeNum + "user3")})`;
                }
              } else if (
                //third score
                timer <
                parseInt(
                  window.localStorage.getItem(modeNum + "thirdTime")
                )
              ) {
                window.localStorage.setItem(
                  modeNum + "user3",
                  prompt(
                    "New High Score! What's your name??"
                  )
                );
                threeFilled = true;
                window.localStorage.setItem(modeNum + "thirdTime", timer);
                yourScore.innerHTML = `Your time: ${timer} seconds`;
                score1.innerHTML = `Best Time: ${window.localStorage.getItem(
                  modeNum + "bestTime"
                )}(${window.localStorage.getItem(modeNum + "user1")})`;
                score2.innerHTML = `2nd Place: ${window.localStorage.getItem(
                  modeNum + "secTime"
                )}(${window.localStorage.getItem(modeNum + "user2")})`;
                score3.innerHTML = `3rd Place: ${window.localStorage.getItem(
                  modeNum + "thirdTime"
                )}(${window.localStorage.getItem(
                  modeNum + "user3"
                )}) - New High Score!`;
              } else {
                //regular score
                yourScore.innerHTML = `Your time: ${timer} seconds`;
                score1.innerHTML = `Best Time: ${window.localStorage.getItem(
                  modeNum + "bestTime"
                )}`;
                score2.innerHTML = `2nd Place: ${window.localStorage.getItem(
                  modeNum + "secTime"
                )}`;
                score3.innerHTML = `3rd Place: ${window.localStorage.getItem(
                  modeNum + "thirdTime"
                )}`;
              }
              timer = 1;
            }, 100);

            pickedPokemon = [];
            matchCounter = 0;
            timeText.innerHTML = `Time: 0 seconds`;
            while (tokens.firstChild) {
              tokens.removeChild(tokens.lastChild);
            }
          }, 500);
        }
      } else {
        incorrectSound.currentTime = 0;
        incorrectSound.play();
        // in 1/2 second reset these tokens
        setTimeout(reset, 500);
      }
    }
  }
}
});
}
}
