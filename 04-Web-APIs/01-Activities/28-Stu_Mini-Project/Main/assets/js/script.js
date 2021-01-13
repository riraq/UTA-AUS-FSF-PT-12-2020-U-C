//javascript code goes here
// As a user, I want to start the game by clicking on a button. 
// * As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.
// * As a user, I want the game to be timed. 
// * As a user, I want to win the game when I have guessed all the letters in the word.
// * As a user, I want to lose the game when the timer runs out before I have guessed all the letters.
// * As a user, I want to see my total wins and losses on the screen. 
// When a user presses a letter key, the user's guess should be captured as a key event.
// * When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear. 
// * When a user wins or loses a game, a message should appear and the timer should stop. 
// * When a user clicks the start button, the timer should reset. 
// * When a user refreshes or returns to the brower page, the win and loss counts should persist.

var startGame = document.getElementById("start-button")
var mysteryWord = document.getElementByClassName("word-blanks");
var winCount = document.querySelector(".win");
var loseCount = document.querySelector(".lose");
var timerCount = document.querySelector(".timer-count");
// as a user, I want to start the game by clicking on a button.
// click start buttion event listener


startGame.addEventListener("click", function() {
    // Sets interval in variable
    var timerInterval = setInterval(
        function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
        
            if(secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                // Calls function to create and append image
                sendMessage();
            }
        }, 1000);
  }
// timer starts