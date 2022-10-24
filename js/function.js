function getValueFromInput(inputId) {
    const amountget = document.getElementById(inputId);
    const amountgetValue = parseFloat(amountget.value);
    amountget.value = '';
    return amountgetValue;
}
function setValueIntoId(outputId, newValue) {
    const amountset = document.getElementById(outputId)
    amountset.innerText = newValue;
}