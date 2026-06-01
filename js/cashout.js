document.getElementById('cashout-btn').addEventListener('click', function () {
    event.preventDefault();
    const cashoutPin = document.getElementById('cashout-pin').value;
    const convertedCashOutPin = parseInt(cashoutPin);
    const cashoutAmountBox = document.getElementById('cashout-amount-box').value;
    const convertedCashoutAmount = parseFloat(cashoutAmountBox);
    const mainBalance = document.getElementById('all-amount').innerText;
    const convertedMainBlance = parseFloat(mainBalance);
    const agentNumber = document.getElementById('agent-number').value;
    const convertedAgentNumber = parseInt(agentNumber);

    if (convertedCashOutPin === 12345 && convertedAgentNumber.toString().length === 10) {

        if (convertedCashoutAmount >= 0) {
            const sum = convertedMainBlance - convertedCashoutAmount;
            document.getElementById('all-amount').innerText = sum;
            alert("Success your Withdra ☑️☑️")
        }
        else {
            alert('Please select your amount');
        }

    }
    else {
        alert(' Wrong information')
    }

    document.getElementById('cashout-amount-box').value = '';


})