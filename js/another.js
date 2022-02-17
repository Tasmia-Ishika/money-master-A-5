//for function

function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputAmountText = input.value;
    const inputAmount = parseFloat(inputAmountText);
    //error handle
    if (isNaN(inputAmount) || inputAmount < 0) {
        return alert('Please input valid amount of money in number format');
    }

    return inputAmount;

}

document.getElementById('calculate-button').addEventListener('click', function () {
    //for income
    const newIncomeAmount = getInputValue('income-input');

    //for food
    const newFoodAmount = getInputValue('food-cost');

    //for rent
    const newRentAmount = getInputValue('rent-cost');

    //for clothes
    const newClothAmount = getInputValue('cloth-cost');

    //total expenses
    const totalExpenseAmount = newFoodAmount + newRentAmount + newClothAmount;
    // console.log(totalExpensesAmount);

    //update total expenses
    const totalExpense = document.getElementById('total-cost');
    totalExpense.innerText = totalExpenseAmount;

    /// error handle 
    if (totalExpenseAmount > newIncomeAmount) {
        return alert('You do not have enough money');
    }
    //update balance
    const updateBalance = document.getElementById('money-left');
    const updateRemainingBalance = newIncomeAmount - totalExpenseAmount;
    updateBalance.innerText = updateRemainingBalance;
    // console.log(totalBalance);

    //for percentage
    document.getElementById('save-button').addEventListener('click', function () {
        const newSavedAmount = getInputValue('my-saving');


        //calculate savings
        const savingInput = document.getElementById('saved-money');
        const savingInPercent = (newIncomeAmount * newSavedAmount) / 100;
        // console.log(updatSavingAmount);
        savingInput.innerText = savingInPercent;

        // error handle  
        if (updateRemainingBalance < savingInPercent) {
            return alert('You do not have enough money');
        }

        //Remaining Balance
        const updateFinalBalance = document.getElementById('total-money');
        const finalBalance = updateRemainingBalance - savingInPercent;
        updateFinalBalance.innerText = finalBalance;

    });
});