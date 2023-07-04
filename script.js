setTimeout(function() {
    document.getElementById('loader').classList.add('hide');
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
    }, 2000);
}, 2000);
