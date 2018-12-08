let Letter = function (char) {
    this.char = char.toLowerCase()
    this.guessed = false
    this.display = function() {
        if (!this.guessed) {
            return "_"
        } else {
            return this.char
        }
    }
    this.check = function(userInput) { 
        if (userInput.toLowerCase() === this.char) {
            this.guessed = true
        }
    }
}

module.exports = Letter;
