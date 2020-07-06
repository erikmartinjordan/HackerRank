function flippingBits(N) {

    // 32-bits empty
    let empty = Array(32).fill(0).map(elem => elem).join('');

    // Binary number
    let binary = (empty + N.toString(2)).slice(-32);

    // Opposite number
    let flip = [...binary].map(elem => elem === '1' ? 0 : 1).join('');

    // Returning result
    return parseInt(flip, 2);

}