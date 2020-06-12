function isBalanced(s) {

    // Copying string into array
    let arr = [...s];

    // Iterating through array
    for(let i = 0; i < arr.length; i ++){

            // In case of symmetry delete brackets and go back 2 positions
            if(arr[i] === ']' && arr[i - 1] === '['){
                arr.splice(i - 1, 2);
                i = i - 2;
            } 

            // In case of symmetry delete brackets and go back 2 positions
            if(arr[i] === '}' && arr[i - 1] === '{'){
                arr.splice(i - 1, 2);
                i = i - 2;
            } 

            // In case of symmetry delete brackets and go back 2 positions
            if (arr[i] === ')' && arr[i - 1] === '('){
                arr.splice(i - 1, 2);
                i = i - 2;
            } 

    }

    // Returning result
    return arr.length === 0 ? 'YES' : 'NO';

}