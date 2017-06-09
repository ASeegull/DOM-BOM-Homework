var createContainer = document.createElement('div');
createContainer.setAttribute('class', 'form-container center');
document.body.appendChild(createContainer); //Створює контейнер для форми


var container = document.querySelector('div.form-container'),
	createHeading = document.createElement('h2');
createHeading.innerText = 'Create your account';
container.appendChild(createHeading); //Створює та додає заголовок


var form = document.createElement('form'),					// Створює
	username_lb = document.createElement('label'),
	username_in = document.createElement('input'),
	nickname_lb = document.createElement('label'),			// поля вводу та підписи
	nickname_in = document.createElement('input'),
	age_lb = document.createElement('label'),
	age_in = document.createElement('input'),
	joined_lb = document.createElement('label'),			// жах просто
	joined_in = document.createElement('input'),
	submit = document.createElement('input'); 				// треба було принаймні вкладати input в label. І innerHTML юзати

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
    "autocomplete": "off",
    "onsubmit": "setAvatar();"
});

setAttributes(username_in, {
    "class": "pass",
    "id": "username",
    "name": "username",
    "type": "text",
    "placeholder": 'like "user_25kld"',
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


//Додає підписи до полів
var getForm = document.getElementById('user-login');
nickname_lb.innerHTML = "Enter your nickname:<br /><span class='small'>" + "(It can contain numbers but it's better<br />" +
    "to use just letters with one dot something like this</span>";
nickname_lb.setAttribute('for', 'nickname');
username_lb.innerHTML = "Enter your username<br />" + "It must start with <kbd>user_</kbd>";
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
//	var
    age_in.addEventListener('blur', ageValidation, false);
    username_in.addEventListener('blur', usernameValidation, false);
    joined_in.addEventListener('blur', dateValidation, false);
    nickname_in.addEventListener('blur', nicknameValidation, false);
}


function checkInput(validate, input) {
	if (!validate) {
        input.setAttribute('class', 'invalidInput');
        alert('Your data is invalid');
    } else {
        input.setAttribute('class', 'pass');
        input.setAttribute('data-valid', 'valid');
        submitEnable();
    }
}

function ageValidation() {
	var age = document.getElementById('age');
    
	if (isNaN(age.value)) {
		age.setAttribute('class', 'invalidInput');
		(function () { alert('Please, enter number')})();
	} else if (age.value <= 0) {
		age.setAttribute('class', 'invalidInput');
		(function () { alert('Age can\'t be zero or less, can it?')} )(); 
	} else {
		age.setAttribute('class', 'pass');
		age.setAttribute('data-valid', 'valid');
		submitEnable();
	}
}


function usernameValidation() {
	var input = document.getElementById('username'),
    	template = /^user_([a-zA-Z0-9@\.]*)/i,
    	validate = template.test(input.value);
	
	checkInput(validate, input);
}


function dateValidation() {
	var input = document.getElementById('joined'),
    	dateReg = /([0-3][0-9])\/([0-1][0-9])\/([1-2][0-9][0-9][0-9])/,
    	validate = dateReg.test(input.value);
	
    checkInput(validate, input);
}


function nicknameValidation() {
	var input = document.getElementById('nickname'),
		nickReg = /\w+\.\w+/,
		validate = nickReg.test(input.value);
	
    checkInput(validate, input);
}



function submitEnable() {
    var validation = getForm.querySelectorAll('[data-valid]');
    if (validation.length === 4) {
        submit.disabled = false;
    }
}

document.getElementById("submit").onclick = function() {
        location.href = "index.html";
    };
