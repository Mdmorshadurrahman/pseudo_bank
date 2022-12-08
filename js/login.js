var count = 0;
var limit = 3;
document.getElementById('btn-login').addEventListener('click', function () {
    const emailId = document.getElementById('email-entry').value;
    const emailpassword = document.getElementById('password-entry').value;
    if (count < limit) {
        if (emailpassword == 123456 && emailId === 'joseph') {
            count = 0;
            alert("***Hello " + emailId + "***\nWelcome to Your Account")
            window.location.href = './homepage.html';
        }
        else {
            // console.log('wrong')
            document.getElementById('error-msg').innerText = "You have entered wrong password\n\nattempt left: " + (limit - count);
            console.log(limit - count);
            count++;
            console.log(count);
            document.getElementById('email-entry').value = '';
            document.getElementById('password-entry').value = '';
        }
    }
    else {
        document.getElementById('btn-login').style.display = 'none';
        document.getElementById('error-msg').innerText = "You have entered wrong password\n\nYou have attempt left: " + (limit - count) + '\n\n!!!YOUR ACCOUNT HAS BEEN TEMPORARILY LOCKED!!!';
    }
})
document.getElementById('show-password').addEventListener('click', function () {
    var x = document.getElementById('password-entry');
    if (x.type === "password") {
        x.type = "text";
        document.getElementById('show-password').innerText = "hide-password";
    }
    else {
        x.type = "password";
        document.getElementById('show-password').innerText = "show-password";
    }
})