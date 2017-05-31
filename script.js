
    var createContainer = document.createElement('div');
        createContainer.setAttribute('class','form-container');
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
container.appendChild(form);
    var formAppend = [username_lb, username_in, nickname_lb, nickname_in, age_lb, age_in, joined_lb, joined_in];

    function setAttributes(el, attrs) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    setAttributes(form, {
        "id": "user-login",
        "name":  "login",
    "action": "https://aseegull.github.io/DOM-BOM-Homework",
    "method": "post",
    "autocomplete":"off",
    "onsubmit": "return validateForm();"
    });

    setAttributes(username_in, {
        "class": "pass",
        "id": "username",
        "name":  "username",
        "type": "text",
        "placeholder": 'like "anyuser_25kld"',
        "autocomplete":"off"
    });

    setAttributes(nickname_in, {
        "class": "pass",
        "id": "nickname",
        "name":  "nickname",
        "type": "text",
        "placeholder": 'emma.watson',
        "autocomplete":"off"
    });

    setAttributes(age_in, {
        "class": "pass",
        "id": "age",
        "name":  "nickname",
        "type": "number",
        "placeholder": '18',
        "autocomplete":"off"
    });

    setAttributes(joined_in, {
        "class": "pass",
        "id": "age",
        "name":  "nickname",
        "type": "submit",
        "value": "Register",
        "disabled":"true"
    });

    nickname_lb.innerHTML = "Enter your nickname:<br /><span class='small'>" + "(It could be whatever you like<br />" +
        "but we recommend to use something like this</span>";
    nickname_lb.setAttribute('for', 'nickname');
    username_lb.innerHTML = "Enter your username<br />" + "It must contain <kbd>user_</kbd>";
    username_lb.setAttribute('for', 'username');
    age_lb.innerText = "How old are you?";
    age_lb.setAttribute('for', 'age');
    joined_lb.innerText = "When did you joined the group?";
    joined_lb.setAttribute('for', 'joined');

    var getForm = document.getElementById('user-login');
    getForm.appendChild(nickname_in);

    formAppend.forEach(function(el) {
    getForm.appendChild(el);
    });
