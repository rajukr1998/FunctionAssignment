function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }

    // Recursive case: factorial of n is n multiplied by factorial of (n-1)
    return n * factorial(n - 1);
}

// Test the function with different inputs
const input1 = 5;
const input2 = 0;
const input3 = 8;

console.log(`Factorial of ${input1}: ${factorial(input1)}`);
console.log(`Factorial of ${input2}: ${factorial(input2)}`);
console.log(`Factorial of ${input3}: ${factorial(input3)}`);
