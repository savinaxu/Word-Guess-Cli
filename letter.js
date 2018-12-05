let Letter = function (char) {
    this.char = char.toLowerCase()
    this.guess = false
    this.display = function() {
        if (!this.guess) {
            return "_"
        } else {
            return this.char
        }
    }
    this.check = function(userInput) { 
        if (userInput.toLowerCase() === this.char) {
            this.guess = true
        }
    }
}

module.exports = Letter;
