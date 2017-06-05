
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
    "name": "age",
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
var getForm = document.getElementById('user-login');
nickname_lb.innerHTML = "Enter your nickname:<br /><span class='small'>" + "(It can contain numbers but it's better<br />" +
    "to use just letters with one dot something like this</span>";
nickname_lb.setAttribute('for', 'nickname');
username_lb.innerHTML = "Enter your username<br />" + "It must contain <kbd>user_</kbd>";
username_lb.setAttribute('for', 'username');
age_lb.innerText = "How old are you?";
age_lb.setAttribute('for', 'age');
joined_lb.innerText = "When did you joined the group?";
joined_lb.setAttribute('for', 'joined');


formAppend.forEach(function (el) {
    getForm.appendChild(el);
});


getForm.addEventListener('click', initValidation, false);

function initValidation() {
    age_in.addEventListener('blur', ageValidation, false);
    // age_in.addEventListener('keyup', ageValidation, false);
    username_in.addEventListener('blur', usernameValidation, false);
    joined_in.addEventListener('blur', dateValidation, false);
    nickname_in.addEventListener('blur', nicknameValidation, false);
}




function ageValidation(age_in) {
    var validate = (isNaN(+age_in) || (+age_in) <= 0); //Повинно ж давати True якщо дані невірні, не чисельні
    if (!validate) {
        this.setAttribute('class', 'invalidInput'); //Тому має виконуватися оцей блок
        alert('Your data is invalid');              //Але він виконується ЗАВЖДИ
    }
    else {
        this.setAttribute('data-valid', 'valid'); //Коли ж все добре, мали б додаватися
        // додаються дані, які потрібні для валідаіції
        submitEnable();
    }
}


function usernameValidation(username_in) {
    var usernameReg = /^user_[a-zA-Z0-9;:#*%S]*/;//Пробувала оналайн-валідатори регулярних виразів, наче підходило
    var validate = String(username_in).match(usernameReg); //Я пробувала і варіант з методом test...
    // без String консолька видає помилку

    if (validate === -1) { // подивилась, мат
        this.setAttribute('class', 'invalidInput');
        alert('Your data is invalid');
    }
    else {
        this.setAttribute('class', 'pass');
        this.setAttribute('data-valid', 'valid');
        submitEnable();
    }
}



function dateValidation(joined_in) {
    // var val = joined_in.value;
    var dateReg = / ^[0-9]{2}\/[0-9]{2}\/[0-9]{4} /;
    var validate = String(joined_in).match(dateReg);
    if (validate === -1) {
        this.setAttribute('class', 'invalidInput');
        alert('Your data is invalid');
    }
    else {
        this.setAttribute('class', 'pass');
        this.setAttribute('data-valid', 'valid');
        submitEnable();
    }
}


function nicknameValidation(nickname_in) {
    // var val = nickname_in.value;
    var nickReg = /^ [] $/;
    var validate = String(nickname_in).match(nickReg);
    if (validate === -1) {
        this.setAttribute('class', 'invalidInput');
        alert('Your data is invalid');
    }
    else {
        this.setAttribute('class', 'pass');
        this.setAttribute('data-valid', 'valid');
        submitEnable();
    }
}



function submitEnable() {
    var validation = getForm.querySelectorAll('[data-valid]');
    if (validation.length === 4) {
        submit.disabled = false;
    }
}


