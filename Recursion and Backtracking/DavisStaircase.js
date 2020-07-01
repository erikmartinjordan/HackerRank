function stepPerms(n) {

    // If n <= 3
    // stepPerms(1) = 1
    // stepPerms(2) = 2
    // stepPerms(3) = 4
    if(n === 1) return 1;
    if(n === 2) return 2;
    if(n === 3) return 4;

    // If n > than 3
    // stepPerms(n) = stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3)
    let steps = [0, 1, 2, 4];

    for(let i = 4; i <= n; i ++){

        steps[i] = steps[i - 1] + steps[i - 2] + steps[i - 3];

    }

    // Returning result with modulo 10000000007
    return (steps[n]) % 10000000007;

}