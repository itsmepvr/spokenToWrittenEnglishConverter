function getRules() {
    let rules = {
        "Units": {
            "dollars": "$",
            "dollar": "$"
        },
        "Numbers": {
            "zero": 0,
            "one": 1,
            "two": 2,
            "three": 3,
            "four": 4,
            "five": 5,
            "six": 6,
            "seven": 7,
            "eight": 8,
            "nine": 9,
            "ten": 10,
            "twenty": 20,
            "thirty": 30,
            "forty": 40,
            "fifty": 50,
            "sixty": 60,
            "seventy": 70,
            "eighty": 80,
            "ninety": 90,
            "hundred": 100
        },
        "Tuples": {
            "single": 1,
            "double": 2,
            "triple": 3,
            "quadruple": 4,
            "quintuple": 5,
            "sextuple": 6,
            "septuple": 7,
            "octuple": 8,
            "nonuple": 9,
            "decuple": 10
        }
    }
    return rules
}

function checkForPunctuation(word) {
    let first = '';
    let last = '';
    if (word.length > 1) {
        if (word[word.length - 1] == ',' || word[word.length - 1] == '.') {
            last = word[word.length - 1];
            word = word.slice(0, -1)
        }
        if (word[0] == ',' || word[0] == '.') {
            first = word[0];
            word = word.substring(1);
        }
    }
    return [first, word, last]
}

class SpokenToWritten {
    constructor() {
        this.rules = getRules()
        this.input = '';
        this.output = '';
    }

    Convert(input) {
        this.input = input;
        this.output = '';
        var words = this.input.split(" ");
        let numbers = this.rules['Numbers'];
        let tuples = this.rules['Tuples'];
        let units = this.rules['Units'];
        let count = 0;
        let totalWords = words.length;

        while (count < totalWords) {
            let checkPunctuation = checkForPunctuation(words[count]);
            let first = checkPunctuation[0];
            let word = checkPunctuation[1];
            let last = checkPunctuation[2];
            if ((count + 1) !== totalWords) {
                let next_checkPunctuation = checkForPunctuation(words[count + 1]);
                let next_first = next_checkPunctuation[0];
                let next_word = next_checkPunctuation[1];
                let next_last = next_checkPunctuation[2];
                if (word.toLowerCase() in numbers && (next_word.toLowerCase() == 'dollars' || next_word.toLowerCase() == 'dollar')) {
                    this.output += " " + first + "$" + String(numbers[word.toLowerCase()]) + last;
                    count = count + 2;
                } else if (word.toLowerCase() in tuples && next_word.length == 1) {
                    let w = '';
                    for (let i = 0; i < tuples[word.toLowerCase()]; i++) {
                        w += next_word;
                    }
                    this.output += " " + next_first + w + next_last;
                    count = count + 2;
                } else if ((word + " " + next_word) in units) {
                    this.output += " " + first + word + next_word + next_last;
                    count = count + 2;
                } else {
                    this.output += " " + words[count];
                    count = count + 1;
                }
            } else {
                this.output += " " + words[count];
                count = count + 1;
            }
        }
        if (this.output[0] == ' ') this.output = this.output.substring(1);
        return {
            "spoken_english": this.input,
            "written_english": this.output
        };
    }
}

module.exports = SpokenToWritten;