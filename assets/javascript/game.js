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

    updateScreen();
};

function updateScreen() {
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuesses").innerText = numGuessesRemaining;
    document.getElementById("answerWord").innerText = ansWordArr.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

};

function checkGuess(letter) {
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        if (ansWord.indexOf(letter) === -1) {
            numGuessesRemaining--;
            if (numGuessesRemaining <=3) {
                document.getElementById("numGuesses").style.color = "#e12d2e";
            }
        } else { 
            for (var i = 0; i < ansWord.length; i++) {
                if (letter === ansWord[i]) {
                    ansWordArr[i] = letter;
                } 
            }                
        }
    }

}; 

function isWinner() {
	if(ansWord.indexOf("_") === -1) {
		numsWins++;
		isFinished=true;

	}
};

function isLoser() {
	if(numGuessesRemaining <= 0) {
		numLosses++;
		isFinished=true;
		document.write("Better luck next time chump");
	}
};

document.onkeyup = function(event) {
	if(isFinished) {
		setup();
		isFinished =false;
	}	else {
		if(event.keyCode>= 65 && event.keyCode <= 90) {
			checkGuess(event.key());
			updateScreen();
			isWinner();
			isLoser();
		}
	}
};

setup();
updateScreen();
console.log(ansWord);

