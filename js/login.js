document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    console.log('i am clicked');

    //get phone number

    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber.value);
})