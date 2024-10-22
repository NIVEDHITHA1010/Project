let expenses = [];

function showSection(section) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(section).classList.add('active');
}

function addExpense() {
    const title = document.getElementById('title').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    if (!title || !amount || !date || !category || !description) {
        alert('Please fill in all fields');
        return;
    }

    const expense = {
        id: Date.now(),
        title,
        amount: parseFloat(amount),
        date,
        category,
        description
    };

    expenses.push(expense);
    updateExpenses();
    updateDashboard();
    clearForm();
}

function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('date').value = '';
    document.getElementById('category').value = 'Personal Expenses';
    document.getElementById('description').value = '';
}

function updateExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    expenses.forEach(expense => {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <h3>${expense.title}</h3>
            <p>Amount: $${expense.amount}</p>
            <p>Date: ${expense.date}</p>
