document.getElementById('button-cashout-money').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-cashout-money').value;

    const pinNumber = document.getElementById('input-pin-number').value;

    if(pinNumber === '1234'){

        const balance = document.getElementById('account-balance').innerText;

        const cashOutBalance = parseFloat(cashOut);
        const currentBalance = parseFloat(balance);

        if(currentBalance > cashOutBalance){
            const newBalance = currentBalance - cashOutBalance;
        document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            document.getElementById('account-balance').innerText = "insufficient Money";
        }
        

        document.getElementById('input-cashout-money').value = '';
        const pinNumber = document.getElementById('input-pin-number').value = '';

    }
    else{
        alert("Wrong Pin")
    }
    
})