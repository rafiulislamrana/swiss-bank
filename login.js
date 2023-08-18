document.getElementById("login").addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const userPassword = document.getElementById('user-password');
    
    if(userEmail.value == "test@gmail.com" && userPassword.value == "12345678"){
        window.location.href = 'bank.html';
    }
    else{
        alert('Incorrect Password. Try again with your valid password.')
    }

    userEmail.value = '';
    userPassword.value = '';
})


