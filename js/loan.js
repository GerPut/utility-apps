const calculate = document.getElementById('calculate')

function computeLoan(e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const interestRate = document.getElementById('interest').value;
    const months = document.getElementById('months').value;
    const interest = (amount * (interestRate * .01)) / months;
    const payment = ((amount / months) + interest).toFixed(2);
    const payments = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const payback = document.getElementById('payback');
    payback.innerHTML = `$${payments}`;
}

calculate.addEventListener('click', computeLoan)