function maxXor(arr, queries) {

    // Declaring result as an array of integers
    let res = [];
    
    // Creating the trie
    let trie = {};
    
    // Declaring empty strings  
    let num = '';
    
    // Iterating through array
    for(let i = 0; i < arr.length; i ++){
        
        // Defining empty 32-bits array
        let empty = Array(32).fill(0).map(elem => elem).join('');
        
        // Transforming number to binary
        let binary = (empty + arr[i].toString(2)).slice(-32);
        
        // Iterating through binary number
        for(let j = 0; j < binary.length; j ++){
            
            // Adding binary number to string
            num += binary[j];
                
            // Defining empty trie
            trie[num] = {};
            
            // Creating childs 
            if(num !== binary){
                
                if(binary[j + 1] === '0') trie[num].left  = num + 0;
                if(binary[j + 1] === '1') trie[num].right = num + 1;
                
            }
            
        }
        
        num = '';
        
    }
    
    // Getting the max xor in queries and finding it in arr
    for(let i = 0; i < queries.length; i ++){
        
        // Defining empty 32-bits array
        let empty = Array(32).fill(0).map(elem => elem).join('');
        
        // Transforming number to binary
        let binary = (empty + queries[i].toString(2)).slice(-32);
        
        // Iterating through binary number
        for(let j = 0; j < binary.length; j ++){
            
            let current = binary[j];
            let inverse = binary[j] === '1' ? '0' : '1';
            
            if(trie[num + inverse]) num += inverse;
            else                    num += current;
            
        }
        
        // Getting maxXor between binary and num
        let max = parseInt(binary, 2) ^ parseInt(num, 2);
        
        // Pushing result
        res.push(max);
        
        // Resetting variable
        num = '';
        
    }
    
    return res;
    
}