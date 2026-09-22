# SpendWise

SpendWise is a simple browser-based budgeting application. It lets a user
enter their monthly budget and a set of expenses, then calculates and
displays how much money they have left for the month.

This version of the project builds the **JavaScript foundation** of
SpendWise: turning it from a static, visual page into an app that can
actually collect data from the user, process it, and show real results.

## What the Project Does

1. The user clicks **"Start Budgeting"**.
2. The app asks (via prompts) for the user's name and total monthly budget.
3. The app asks for three expenses, one at a time (a name and an amount for each).
4. The app calculates the total of all expenses and the remaining balance
   (budget minus expenses).
5. The results are displayed:
   - In the **browser console**, as a clearly labeled report.
   - On the **webpage itself**, as a readable summary card.
6. If the user has spent more than their budget, SpendWise warns them that
   they've gone over budget.

## JavaScript Concepts Implemented

- **Variables and data types** — numbers, strings, and arrays used to store
  budgeting information.
- **User input** — `prompt()` is used to collect data directly from the user.
- **Type conversion & validation** — `parseFloat()` and `isNaN()` convert
  and check user input before it's used in calculations.
- **Calculations** — arithmetic operations (`+`, `-`, loops with `+=`) are
  used to total expenses and compute the remaining balance.
- **Functions** — the app's logic is broken into small, reusable functions,
  each with a single responsibility.
- **Arrays and loops** — `for` loops iterate over the expense arrays to
  collect input, total values, and build the summary text.
- **DOM manipulation & events** — `document.getElementById()` and
  `addEventListener()` connect the JavaScript logic to the button and
  display area on the page.
- **Template/string building** — string concatenation is used to build a
  clean, human-readable summary of the budget.

## How Variables Are Used

- `monthlyBudget` (number) stores the total budget the user enters.
- `userName` (string) stores the user's name for a personalized summary.
- `expenseNames` (array of strings) and `expenseAmounts` (array of numbers)
  store each expense's label and amount as they're collected.
- `totalExpenses` and `remainingBalance` (numbers) store the results of the
  budget calculations so they can be reused across functions (for the
  console output and the on-page display).
- `NUMBER_OF_EXPENSES` is a `const` that controls how many expenses the app
  asks for, keeping that value easy to change in one place.

## How User Input Is Collected

User input is collected with the built-in `prompt()` function:

- `getBudgetInput()` prompts for the user's name and monthly budget.
- `getExpenseInput()` loops `NUMBER_OF_EXPENSES` times, prompting for an
  expense name and amount on each pass, and pushes each value into the
  `expenseNames` and `expenseAmounts` arrays.

Since `prompt()` always returns text, `parseFloat()` converts numeric
input into actual numbers, and `isNaN()` checks guard against invalid or
empty input (defaulting to `0` when necessary).

## How Calculations Are Performed

- `calculateTotalExpenses()` loops through the `expenseAmounts` array and
  sums every value into a single `totalExpenses` number.
- `calculateRemainingBalance(budget, expenses)` subtracts total expenses
  from the monthly budget to determine how much money is left.
- The result of `remainingBalance` is also checked to decide whether to
  show a warning message (over budget) or a positive confirmation
  (within budget).

## How Functions Help Organize the Code

Rather than writing one large block of code, SpendWise's logic is split
into small, focused functions:

| Function | Responsibility |
|---|---|
| `getBudgetInput()` | Collects the user's name and budget |
| `getExpenseInput()` | Collects each expense name and amount |
| `calculateTotalExpenses()` | Sums all expense amounts |
| `calculateRemainingBalance()` | Computes budget minus expenses |
| `buildSummaryText()` | Formats all results into a readable summary |
| `displayResultsInConsole()` | Logs labeled results to the console |
| `displayResultsOnPage()` | Shows the summary in the webpage UI |
| `runSpendWise()` | Orchestrates the full flow, calling the functions above in order |

This separation makes the code easier to read, test, and extend — for
example, more expense categories or new calculations (like savings goals)
could be added without rewriting the whole app.

## Files

- `index.html` — page structure and layout.
- `style.css` — visual styling for the app.
- `script.js` — all JavaScript logic (data, input, calculations, functions).
- `README.md` — this file.

## How to Run

1. Clone or download this repository.
2. Open `index.html` in a web browser.
3. Open the browser's Developer Tools console (F12 → Console tab) to see
   the detailed budget report.
4. Click **"Start Budgeting"** and follow the prompts.