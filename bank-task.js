const userName = document.getElementById('user-name').innerText = 'Rafiul Islam Rana';

// deposit js



document.getElementById('add-deposit').addEventListener('click', function(){
    const deposit_Amount = document.getElementById('deposit-amount');
    const depositAmount = parseFloat(deposit_Amount.value);
    const deposit_Total = document.getElementById('deposit-total').innerText;
    const depositTotal = parseFloat(deposit_Total);
    const balance = document.getElementById('balance').innerText;
    const balanceTotal = parseFloat(balance)


    const sumDeposit = depositAmount + depositTotal ;

    document.getElementById('deposit-total').innerText = sumDeposit;

    const sumBalance = balanceTotal + depositAmount;

    document.getElementById('balance').innerText = sumBalance;

    deposit_Amount.value ='';
    
})



// withdraw js