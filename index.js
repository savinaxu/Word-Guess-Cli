let Word = require("./word.js")
let inquirer = require("inquirer")


let wordList = ["gifts", "cookies", "jingle", "christmas", "santa", "snow", "reindeer", "eve"]
let randomIndex = 0
let chosenWord = ""
let gameWord = ""
let counter = 0

function rightGuess() {
    console.log("\nYou guessed correctly.\n");
    if (chosenWord.replace(/ /g,"") == (gameWord.showWord()).replace(/ /g,"")) {
        console.log(gameWord.showWord());
        console.log('\nYou win!!\n');
        chosenWord = "";
        gameWord = "";
        randomIndex = 0;
        counter = 0;
        startGame();
    } else {
        guess();
    }
}

function checkAnswer(data) {
    if ((data.letter.length === 1) && /^[a-zA-Z]+$/.test(data.letter)) {
        let trans = data.letter.toLowerCase()
        let temp = gameWord.showWord()
        gameWord.checkGuess(trans)
        if (temp === gameWord.showWord()) {
            console.log("\nSorry, wrong letter!\n");
            counter++;
            console.log(((9 - counter) + " guesses remaining"));
            guess();
        } else {
            rightGuess();
        }
    } else {
        console.log("\nPlease enter a letter, one at a time.\n");
        guess();
    }
}

function guess() {
    console.log(counter)
    if (counter === 9) {
        console.log("gell")
        console.log("\nSorry, you're out of guesses.\n")
        console.log("\nThe answer is " + chosenWord)
        chosenWord = ""
        gameWord = ""
        randomIndex = 0
        counter = 0
        startGame()
    } else {
        console.log(gameWord.showWord())
        inquirer.prompt([
            {
                name: "letter",
                message: "\nPick a letter and press enter. "
            }
        ]).then(function(data) {
            checkAnswer(data)
        })
    }
}

function startGame() {
    if (wordList.length < 2) {
        wordList = ["gifts", "cookies", "jingle bells", "christmas eve", "santa claus", "snow", "reindeer", "christmas tree"]
    }
    randomIndex = Math.floor(Math.random()*wordList.length)
    chosenWord = wordList[randomIndex]
    gameWord = new Word(chosenWord)
    gameWord.renderWord()
    if (randomIndex >= 0) {
        wordList.splice(randomIndex, 1)
    }
    console.log("\nIt's all about Christmas and you get 9 guessing chances! Let's start!\n")
    guess()
}

startGame()
