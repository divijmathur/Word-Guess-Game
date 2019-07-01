var words = ["I WILL ALWAYS LOVE YOU","WANNABE","SMELLS LIKE TEEN SPIRIT", "NO DIGGITY","BABY ONE MORE TIME","LIVIN LA VIDA LOCA","NO SCRUBS","LOSER"];

var maxNumGuesses = 9; 
var guessedLetters = []; 
var ansWordArr = []; 
var numGuessesRemaining = 0;
var numWins = 0;
var numLosses = 0; 
var isFinished = false; 
var ansWord; 

function setup() {
    ansWord = words[Math.floor(Math.random() * words.length)];

    ansWordArr = [];

    for (var i = 0; i < ansWord.length; i++) {
        ansWordArr[i] = "_";
    }

    numGuessesRemaining = maxNumGuesses;
    guessedLetters = [];

    //clears giphy-embed to now show any gifs
    document.getElementById("giphy-embed").src = "";
    //removes color from numGuesses
    document.getElementById("numGuesses").style.color = "";

    //show the selected elements on the screen 
    updateScreen();
};

//updates the HTML from the functions
function updateScreen() {
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuesses").innerText = numGuessesRemaining;
    document.getElementById("answerWord").innerText = ansWordArr.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

};

//function to check the key that's pressed
function checkGuess(letter) {
    //if letter is not in guessedLetters array then push the letter to the array
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        //if the letter isn't in the answer word then -1 the numGuessesRemaining
        if (ansWord.indexOf(letter) === -1) {
            numGuessesRemaining--;
            //if numGuessesRemaining is 3 or less then change the color
            if (numGuessesRemaining <=3) {
                document.getElementById("numGuesses").style.color = "#e12d2e";
            }
            //if letter is in answer then replace the positioned "_" with the letter
        } else { 
            for (var i = 0; i < ansWord.length; i++) {
                if (letter === ansWord[i]) {
                    ansWordArr[i] = letter;
                } 
            }                
        }
    }

}; 

//function to check if the player is a winner
function isWinner() {
    //if there are no more "_" in the ansWordArr then +1 to Wins and switch isFinished to true
    if (ansWordArr.indexOf("_") === -1) {
        numWins++;
        isFinished = true;
        //if the answer is guessed then play assigned gif
        if(ansWord === "DOUG") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/w7iOaLoi84N6E";
        } else if (ansWord === "RUGRATS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/3x5V8j8T341lS";
        } else if (ansWord === "SPONGEBOB") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/TdfyKrN7HGTIY";
        } else if (ansWord === "POKEMON") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/xuXzcHMkuwvf2";
        } else if (ansWord === "ANIMANIACS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/Vpu0dyuOVbrBC";
        } else if (ansWord === "RECESS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/ENjchsyk8aSoE";
        } else if (ansWord === "CATDOG") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/VqWjJR7vOwmSk";
        } else if (ansWord === "SIMPSONS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/tkYpAbKdWj4TS";
        }
            
    }
};
//function to check if player is a loser
function isLoser() {
    // if the numGuessesRemaining is 0 then -1 numLosses and switch isFinished to true
    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
        //play the loser gif
        document.getElementById("giphy-embed").src = "https://giphy.com/embed/3oFzmko6SiknmpR2NO";
        document.getElementById("numLosses").style.color = "#e12d2e";
    }

};


//event listener for key pressed
document.onkeyup = function(event) {
    //if isFinished is true then restart the game to the initial setup 
    //and switch isFinished back to false
    if (isFinished) {
        setup();
        isFinished = false;
    } else {
        //check to see if only letters A-Z are pressed
        //functions are executed when user presses A-Z key
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase()); 
            updateScreen();
            isWinner();
            isLoser();
        }
    }
};


setup();
updateScreen();

console.log(ansWord);
