function commonChild(s1, s2) {
    
    // Initializing longest common subsequence to 0
    let lcs = 0;
    
    // Initializing the matrix
    let matrix = Array(s1.length).fill('-').map(e => Array(s2.length).fill('-'));
  
    // We are building a matrix such as:
    //
    //      d d E r i k
    //  E   0 0 1 1 1 1
    //  m   0 0 1 1 1 1
    //  r   0 0 1 2 2 2
    //  l   0 0 1 2 2 2
    //  i   0 0 1 2 3 3
    //  k   0 0 1 2 3 4
    //
    
    // Filling first element of the matrix
    matrix[0][0] = s1[0] === s2[0] ? 1 : 0;
    
    // Filling first row and column
    for(let i = 1; i < s1.length; i ++){
        
        matrix[0][i] = s1[i] === s2[0] ? 1 : matrix[0][i - 1];
        matrix[i][0] = s1[0] === s2[i] ? 1 : matrix[i - 1][0];
        
    }
    
    // Filling the rest of the matrix
    for(let i = 1; i < s2.length; i++){
        for(let j = 1; j < s1.length; j++){
            
            // First condition
            if(s1[j] === s2[i])
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
            // Second condition
            else
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
               
            // Updating max lcs
            lcs = matrix[i][j] > lcs ? matrix[i][j] : lcs;
            
        }
        
    }
    
    // Returning result
    return lcs;
    
}