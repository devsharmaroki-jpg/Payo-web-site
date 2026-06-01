document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const acountNumber = document.getElementById('acount-number').value;
        const pinBox = document.getElementById('pin').value;
        if (acountNumber.length === 11) {
            if (pinBox === '12345') {
                window.location.href = "./main.html"
            }
            else {
                alert('Your password-12345');
            }
        }
        else {
            alert('Need a valid Number')
        }

    })