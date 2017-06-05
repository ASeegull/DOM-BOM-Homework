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

// TODO setAvatar();

//document.querySelector('.'+storedLang);  ----------- to select span

function setLanguage() {
    var radioButtons = document.querySelectorAll('input[name="lang"]');
    var getLanguage = radioButtons.forEach(function(item) {
        if (item.checked) {
           var lang = item.getAttribute('data-lang');
            if (localStorage) {
                localStorage.setItem("data-lang", lang);
            }
            return getLanguage;
        }
    });
    }
var langSelector = document.getElementById('languages');
langSelector.addEventListener('change', setLanguage, false);

document.addEventListener('load', changeLanguage, false);

//

var agent = navigator.userAgent.toLowerCase();
var message = document.getElementById('message');
if ( (agent.indexOf('win') !== -1) ){
    message.innerText = 'Windows';
}

else if (agent.indexOf('lin') !== -1) {
    message.innerText = 'Linux';
}

else if (agent.indexOf('mac') !== -1) {
    message.innerText = 'MacOS';
}

else {
    message.innerText = 'OS system'
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


function changeLanguage() {
    var storedLang = localStorage.getItem('data-lang');
    if (localStorage) {
        var lang = document.getElementById(storedLang);
        lang.checked = true;
    }
    var langSpan = document.getElementsByClassName('lang');
    for (var i = 0; i < langSpan.length; i++) {
        if (langSpan[i].getAttribute('class') === 'lang ' + storedLang) {
            langSpan[i].setAttribute('display', 'initial');
        }
        else {
            langSpan[i].setAttribute('display', 'none');
        }
    }
}
changeLanguage();


