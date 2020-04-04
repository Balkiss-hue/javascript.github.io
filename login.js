let username = document.getElementById('username');
let password = document.getElementById('password');

document.querySelector('form.pure-form').addEventListener('submit', function submitform(e) {
    e.preventDefault();
    if (username == "Ogundotun" && password == 123456) {
        console.log(username.value);
    } else {
        alert("incorrect username or password")
    }
})