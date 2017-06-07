window.addEventListener('scroll', function () {
    var cords = document.querySelectorAll('.cord');
    var parallax = document.getElementById('parallax-container');
    var prl = document.getElementById('parallax');
    var posY = document.body.scrollTop;
    parallax.style.backgroundPosition = '0px ' + -posY * 0.8 + 'px';
    prl.style.backgroundPosition = '0px ' + (220 + -posY * 0.72) + 'px';

    function scrollCords(item) {
        item.style.backgroundPosition = '0px ' + -posY * 10 + 'px';
    }

    cords.forEach(scrollCords);
});

document.getElementById("signUp").onclick = function () {
    location.href = "form.html";
};

// TODO setAvatar();

//document.querySelector('.'+storedLang);  ----------- to select span

//function setLanguage() {
//    var radioButtons = document.querySelectorAll('input[name="lang"]');
//    var getLanguage = function(radioButtons) {
//        for (var i = 0; i <= radioButtons.length; i++) {
//            if (item.checked) {
//           var lang = item.getAttribute('data-lang');
//            if (localStorage) {
//                localStorage.setItem("data-lang", lang);
//            }
//        }
//        }
//    }
//    }
//
//setLanguage();
//
//var langSelector = document.getElementById('languages');
//langSelector.addEventListener('change', setLanguage, false);
//
//document.addEventListener('load', changeLanguage, false);
//

var agent = navigator.userAgent.toLowerCase();
var message = document.getElementById('message');
if ((agent.indexOf('win') !== -1)) {
    message.innerText = 'Windows';
} else if (agent.indexOf('lin') !== -1) {
    message.innerText = 'Linux';
} else if (agent.indexOf('mac') !== -1) {
    message.innerText = 'MacOS';
} else {
    message.innerText = 'OS system';
}

// switch(agent) {
//     case (agent.indexOf('win') !== -1 && agent.indexOf('64')):
//         message.innerText = 'Windows 64-bit';
//         break;
//     case (agent.indexOf('win') !== -1 && agent.indexOf('32') !== -1):
//         message.innerText = 'Windows 32-bit';
//         break;
//     case (agent.indexOf('lin') !== -1):
//         message.innerText = 'Linux';
//         break;
//     case (agent.indexOf('mac') !== -1):
//         message.innerText = 'MacOS';
//         break;
//     default:
//         message.innerText = 'OS system'
// }

//
//function checkLanguage() {    
//    if (localStorage) {
//        var storedLang = localStorage.getItem('data-lang');
//        var lang = document.getElementById(storedLang);
//        lang.checked = true;
//        return;
//    }
//}
//
var radioButtons = document.querySelectorAll('input[name="lang"]');
var localLang = localStorage.language;


function getLang() {
  if (localLang) { //якщо є збережена мова
    var radioButtons = document.querySelectorAll('input[name="lang"]');
    var localLang = localStorage.language;
    var localLang = localStorage.language;
    for (var i = 0; i <= radioButtons.length; i++) { //пройдися по всіх кнопках 
      if (radioButtons[i].value === localLang) { //якщо айдішка така ж як мова,
        radioButtons[i].setAttribute('checked', 'checked'); //відмічає її
      } else {
        localStorage.setItem('language', 'lang-ua'); //Якщо мови нема у стореджі - задає дефолтну українську мову
      }
      changeLanguage(localLang); //запускає зміну мови
    }
  }
}
document.addEventListener("DOMContentLoaded", getLang);
document.getElementById('languages').addEventListener('change', setLanguage, true); //Запускає функції при зміні опції

function setLanguage() {
  for (var i = 0; i <= radioButtons.length; i++) {
    var radioButtons = document.querySelectorAll('input[name="lang"]');
    var localLang = localStorage.language;
    if (radioButtons[i].checked) { // шукає чекнуту опцію
      var lang = radioButtons[i].value; //Бере її атрибут з дата-ленг ('lang-ua') наприклад
      localStorage.setItem("language", lang); //Зберігає мову у локал стореджі 
      changeLanguage(localLang); //Запускає функцію зміни мови
    }
  }
}


function changeLanguage(localLang) {
  var langSpan = document.getElementsByClassName('lang'); //обирає усі спани з перекладами
  for (var i = 0; i < langSpan.length; i++) { //прозодиться по кожному
    if (langSpan[i].value === localLang) { //звіряє з айдішкою
      langSpan[i].setAttribute('display', 'initial'); //та відновлює відображення за деолтом, якщо мова пасує
    } else {
      langSpan[i].setAttribute('display', 'none'); //ховає, якщо не підходить
    }
  }
}
