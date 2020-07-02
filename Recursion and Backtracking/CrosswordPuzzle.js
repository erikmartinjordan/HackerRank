function crosswordPuzzle(crossword, hints) {

    // Array of words
    let words = hints.split(';');

    // Horizontal and vertical words to fit
    let horizontalWords = [];
    let verticalWords   = [];

    // Defining start and end 
    let startH = null;
    let endH   = null;
    let startV = null;
    let endV   = null;

    // Looping through crossword to find horizontal and vertical words
    for(let i = 0; i < 10; i ++){
        for(let j = 0; j < 10; j ++){

            // Getting horizontal words
            if(crossword[i][j] === '-' && !startH)        startH = [i, j];
            if(crossword[i][j] === '+' && startH)         endH   = [i, j];
            if(startH && endH && endH[1] - startH[1] > 1) horizontalWords.push([startH, endH]);

            // Getting vertical words
            if(crossword[j][i] === '-' && !startV)        startV = [j, i];
            if(crossword[j][i] === '+' && startV)         endV   = [j, i];
            if(startV && endV && endV[0] - startV[0] > 1) verticalWords.push([startV, endV]);

            // Resetting variables
            if(startH && endH) startH = endH = null;
            if(startV && endV) startV = endV = null;

        }

        // Pushing if arrived to the end
        if(startH) horizontalWords.push([[startH], [i, 9]]);
        if(startV) verticalWords.push([startV,[9, i]]);
        
        // Resetting variables
        startH = null;
        startV = null;

    }


}