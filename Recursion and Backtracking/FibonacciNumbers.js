function fibonacci(n) {
    
    // fibonacci(0) = 0
    // fibonacci(1) = 1
    // fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)
    return n === 0 ? 0 : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
    
}