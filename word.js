let Letter = require("./letter.js")

let Word = function(wordArr) {
    this.wordArr = wordArr
    this.compWord = []
    this.renderWord = function() {
        for (var i=0; i<wordArr.length; i++) {
            let letter = new Letter(wordArr[i])
            this.compWord.push(letter)
        }
    }
    this.showWord = function() {
        let wordDisplay = []
        for (var i=0; i<this.compWord.length; i++) {
            wordDisplay.push(this.compWord[i].display());
        }
        return wordDisplay.join(" ");
    }
    this.checkGuess = function(userGuess) {
        for (var i=0; i<this.compWord.length; i++) {
            this.compWord[i].check(userGuess);
        }
    }
}

module.exports = Word