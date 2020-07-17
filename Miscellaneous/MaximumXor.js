function maxXor(arr, queries) {

    // Result is an array of integers
    let res = [];

    // Creating the trie
    let trie = {};

    // arr = [5, 1, 4, 3];
    // arr = [101, 001, 100, 011];

    // queries = [2, 0];
    // queries = [010, 000];

    // inverse = [101, 111];
    /*

           root
          /    \
         1      0
        /       / \
       10      00  01
      /  \       \   \
     100 101    001 011

    // Iterating through array
    for(let i = 0; i < arr.length; i ++){

        // Transforming number to binary
        let binary = arr[i].toString(2);

        // Iterating through binary number
        for(let j = 0; j < binary.length; j ++){

            num += binary[j];

            if(num !=== binary){
                trie[num].left  = num + 0;
                trie[num].right = num + 1; 
            }
            else{
                trie[num].included = true;
            }

        }

    }
    */
    
    // Getting the max xor in queries and finding it in arr
    for(let i = 0; i < queries.length; i ++){

        // Transforming the number into a binary
        let binary = queries[i].toString(2);

        // The maximum value would be the binary inverse
        let binaryInverse = [...binary].map(num => num === '0' ? 1 : 0).join('');

        // Getting max binary
        let max = trie[binaryInverse];

    }

}