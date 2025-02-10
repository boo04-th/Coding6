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
    
//Task 3: Arrow Function
let calculateBonus = (salary, performanceRating) => {
    let bonusPercentage = 0; 
    if(performanceRating === "Excellent")bonusPercentage = 0.20;
    else if (performanceRating === "Good")bonusPercentage = 0.10;
    else if (performanceRating === "Average")bonusPercentage = 0.05;
    let bonus = salary * bonusPercentage;
    console.log (`Bonus: $${bonus}`);
}
calculateBonus(5000, "Excellent"); // output should be 1000
calculateBonus(7000, "Good");      // output should be 700
