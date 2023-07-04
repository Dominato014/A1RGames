setTimeout(function() {
    document.getElementById('loader').classList.add('hide');
    document.body.style.overflow = 'auto';
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
    }, 100);
}, 1000);

fetch('games.json').then(response => response.json()).then(games => {
    games.forEach(game => {
        document.getElementById('games').innerHTML += `<div class="item" style="background: url('${game[2]}') 0% 0% / cover;" onclick="play('${game[3]}')"></div>`;
    });
});

function play(path) {
  var url = window.location.origin + path;
  window.location.replace(url);
}
