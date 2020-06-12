function abbreviation(a, b) {

    // Defining a.length x b.length matrix to save partial results; false elements by default
    let grid = Array(a.length).fill(0).map(() => Array(b.length).fill(false));

    // Filling grid
    for(let i = 0; i < a.length; i ++){
        for(let j = 0; j < b.length; j ++){

            // First element
            if(i === 0 && j === 0){
                
                // Only true if characters are equal
                grid[i][j] = a[i].toUpperCase() === b[j];                 

            }

            // First column
            if(i !== 0 && j === 0){
                
                // Both characters are equal and previous elements need to be lowercase
                // Example 1
                //      P
                // P    1
                // i    1
                // Example 2
                //	    A
                // d	0
                // a	1
                // B	0
                // c	0
                // d	0
                grid[i][j] = (grid[i - 1][j] && a[i].toLowerCase() === a[i]) || (a[i].toUpperCase() === b[j] && a.slice(0, i).split('').every(elem => elem.toLowerCase() === elem));

            }

            // Rest of the grid
            if(i !== 0 && j !== 0){
                
                // Diagonally elements should be true or upper element true and current character lowercase
                // Example
                //      E    F    H
                // b    0    0    0
                // e    1    0    0
                // F    0    1    0
                // g    0    1    0
                // H    0    0    1
                grid[i][j] = (grid[i - 1][j - 1] && a[i].toUpperCase() === b[j]) || (grid[i - 1][j] && a[i].toLowerCase() === a[i]);

            }

        }
    }
    
    // Returning result
    return grid[a.length - 1][b.length - 1] ? 'YES' : 'NO';

}