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

//Task 4: Parameters and Arguments
function calculateSubscriptionCost(plan, months, discount = 0) {
    let monthlyrate = 0;
    if (plan === "Basic"){
        monthlyrate = 10;
    } else if (plan === "Premium"){
        monthlyrate = 20;
    } else if (plan === "Enterprise"){
        monthlyrate = 50;
    } else {
        console.log("The Wrong Plan has been selected");
        return;
    }
    let totalCost = (monthlyrate*months) - discount;
    console.log(`Total Cost: $${totalCost}`)
};
calculateSubscriptionCost("Basic", 6, 10); // output should be $50
calculateSubscriptionCost("Premium", 12, 0);// output should be $240

//Task 5: Returning Values
function convertCurrency(amount, exchangeRate){
    const convertedAmount = (amount * exchangeRate).toFixed(2);
    console.log(`Converted Amount: $${convertedAmount}`);
    return convertedAmount;
}
convertCurrency(100, 1.1);  // output should be $110
convertCurrency(250, 0.85); // output shoudl be $212.5

//Task 6: Higher-Order Functions
let orders = [200, 600, 1200, 450, 800]; // array of orders
function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
}; // function for applying bulk discount
let discountFunction = amount => amount > 500 ? amount * 0.9 : amount;
let discountedOrders = applyBulkDiscount(orders, discountFunction);

console.log(discountedOrders) // [ 200, 540, 1080, 450, 720 ]

//Task 7: Closures
function createExpenseTracker() {
    let totalExpenses = 0;
    
    return function(amount) {
        totalExpenses += amount;
        return `Total Expenses: $${totalExpenses}`;
    };
}
let tracker = createExpenseTracker();
console.log(tracker(200)); // Expenses should be 200
console.log(tracker(150)); // expenses should be 350