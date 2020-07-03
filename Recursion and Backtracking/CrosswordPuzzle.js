function crosswordPuzzle(crossword, hints) {

    // Array of words
    let words = hints.split(';');

    // The tricky point of the problem is that you need to realize that 
    // there is only one way to write the words.
    // Every time we place a word wrong, we need to begin again to iterate 
    const shuffleWords = () => {

        // Creating a copy of the crossword
        let copy = [...crossword];

        // Create a copy of the original array to be randomized
        let shuffle = [...words];

        // Defining function returning random value from i to N
        const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);

        // Shuffle a pair of two elements at random position j
        shuffle.forEach( (elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]] );

        // Reading words one by one
        while(shuffle.length > 0){

            // Getting first word
            let word = shuffle.shift();

            // Iterating the crossword horizontally
            for(let i = 0; i < 10; i ++){
                for(let j = 0; j < 10; j ++){
                    // Trying to write the word horizontally
                    if(copy[i][j] === '-' && word.length > 0) 
                        [copy[i][j], word] = [word[0], word.substr(1)];
                    // The word is shorter than the space to place it
                    if(copy[i][j] === '-' && word.length === 0)
                        shuffleWords();
                }
                // The word is longer than the space to place it
                if(word.length > 0) 
                    shuffleWords();
                else
                    break;
            }

        }
               
    }

    // Starting the function
    shuffleWords();

}