const expenses = [];
const $ = (id) => document.getElementById(id);
const money = (n) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function totals() {
  const budget = parseFloat($("budget").value) || 0;
  const spent = expenses.reduce((sum, e) => sum + e.amount, 0);
  return { budget, spent, remaining: budget - spent };
}

function renderList() {
  const list = $("expense-list");
  list.innerHTML = "";
  if (expenses.length === 0) {
    const li = document.createElement("li");
    li.className = "empty";
    li.textContent = "No expenses yet. Add your first one below.";
    list.appendChild(li);
    return;
  }
  expenses.forEach((e, i) => {
    const li = document.createElement("li");
    const name = document.createElement("span");
    name.className = "name";
    name.textContent = e.label;
    const amt = document.createElement("span");
    amt.className = "amt";
    amt.textContent = money(e.amount);
    const rm = document.createElement("button");
    rm.className = "remove";
    rm.type = "button";
    rm.setAttribute("aria-label", "Remove " + e.label);
    rm.textContent = "\u00d7";
    rm.addEventListener("click", () => { expenses.splice(i, 1); update(); });
    li.append(name, amt, rm);
    list.appendChild(li);
  });
}

function renderSummary() {
  const { budget, spent, remaining } = totals();
  const over = remaining < 0;
  $("who").textContent = $("name").value.trim() || "Guest";
  $("remaining").textContent = (over ? "-" : "") + money(Math.abs(remaining));
  $("remaining").classList.toggle("over", over);
  $("out-budget").textContent = money(budget);
  $("out-expenses").textContent = money(spent);
  $("out-count").textContent = expenses.length;

  const pct = budget > 0 ? Math.min(100, (spent / budget) * 100) : 0;
  const fill = $("meter-fill");
  fill.style.width = pct + "%";
  fill.classList.toggle("over", over);

  if (budget <= 0) $("meter-note").textContent = "Enter your budget to begin.";
  else if (over) $("meter-note").textContent = "You are " + money(-remaining) + " over budget.";
  else $("meter-note").textContent = Math.round(pct) + "% of your budget is spent.";
}

function update() { renderList(); renderSummary(); }

function logSummary() {
  const { budget, spent, remaining } = totals();
  console.log("----- SpendWise Budget Summary -----");
  console.log("User: " + ($("name").value.trim() || "Guest"));
  console.log("Monthly Budget: " + money(budget));
  expenses.forEach((e, i) => console.log((i + 1) + ". " + e.label + ": " + money(e.amount)));
  console.log("Total Expenses: " + money(spent));
  console.log("Remaining Balance: " + money(remaining));
  console.log(remaining < 0 ? "Warning: you are over budget." : "You are within budget.");
}

$("expense-form").addEventListener("submit", (ev) => {
  ev.preventDefault();
  const label = $("exp-label").value.trim();
  const amount = parseFloat($("exp-amount").value);
  if (!label || isNaN(amount) || amount < 0) return;
  expenses.push({ label, amount });
  $("exp-label").value = "";
  $("exp-amount").value = "";
  $("exp-label").focus();
  update();
});
$("budget").addEventListener("input", renderSummary);
$("name").addEventListener("input", renderSummary);
$("console-btn").addEventListener("click", logSummary);

update();
