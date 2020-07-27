function commonChild(s1, s2) {
    
    // Declaring longest string
    let longestString = 0;
    
    // Defining matrix s1.length x s2.length to memoize results
    let matrix = Array(s1.length).fill(0).map(e => Array(s2.length).fill(0));
    
    // We are building a matrix such as:
    //
    //   H A R R Y
    // S 0 0 0 0 0
    // A 0 1 1 1 1
    // L 0 1 1 1 1
    // L 0 1 1 1 1
    // Y 0 1 1 1 2
    //
    //
    
    // Filling first element
    matrix[0][0] = s1[0] === s2[0] ? 1 : 0;
    
    // Filling first row and column
    for(let i = 1; i < s1.length; i ++){
        
        matrix[0][i] = s1[i] === s2[0] ? 1 : matrix[0][i - 1];
        matrix[i][0] = s2[i] === s1[0] ? 1 : matrix[i - 1][0];
        
    } 

    // Filling the rest of the matrix
    for(let i = 1; i < s1.length; i ++){
        for(let j = 1; j < s2.length; j ++){
            
            // Filling matrix
            if(s1[j] === s2[i])
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
            else
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);
            
            // Determining longest string
            longestString = matrix[i][j] > longestString ? matrix[i][j] : longestString;
            
        }
        
    }
    
    return longestString;
    
}