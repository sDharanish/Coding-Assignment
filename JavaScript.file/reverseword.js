function reverseWordsInSentence(sentence) {
    const reversedWords = [];
    let currentWord = '';

    for (let i = 0; i < sentence.length; i++) {
        const currentChar = sentence[i];

        if (currentChar.match(/[a-zA-Z]/)) {
            
            currentWord += currentChar;
        } else {
           
            if (currentWord.length > 0) {
                let reversedWord = '';
                for (let j = currentWord.length - 1; j >= 0; j--) {
                    reversedWord += currentWord[j];
                }
                reversedWords.push(reversedWord);
                currentWord = '';
            }
           
            reversedWords.push(currentChar);
        }
    }

    
    if (currentWord.length > 0) {
        let reversedWord = '';
        for (let j = currentWord.length - 1; j >= 0; j--) {
            reversedWord += currentWord[j];
        }
        reversedWords.push(reversedWord);
    }

    
    return reversedWords.join('');
}

const sentence = "This is a sunny day"; 
const reversedSentence = reverseWordsInSentence(sentence);
console.log("Reversed Sentence:", reversedSentence);
