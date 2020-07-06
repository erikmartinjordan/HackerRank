function primality(n) {

    // We consider the number to be prime
    let isPrime = true;

    // Iterating through candidates
    // n = a * b
    // a <= sqrt(n) or b <= sqrt(n)
    // So we need to find a divisible number smaller than sqrt(n)
    for(let i = 2; i <= Math.sqrt(n) && isPrime; i ++){

        // Check if the number is divisible by some number
        if(n % i === 0)
            isPrime = false;

    }

    // Returning result
    if(n === 1) return 'Not prime';
    if(n  >  1) return isPrime ? 'Prime' : 'Not prime';

}