function createPopup() {
    var createContainer = document.createElement('div');
    createContainer.setAttribute('class', 'form-container center');
    document.body.appendChild(createContainer);
    var container = document.querySelector('div.form-container');
    var createHeading = document.createElement('h2');
    createHeading.innerText = 'Create your account';
    container.appendChild(createHeading);
    var form = document.createElement('form');
    var username_lb = document.createElement('label');
    var username_in = document.createElement('input');
    var nickname_lb = document.createElement('label');
    var nickname_in = document.createElement('input');
    var age_lb = document.createElement('label');
    var age_in = document.createElement('input');
    var joined_lb = document.createElement('label');
    var joined_in = document.createElement('input');
    var submit = document.createElement('input');

    container.appendChild(form);
    var formAppend = [username_lb, username_in, nickname_lb, nickname_in, age_lb, age_in, joined_lb, joined_in, submit];

    function setAttributes(el, attrs) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    setAttributes(form, {
        "id": "user-login",
        "name": "login",
        "action": "https://aseegull.github.io/DOM-BOM-Homework",
        // "method": "get",
        "autocomplete": "off",
        "onsubmit": "setAvatar();"
    });

    setAttributes(username_in, {
        "class": "pass",
        "id": "username",
        "name": "username",
        "type": "text",
        "placeholder": 'like "anyuser_25kld"',
        "autocomplete": "off"
    });

    setAttributes(nickname_in, {
        "class": "pass",
        "id": "nickname",
        "name": "nickname",
        "type": "text",
        "placeholder": 'emma.watson',
        "autocomplete": "off"
    });

    setAttributes(age_in, {
        "class": "pass",
        "id": "age",
        "name": "nickname",
        "type": "text",
        "placeholder": '18',
        "autocomplete": "off"
    });

    setAttributes(joined_in, {
        "class": "pass",
        "id": "joined",
        "name": "date",
        "type": "text",
        "placeholder": '24/04/2017',
        "autocomplete": "off"
    });

    setAttributes(submit, {
        "class": "pass",
        "id": "submit",
        "type": "submit",
        "value": "Register",
        "disabled": "true"
    });

    nickname_lb.innerHTML = "Enter your nickname:<br /><span class='small'>" + "(It can contain numbers but it's better<br />" +
        "to use just letters with one dot something like this</span>";
    nickname_lb.setAttribute('for', 'nickname');
    username_lb.innerHTML = "Enter your username<br />" + "It must contain <kbd>user_</kbd>";
    username_lb.setAttribute('for', 'username');
    age_lb.innerText = "How old are you?";
    age_lb.setAttribute('for', 'age');
    joined_lb.innerText = "When did you joined the group?";
    joined_lb.setAttribute('for', 'joined');

    var getForm = document.getElementById('user-login');

    formAppend.forEach(function (el) {
        getForm.appendChild(el);
    });
    document.getElementById('signUp').disabled = true;
    formValidation();
}


function formValidation() {
    age_in.addEventListener('blur', ageValidation);
    username_in.addEventListener('blur', usernameValidation, false);
    joined_in.addEventListener('blur', dateValidation, false);
    nickname_in.addEventListener('blur', nicknameValidation, false);
    document.addEventListener('keyup', submitEnable, false);
}





function ageValidation(age_in) {
    var val = age_in.value;
    var validate = ( isNaN(val) || val <= 0 || val === '');
    if (!validate) {
        this.setAttribute('class', 'invalidInput');
        alert('Your data is invalid');
    }
    else {
        this.setAttribute('class', 'pass');
        this.setAttribute('data-valid', 'valid');
    }
}


function usernameValidation(username_in) {
    var val = username_in.value;
    var usernameReg = /user_[a-zA-Z0-9*&^$#@]* /;
    var validate = usernameReg.test(val);
    if (!validate) {
        this.setAttribute('class', 'invalidInput');
        alert('Your data is invalid');
    }
    else {
        this.setAttribute('class', 'pass');
        this.setAttribute('data-valid', 'valid');
    }
}



function dateValidation(joined_in) {
    var val = joined_in.value;
    var dateReg = / [0-9]{2}\/[0-9]{2}\/[0-9]{4} /;
    var validate = dateReg.test(val);
    if (!validate) {
        this.setAttribute('class', 'invalidInput');
        alert('Your data is invalid');
    }
    else {
        this.setAttribute('class', 'pass');
        this.setAttribute('data-valid', 'valid');
    }
}


function nicknameValidation(nickname_in) {
    var val = nickname_in.value;
    var nickReg = / [0-9a-zA-Z]+\.[0-9a-zA-Z]+ /;
    var validate = nickReg.test(val);
    if (!validate) {
        this.setAttribute('class', 'invalidInput');
        alert('Your data is invalid');
    }
    else {
        this.setAttribute('class', 'pass');
        this.setAttribute('data-valid', 'valid');
    }
}



function submitEnable() {
    var validation = getForm.querySelectorAll('[data-valid]');
    if (validation.length === 4) {
        submit.disabled = false;
    }
}



window.addEventListener('scroll', function () {
    var cords = document.querySelectorAll('.cord');
    var parallax = document.getElementById('parallax-container');
    var prl = document.getElementById('parallax');
    var posY = document.body.scrollTop;
    parallax.style.backgroundPosition = '0px ' + -posY * 0.8 + 'px';
    prl.style.backgroundPosition = '0px ' + (200 + -posY * 0.72) + 'px';

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
if (agent.indexOf('win') !== -1) {
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



