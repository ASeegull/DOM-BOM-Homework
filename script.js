//Task OS message

function setOSMessageInnerText() {
    var agent = navigator.userAgent.toLowerCase(),
        message = document.getElementById('message');

    if ((agent.indexOf('win') !== -1)) {
        message.innerText = 'Windows';				
    } else if (agent.indexOf('lin') !== -1) {
        message.innerText = 'Linux';
    } else if (agent.indexOf('mac') !== -1) {
        message.innerText = 'MacOS';
    } else {
        message.innerText = 'OS system';
    }
}


// Parallax

function parallaxScroll() {
    var cords = document.querySelectorAll('.cord'),
        parallax = document.getElementById('parallax-container'),
        prl = document.getElementById('parallax'),
        posY = document.body.scrollTop;

    parallax.style.backgroundPosition = '0px ' + -posY * 0.8 + 'px';
    prl.style.backgroundPosition = '0px ' + (220 + -posY * 0.72) + 'px';

    cords.forEach(function(item) {
        item.style.backgroundPosition = '0px ' + -posY * 10 + 'px';
    });
}

// Localization

function getSavedLanguage() {
    var localStorage = this.localStorage,
        lang = 'lang-ua';

    if (localStorage.language) {
        lang = localStorage.language;
        document.querySelector('#languages [value="' + lang + '"]').checked = true;
    } else {
        localStorage.setItem('language', lang);
    }

    changeLanguage(lang);
}


function setLanguage() {
    var lang = document.querySelector('[name="lang"]:checked').value;

    localStorage.setItem("language", lang);
    changeLanguage(lang);
}

function changeLanguage(lang) {
    var localizedContentEls = document.getElementsByClassName('lang'),
        localizedContent,
        i;
	
    for (i = 0; i < localizedContentEls.length; i++) {
        localizedContent = localizedContentEls[i];
        localizedContent.style.display = localizedContent.className.indexOf(lang) > -1 ? 'inline-block' : 'none';
    }
}

//Додає всі event listeners

function addLanguageChangeListeners() {
    document.getElementsByName('lang').forEach(function(item) {
        item.addEventListener('change', setLanguage, false);
    });
}

function addAllEventListeners() {
    window.addEventListener('scroll', parallaxScroll);
    window.addEventListener("DOMContentLoaded", getSavedLanguage);
    document.getElementById("signUp").onclick = function() {
        location.href = "form.html";
    };
    addLanguageChangeListeners();
}

setOSMessageInnerText();
addAllEventListeners();
