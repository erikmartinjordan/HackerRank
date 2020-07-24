function minimumSwaps(arr) {
    
    // Initializing number of swaps
    let swaps = 0;
    
    // Iterating the array
    for(let i = 0; i < arr.length; i ++){
        
        // If position is different from number
        if(i + 1 !== arr[i]){
            
            // Finding correct number
            for(let j = i + 1; j < arr.length; j ++){
                
                // Found correct number
                if(arr[j] === i + 1){
                    
                    // Swapping positions
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    
                    // Incrementing swaps
                    swaps ++;
                    
                    // Going to first loop
                    break;
                    
                }
                
            }
            
        }
        
    }
    
    return swaps;
    
}