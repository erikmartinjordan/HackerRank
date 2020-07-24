function substrCount(n, s) {
    
    // Initializing number of substrings
    let substrings = s.length;
    
    // E.g. for 'asasd', we want to go through a fictional matrix like:
    //
    //    a s a s d
    // a  - 0 1 0 0
    // s  - - 0 1 0
    // a  - - - 0 0
    // s  - - - - 0
    // d  - - - - -
    //
    // Substrings = (length of word) + (number of '1' in the matrix)
    //
    for(let i = 0; i < s.length; i ++){
        
        // Getting new letter of string
        let word = s[i];
        
        // Initializing position of a different letter
        let differentCharPos = 0;
        
        // Adding new letters
        for(let j = i + 1; j < s.length; j ++){
            
            // Adding new letter to word
            word += s[j];
            
            // First/current letter of the word
            let firstLetter   = word[0];
            let currentLetter = s[j];
            
            // Middle position of the word
            let middle = (word.length - 1)/2;
            
            // We didn't detect (yet) any different letter than the one from start position
            if(!differentCharPos){
                
                // When we detect that a letter is different from initial position
                // We save this position
                // Important: it can be only ONE middle letter
                if(firstLetter !== currentLetter){ 
                    differentCharPos = word.length - 1;
                }
                // Otherwise, the letters in the string are equal
                // In that case, we found a new substring
                else{ 
                    substrings ++;
                }
                
            }
            
            // At this point, we detected a different letter than the one from start position
            else{
                
                // If there is another different letter, we should stop iterating
                if(firstLetter !== currentLetter){    
                    break;
                }
                // Otherwise, check if the different letter is in the middle of the word
                else if(differentCharPos === middle){
                    substrings ++;
                }
                
            }
            
        }
        
    }
    
    // Returning total number of substrings
    return substrings;
    
}