// Deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {
    // document.getElementById('deposit-box').style.backgroundColor = 'green';
    document.getElementById('balance-box').style.backgroundColor = 'lightgreen';
    const newDepositAmount = getValueFromInput('input-deposit');
    setValueIntoId('deposited', newDepositAmount);
    setValueIntoId('balanced', newDepositAmount);
    // document.getElementById('deposit-box').style.backgroundColor = '';
    // document.getElementById('balance-box').style.backgroundColor = 'white';
})

//  Deposit Style
// document.getElementById('btn-deposit').addEventListener('pause', function () {
//     document.getElementById('deposit-box').style.backgroundColor = 'white';
// })
// Withdraw Button

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // document.getElementById('withdraw-box').style.backgroundColor = 'red';
    document.getElementById('balance-box').style.backgroundColor = 'red';
    const newBalanceAmount = getValueFromInput('balanced');
    const newWithdrawAmount = getValueFromInput('input-withdraw');
    setValueIntoId('withdrawn', newWithdrawAmount);
    setValueIntoId('balanced', newBalanceAmount - newWithdrawAmount);
})
