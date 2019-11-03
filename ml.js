const s = o => document.querySelector(o),
    ss = o => document.querySelectorAll(o),
    log = console.log;

Object.prototype.show = function(){this.classList.remove('hide')}
Object.prototype.hide = function(){this.classList.add('hide')}
String.prototype.deleteCookie = function () {document.cookie = this + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'}

String.prototype.getCookie = function () {
    const cookie = document.cookie.split('; ');
    for (let i = 0; i < cookie.length; i++) {
        const index = cookie[i];
        if (index.indexOf(this) == 0) {
            return index.substring(this.length + 1, index.length);
        }
    }
    return null;
}

function ajax(endpoint, callback, method = ['GET'], asyn = true) {
    let xhr;

    if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
    else xhr = new ActiveXObject('Microsoft.XMLHTTP');

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == '404 Page Not Found') console.error(0);
            else callback(this.responseText);
        }
    }
    xhr.open(method[0], endpoint, asyn);
    if (method[0] == 'GET') xhr.send();
    else xhr.send(method[1]);
}
