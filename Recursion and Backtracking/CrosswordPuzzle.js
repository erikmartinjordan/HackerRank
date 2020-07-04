function crosswordPuzzle(crossword, hints) {

    // Array of words
    let words = hints.split(';');

    // Result
    let res = [];

    // Every time we place a word wrong, function restarts
    const shuffleWords = () => {

        // Creating a copy of the crossword
        let copy = [...crossword];

        // Creating a copy of the original array to be randomized
        let shuffle = [...words];

        // Defining function returning random value from i to N
        const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);

        // Declaring function to see if word fits
        const wordFits = (string1, string2) => [...string1].reduce( (acc, elem, i) => acc = acc && (string1[i] === '-' || string1[i] === string2[i]), true);

        // Shuffling a pair of two elements at random position j
        shuffle.forEach( (elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );

        // Reading words one by one
        while(shuffle.length > 0){

            // Getting first word
            let word = shuffle.shift();

            // Word in dashes
            let wordInDashes = '-'.repeat(word.length);

            // Determine if the word was written
            let written = false;

            // Iterating the crossword horizontally
            for(let i = 0; i < 10 && !written; i ++){

                // Getting the potential words in a line
                let potentialWords = copy[i].split('+').filter(elem => elem !== '');

                // Iterating through potential words
                potentialWords.forEach(potentialWord => {

                    // Comparing if the word fits in the dashes
                    if(potentialWord.length === wordInDashes.length && potentialWord.includes('-') && wordFits(potentialWord, word)){
                    
                        // Replacing the line
                        copy[i] = copy[i].replace(potentialWord, word);

                        // Word is written
                        written = true;

                    }

                });

            }

            // If the word is not written horizontally, let's try it vertically
            if(!written){
                
                // Transpose the crossword
                let trans = copy.map((string, i) => [...string].reduce( (acc, elem, j) => acc += copy[j][i], ''));

                // Iterating the crossword horizontally
                for(let i = 0; i < 10 && !written; i ++){

                    // Getting the potential words in a line
                    let potentialWords = trans[i].split('+').filter(elem => elem !== '');

                    // Iterating through potential words
                    potentialWords.forEach(potentialWord => {

                        // Comparing if the word fits in the dashes
                        if(potentialWord.length === wordInDashes.length && potentialWord.includes('-') && wordFits(potentialWord, word)){
                        
                            // Replacing the line
                            trans[i] = trans[i].replace(potentialWord, word);

                            // Word is written
                            written = true;

                            // Transpose again
                            copy = trans.map((string, i) => [...string].reduce( (acc, elem, j) => acc += trans[j][i], ''));

                        }

                    });

                }

            }

            // If still not written, shuffle words
            if(!written)
                shuffleWords();
            // Otherwise save result
            else
                res = [...copy];
            
        }

    }

    // Starting the function
    shuffleWords();

    // Returning result
    return res;

}