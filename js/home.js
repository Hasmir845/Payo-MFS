document.getElementById('button-add-money').addEventListener('click',function(event){
    event.preventDefault();
    
    const addMoney = document.getElementById('input-add-money').value;
    
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;

        const addMoneyNumber = parseFloat(addMoney);
        const addBalanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + addBalanceNumber;
        
        document.getElementById('account-balance').innerText = newBalance;
        
        document.getElementById('input-add-money').value = "";
        document.getElementById('pin-number').value = "";
        
    }
    else{
        alert("Wrong Pin")
    }
})