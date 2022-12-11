"use strict"

const button = document.querySelector('.menu');
const menu = document.querySelector('.inner_menu');
const menu_item1 = document.querySelector('.menu_sup1')
const menu_item2 = document.querySelector('.menu_sup2')
const menu_item3 = document.querySelector('.menu_sup3')
const menu_item4 = document.querySelector('.menu_sup4')

button.addEventListener('click', function() {
    if (menu.style.opacity == 0) {
        menu.style.opacity = 1;
    }
    else menu.style.opacity = 0;
})

menu_item1.onclick = function() {
    button.innerHTML = "2-4 декабря";
    return false;
}
menu_item2.onclick = function() {
    button.innerHTML = "9-11 декабря";
    return false;
}
menu_item3.onclick = function() {
    button.innerHTML = "16-18 декабря";
    return false;
}
menu_item4.onclick = function() {
    button.innerHTML = "23-25 декабря";
    return false;
}

const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const count = document.querySelector(".num");
var counter = document.querySelector(".num").textContent;

minus.onclick = function() {
    if (counter != 1) {
        counter--;
        count.innerHTML = counter;
    }
    return false;
}

plus.onclick = function() {
    counter++;
    count.innerHTML = counter;
    return false;
}

const send = document.querySelector(".send");

send.addEventListener('click', function() {
    if (button.textContent == "дата не выбрана")
        alert("Выберите дату!");
    else {
        alert("Тур успешно забронирован!");
        window.location.href = 'index.html';
    }
})