// script.js
function loadPage(page) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.body.innerHTML = this.responseText;
        }
    };
    xhr.open("GET", page, true);
    xhr.send();
}

// Chiamare la funzione per caricare una pagina specifica
loadPage('home.html');
