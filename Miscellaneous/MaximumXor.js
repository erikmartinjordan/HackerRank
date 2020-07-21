function maxXor(arr, queries) {
    
    // Defining empty tree
    let tree = {};
    
    // Defining empty branch
    let branch = '';
    
    for(let i = 0; i < arr.length; i ++){
        
        // Getting decimal
        let decimal = arr[i];
        
        // Defining a 32-bits empty string
        let empty = ('0').repeat(32);
        
        // Transforming decimal into 32-bits binary
        let binary = (empty + decimal.toString(2)).slice(-32);
        
        // Iterating through 32-bits binary
        for(let j = 0; j < binary.length; j ++){
            
            // Adding one bit to current branch
            branch += binary[j];
            
            // Defining branch as empty object
            tree[branch] = {};
            
            // Adding 0 and 1 to left and right branches
            if(branch !== binary){
                
                if(binary[j + 1] === '0') tree[branch].left  = branch + '0';
                if(binary[j + 1] === '1') tree[branch].right = branch + '1'; 
                
            }    
            
        }
        
        // Resetting branch
        branch = '';
        
    }
    
    // Defining closest value
    let closest = '';
    
    // Defining array of max XOR's
    let res = [];
    
    for(let i = 0; i < queries.length; i ++){
        
        // Getting decimal
        let decimal = queries[i];
        
        // Defining a 32-bits empty string
        let empty = ('0').repeat(32);
        
        // Transforming decimal into 32-bits binary
        let binary = (empty + decimal.toString(2)).slice(-32);
        
        for(let j = 0; j < binary.length; j ++){
            
            // Getting current bit and inverting it
            let current = binary[j];
            let inverse = binary[j] === '1' ? '0' : '1';
            
            // Update closest value depending on the tree
            if(tree[closest + inverse]) closest += inverse;
            else                        closest += current;
        }
        
        // Defining max
        let max = parseInt(binary, 2) ^ parseInt(closest, 2);

        // Adding to result
        res.push(max);
        
        // Resetting closest value
        closest = '';
        
    }
    
    return res;
    
}