"use strict"

const button = document.querySelector('.reg_btn');
var log, pass;

button.addEventListener('click', function() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    if ((login == "olya@mail.ru" && password == "123123") || (login == log && password == pass)) {
        alert("Добро пожаловать!");
        window.location.href = 'index3.html';
    }
    else if (login == '' || password == '')
        alert("Вы не ввели данные!");
    else alert("Неверный логин или пароль!");
})


const registration = document.querySelector('.reg');

registration.onclick = function() {
    log = prompt("Введите логин");
    while (log == "") {
        alert("Вы не ввели логин, повторите попытку");
        log = prompt("Введите логин");
    }
    if (log) { 
        pass = prompt("Введите пароль");
        while (pass == "") {
            alert("Вы не ввели пароль, повторите попытку");
            pass = prompt("Введите пароль");
        }
    }
    if (log && pass) {
        alert("Вы успешно зарегистрированы!");

    }
    else alert("Регистрация отменена");
}
