let lowLimit = 0;
let upLimit = 9;
function goToPage() {
    const n = parseInt(prompt('Enter page number:'));
    if (n !== NaN && n > 0 && n < 4027) {
        upLimit = n * 10 - 1;
        lowLimit = upLimit - 9;
        loadGames();
    }
}
function loadGames() {
    document.getElementById('games').innerHTML = '';
    Array.from(document.getElementsByClassName('counter')).forEach(div => {
        div.innerHTML = (upLimit + 1) / 10;
    });
    games.split('\n').forEach((game, ind) => {
        if (ind >= lowLimit && ind <= upLimit)
            document.getElementById('games').innerHTML +=
            `<tr><td>${game.split(':')[0]}</td><td>${game.split(':')[1]}</td><td>${game.split(':')[2]}</td></tr>`;
    });
}
function prev() {
    if (lowLimit !== 0) {
        lowLimit -= 10;
        upLimit -= 10;
        loadGames();
    }
}
function next() {
    if (upLimit !== 40259) {
        lowLimit += 10;
        upLimit += 10;
        loadGames();
    }
}
loadGames();