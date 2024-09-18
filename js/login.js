document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();

    //get phone number and pin

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    //bad way validate

    if(phoneNumber === '01234567891' && pinNumber === '1234'){
        console.log('your are logged in');
        window.location.href = '/home.html'
    }
    else{
        alert('wrong phone or pin')
    }

})