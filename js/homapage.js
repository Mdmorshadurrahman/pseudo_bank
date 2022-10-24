// Deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {
    document.getElementById('balance-euro').style.color = 'lightgreen';
    document.getElementById('balance-box').style.backgroundColor = 'blue';
    const newBalanceAmount = getTextFromId('balanced');
    const newDepositAmount = getValueFromInput('input-deposit');
    const oldDepositAmount = getTextFromId('deposited');
    setValueIntoId('deposited', oldDepositAmount + newDepositAmount);
    setValueIntoId('balanced', newBalanceAmount + newDepositAmount);

})

// Withdraw Button

document.getElementById('input-withdraw').addEventListener('keyup', function () {
    const newBalanceAmount = getTextFromId('balanced');
    const oldWithdrawAmount = getTextFromId('withdrawn');
    const newWithdrawAmount = parseFloat(document.getElementById("input-withdraw").value)
    console.log(newBalanceAmount, oldWithdrawAmount, newWithdrawAmount)
    if (newWithdrawAmount > newBalanceAmount) {
        document.getElementById('btn-withdraw').style.display = 'none';
        document.getElementById('error-msg-withdraw').innerText = "-----Opps! You Don't Have Much Amount---"
    }
    else {
        console.log('im in')
        document.getElementById('btn-withdraw').style.display = 'inline';
        document.getElementById('error-msg-withdraw').innerText = '';
        document.getElementById('btn-withdraw').addEventListener('click', function () {
            document.getElementById('balance-box').style.backgroundColor = 'red';
            setValueIntoId('withdrawn', oldWithdrawAmount + newWithdrawAmount);
            setValueIntoId('balanced', newBalanceAmount - newWithdrawAmount);
        })
    }

})
