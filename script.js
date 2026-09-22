/* =========================================================
   SPENDWISE - JavaScript Foundation
   This file handles data storage, user input, calculations,
   and displaying results for the SpendWise budgeting app.
   ========================================================= */

// ---------------------------------------------------------
// 1. APPLICATION DATA (variables & data types)
// ---------------------------------------------------------

// Budget-related data
let monthlyBudget = 0;        // Number: total money available for the month
let userName = "";            // String: name of the user (optional, for personalization)

// Expense-related data
let expenseNames = [];        // Array of strings: labels for each expense
let expenseAmounts = [];      // Array of numbers: amount for each expense
let totalExpenses = 0;        // Number: running total of all expenses
let remainingBalance = 0;     // Number: budget left after expenses

// Constant that controls how many expenses we ask the user for
const NUMBER_OF_EXPENSES = 3;


// ---------------------------------------------------------
// 2. FUNCTIONS (reusable logic)
// ---------------------------------------------------------

/**
 * Collects the user's name and total monthly budget using prompts.
 * Stores the values in the shared variables above.
 */
function getBudgetInput() {
  userName = prompt("What is your name?", "Guest");

  // parseFloat() converts the text from the prompt into a number
  let budgetInput = prompt("Enter your total monthly budget ($):", "1000");
  monthlyBudget = parseFloat(budgetInput);

  // Basic validation: if the user enters something invalid, default to 0
  if (isNaN(monthlyBudget) || monthlyBudget < 0) {
    monthlyBudget = 0;
  }
}

/**
 * Collects a fixed number of expenses from the user (name + amount)
 * and stores them in the expenseNames and expenseAmounts arrays.
 */
function getExpenseInput() {
  for (let i = 1; i <= NUMBER_OF_EXPENSES; i++) {
    let name = prompt("Enter a name for expense #" + i + ":", "Expense " + i);
    let amountInput = prompt("Enter the amount for '" + name + "' ($):", "0");
    let amount = parseFloat(amountInput);

    if (isNaN(amount) || amount < 0) {
      amount = 0;
    }

    expenseNames.push(name);
    expenseAmounts.push(amount);
  }
}

/**
 * Calculates the total of all expenses stored in expenseAmounts.
 * @returns {number} the sum of all expenses
 */
function calculateTotalExpenses() {
  let sum = 0;
  for (let i = 0; i < expenseAmounts.length; i++) {
    sum += expenseAmounts[i];
  }
  return sum;
}

/**
 * Calculates the remaining balance based on the monthly budget
 * and the total expenses.
 * @param {number} budget - the total monthly budget
 * @param {number} expenses - the total of all expenses
 * @returns {number} the remaining balance (can be negative if overspent)
 */
function calculateRemainingBalance(budget, expenses) {
  return budget - expenses;
}

/**
 * Builds a readable, labeled summary string of the whole budget,
 * used for both the console output and the on-screen display.
 * @returns {string} formatted summary text
 */
function buildSummaryText() {
  let summary = "----- SpendWise Budget Summary -----\n";
  summary += "User: " + userName + "\n";
  summary += "Monthly Budget: $" + monthlyBudget.toFixed(2) + "\n";
  summary += "\nExpenses:\n";

  for (let i = 0; i < expenseNames.length; i++) {
    summary += "  - " + expenseNames[i] + ": $" + expenseAmounts[i].toFixed(2) + "\n";
  }

  summary += "\nTotal Expenses: $" + totalExpenses.toFixed(2) + "\n";
  summary += "Remaining Balance: $" + remainingBalance.toFixed(2) + "\n";

  if (remainingBalance < 0) {
    summary += "\nWarning: You have exceeded your monthly budget!";
  } else {
    summary += "\nNice! You are within your monthly budget.";
  }

  return summary;
}

/**
 * Logs a clearly labeled breakdown of the budget to the console.
 */
function displayResultsInConsole() {
  console.log("=== SpendWise Console Report ===");
  console.log("User Name:", userName);
  console.log("Monthly Budget:", monthlyBudget);
  console.log("Expense Names:", expenseNames);
  console.log("Expense Amounts:", expenseAmounts);
  console.log("Total Expenses:", totalExpenses);
  console.log("Remaining Balance:", remainingBalance);
  console.log(buildSummaryText());
}

/**
 * Displays the budget summary on the webpage itself.
 */
function displayResultsOnPage() {
  const resultsCard = document.getElementById("resultsCard");
  const summaryOutput = document.getElementById("summaryOutput");

  summaryOutput.textContent = buildSummaryText();
  resultsCard.hidden = false;
}

/**
 * Main function that runs the whole SpendWise data flow:
 * collects input, performs calculations, and displays results.
 */
function runSpendWise() {
  getBudgetInput();
  getExpenseInput();

  totalExpenses = calculateTotalExpenses();
  remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);

  displayResultsInConsole();
  displayResultsOnPage();
}


// ---------------------------------------------------------
// 3. EVENT LISTENERS (connecting logic to the page)
// ---------------------------------------------------------

const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", runSpendWise);

// Confirms the script has loaded successfully
console.log("SpendWise script.js loaded successfully.");