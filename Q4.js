function calculateTax() {
    // Tax rates based on income ranges (using closure)
    const taxRates = [
        { range: 10000, rate: 0.05 },
        { range: 30000, rate: 0.1 },
        { range: 50000, rate: 0.15 },
        { range: Infinity, rate: 0.2 }
    ];

    // Function that calculates tax based on income
    return function(income) {
        let tax = 0;

        for (const { range, rate } of taxRates) {
            if (income <= range) {
                tax += income * rate;
                break;
            } else {
                tax += range * rate;
                income -= range;
            }
        }

        return tax;
    };
}

// Example usage
const calculateTaxFunction = calculateTax();

// Test with various incomes
const income1 = 8000;
const income2 = 25000;
const income3 = 45000;
const income4 = 70000;

console.log(`Tax for income $${income1}: $${calculateTaxFunction(income1)}`);
console.log(`Tax for income $${income2}: $${calculateTaxFunction(income2)}`);
console.log(`Tax for income $${income3}: $${calculateTaxFunction(income3)}`);
console.log(`Tax for income $${income4}: $${calculateTaxFunction(income4)}`);
