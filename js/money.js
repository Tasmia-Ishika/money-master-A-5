// handle income
document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input');
    const newIncomeAmountText = incomeInput.value;
    const newIncomeAmount = parseFloat(newIncomeAmountText);
    // console.log(newIncomeAmount);

    // food expenses
    const foodExpense = document.getElementById('food-cost');
    const foodAmountText = foodExpense.value;
    newFoodAmount = parseFloat(foodAmountText);
    // console.log(newFoodAmount);

    // rent expenses
    const rentExpense = document.getElementById('rent-cost');
    const rentAmountText = rentExpense.value;
    newRentAmount = parseFloat(rentAmountText);

    // cloth expenses
    const clothExpense = document.getElementById('cloth-cost');
    const clothAmountText = clothExpense.value;
    newClothAmount = parseFloat(clothAmountText);

    // total expense
    const totalExpenseAmount = newFoodAmount + newRentAmount + newClothAmount;
    console.log(totalExpenseAmount);


    // total expense
    const totalExpense = document.getElementById('total-cost');
    totalExpense.innerText = totalExpenseAmount;


    // update Balance
    const updateBalance = document.getElementById('money-left');
    const updateRemainingBalance = newIncomeAmount - totalExpenseAmount;
    updateBalance.innerText = updateRemainingBalance;

    // precentage
    document.getElementById('save-button').addEventListener('click', function () {
        const savedAmount = document.getElementById('my-saving');
        const newSavedAmountText = savedAmount.value;
        const newSavedAmount = parseFloat(newSavedAmountText);
        console.log(newSavedAmount);

        // saving calculation
        const savingInPercent = (newIncomeAmount / 100) * newSavedAmount;
        console.log(savingInPercent);

        // saving input
        const savingInput = document.getElementById('saved-money');
        savingInput.innerText = savingInPercent;

        // update final balance
        const updateFinalBalance = document.getElementById('total-money');
        const finalBalance = updateRemainingBalance - savingInPercent;
        updateFinalBalance.innerText = finalBalance;
    });
});