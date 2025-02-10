//Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
    return profit;
} // function for calculating total profits
calculateProfit(20, 30, 100); // profit: $1000
calculateProfit(50, 70, 200); // profit: $4000

//Task 2: Function Expression
let calculateSalesTax = function(amount, taxRate) {
    let salestaxes = amount * taxRate;
    console.log(`Sales tax Computation: $${salestaxes}`);
    }
    
    calculateSalesTax(100, 0.07); 
    calculateSalesTax(500, 0.1);  
    
