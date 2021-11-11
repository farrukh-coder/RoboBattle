function Robot(h, p) {
    this.hp = h;
    this.power = p;
    this.attack = function () {
        return Math.floor(Math.random() * this.power + 1);
    }
    this.damage = function (x) {
        return this.hp -= x;
    }
}

//получение блоков из сайта
var modalRegister = document.querySelector('.modal-register');
var header = document.querySelector('header');
var footer = document.querySelector('footer');
var content = document.querySelector('.content');

var firstUserName = document.querySelector('.first-user-name');
var userOne = document.querySelector('.user-one');

var secondUserName = document.querySelector('.second-user-name');
var userTwo = document.querySelector('.user-two');

var start = document.querySelector('.start');

//создание роботов
var firstRobot = new Robot(100, 10);
var secondRobot = new Robot(200, 5);

// получение блоков
let firstBlock = document.querySelector('.first-block');
let secondBlock = document.querySelector('.second-block');

// Первый пользователь
var firstMaxHp = document.querySelector('.first-max-hp');
firstMaxHp.innerHTML = firstRobot.hp;
var firstMaxPower = document.querySelector('.first-max-power');
firstMaxPower.innerHTML = firstRobot.power;
var firstHp = document.querySelector('.first-hp');
var firstPower = document.querySelector('.first-power');

// Второй пользователь
var secondMaxHp = document.querySelector('.second-max-hp');
secondMaxHp.innerHTML = secondRobot.hp;
var secondMaxPower = document.querySelector('.second-max-power');
secondMaxPower.innerHTML = secondRobot.power;
var secondHp = document.querySelector('.second-hp');
var secondPower = document.querySelector('.second-power');

//Кнопки
var firstBtn = document.querySelector('.first-btn');
var secondBtn = document.querySelector('.second-btn');

// События клика по кнопкам
start.addEventListener('click', function (e) {
    userOne.innerHTML = firstUserName.value;
    userTwo.innerHTML = secondUserName.value;
    if (firstUserName.value == '') {
        alert("Заполните все поля!");

    } else {
        modalRegister.style.display = 'none';
        header.style.display = 'flex';
        content.style.display = 'flex';
        footer.style.display = 'flex';
    }
});

firstBtn.addEventListener('click', function () {
    if (secondRobot.hp >= 10) {
        var currentAttack = firstRobot.attack();
        var firstHpa = secondRobot.damage(currentAttack);
        secondHp.innerHTML = firstHpa;
        firstPower.innerHTML = currentAttack;

        firstBtn.classList.add('disabled-btn');
        secondBtn.classList.remove('disabled-btn');

        firstBlock.classList.remove('active');
        secondBlock.classList.add('active');
    } else {
        alert("Победил " + firstUserName.value);
        window.location.reload();
    }
});

secondBtn.addEventListener('click', function () {
    if (firstRobot.hp >= 10) {
        var currentTwoAttack = secondRobot.attack();
        var secondHpa = firstRobot.damage(currentTwoAttack);
        firstHp.innerHTML = secondHpa;
        secondPower.innerHTML = currentTwoAttack;

        secondBtn.classList.add('disabled-btn');
        firstBtn.classList.remove('disabled-btn');

        secondBlock.classList.remove('active');
        firstBlock.classList.add('active');
    } else {
        alert("Победил " + secondUserName.value);
        window.location.reload();
    }
});