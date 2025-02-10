//Task 1: Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
    return profit;
} // function for calculating total profits
calculateProfit(20, 30, 100); // profit: $1000
calculateProfit(50, 70, 200); // profit: $4000
