function curry(fn) {
    return function curried(...args) {
        // Check if all arguments are provided
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            // If not, return a new curried function with the provided arguments
            return function (...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
    };
}

// Test the curry function with a function that adds two numbers
const add = curry((a, b) => a + b);

const curriedAdd = add(5); // Currying the add function with one argument
console.log(curriedAdd(3)); // Outputs: 8

// Alternatively, you can directly call the curried function with both arguments
console.log(add(5, 3)); // Outputs: 8
