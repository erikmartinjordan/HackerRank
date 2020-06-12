function candies(n, arr) {

    // Defining distribution
    let distribution = Array(arr.length).fill(1);

    // Looping through array from left to right
    for(let i = 1; i < arr.length; i ++){

        if(arr[i] > arr[i - 1]) 
            distribution[i] = distribution[i - 1] + 1;

    }

    // Looping through array from right to left
    for(let i = arr.length - 2; i >= 0; i --){

        if(arr[i] > arr[i + 1] && distribution[i] <= distribution[i + 1])
            distribution[i] = distribution[i + 1] + 1;

    }

    // Counting total number of candies to distribute
    return distribution.reduce((acc, elem) => acc += elem, 0);
    
}