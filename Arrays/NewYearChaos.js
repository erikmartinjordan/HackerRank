function minimumBribes(q) {
    
    // Declaring number of bribes
    let bribes = 0;
    
    // Iterating the queue
    for(let i = q.length - 1; i >= 0; i --){
    
        // Too chaotic condition
        if(q[i] - (i + 1) > 2){
        
            bribes = 'Too chaotic';
            break;
            
        }
        else{
            
            // Searching elements greater than current one
            for(let j = i; j >= Math.max(0, q[i] - 2); j --){
                
                // Incrementing result
                if(q[j] > q[i])
                    bribes++;
                
            }
            
        }
        
    }
    
    console.log(bribes);
    
}