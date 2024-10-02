window.onload = function() {
    setTimeout(function() {
        document.getElementById('fhpopup').classList.add('show');
    }, 4000);
};

document.getElementById('fhclose-btn').onclick = function() {
    document.getElementById('fhpopup').classList.remove('show');
};