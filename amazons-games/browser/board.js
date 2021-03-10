var initialPos = '3r2/6/b5/5b/6/2r3 r 1';
var positions = [];
var selectedPos = '3r2/6/b5/5b/6/2r3 r 1';
var rp = [
    [[0,0],[100,0],[200,0],[300,0],[400,0],[500,0]],
    [[0,100],[100,100],[200,100],[300,100],[400,100],[500,100]],
    [[0,200],[100,200],[200,200],[300,200],[400,200],[500,200]],
    [[0,300],[100,300],[200,300],[300,300],[400,300],[500,300]],
    [[0,400],[100,400],[200,400],[300,400],[400,400],[500,400]],
    [[0,500],[100,500],[200,500],[300,500],[400,500],[500,500]]
];
function firstPosition() {
    selectedPos = initialPos;
    render(initialPos);
}
function lastPosition() {
    if (positions !== []) {
        selectedPos = positions[positions.length - 1];
        render(positions[positions.length - 1]);
    }
}
function prev() {
    if (positions.indexOf(selectedPos) === 0) {
        render(initialPos);
    } else {
        console.log(positions[positions.indexOf(selectedPos) - 1]);
        render(positions[positions.indexOf(selectedPos) - 1]);
    }
}
function next() {
    if (positions.indexOf(selectedPos) + 1 <= positions.length - 1) {
        render(positions[positions.indexOf(selectedPos) + 1]);
    }
}
function loadFEN() {
    positions = [];
    const value = document.getElementById('fen').value;
    initialPos = new Amazons(value).fen();
    selectedPos = initialPos;
    render(value);
    document.getElementById('moves').innerHTML = '';
}
function loadPGN() {
    positions = [];
    let builder = '';
    const value = document.getElementById('pgn').value;
    const a = new Amazons(initialPos);
    a.loadPgn(value);
    a.positions().forEach((pos, ind) => {
        if (ind !== 0) {
            positions.push(pos);
            if (ind % 2 !== 0) {
                builder += `<button onclick="render('${pos}')">${Math.round(ind / 2)}. ${a.history()[ind - 1]}</button>`;
            } else {
                builder += `<button onclick="render('${pos}')">${a.history()[ind - 1]}</button><br>`;
            }
        }
    });
    render(a.positions()[a.positions().length - 1]);
    selectedPos = positions[positions.length - 1];
    document.getElementById('moves').innerHTML = builder;
}
function render(fen) {
    let builder = '';
    new Amazons(fen).board().forEach((row, i) => {
        row.forEach((piece, j) => {
            if (piece === 'r') {
                builder += `<div class="square red" style="transform: translate(${rp[i][j][0]}%, ${rp[i][j][1]}%);"></div>`;
            } else if (piece === 'b') {
                builder += `<div class="square blue" style="transform: translate(${rp[i][j][0]}%, ${rp[i][j][1]}%);"></div>`;
            } else if (piece === 'x') {
                builder += `<div class="square fire" style="transform: translate(${rp[i][j][0]}%, ${rp[i][j][1]}%);"></div>`;
            }
        });
    });
    selectedPos = new Amazons(fen).fen();
    document.getElementsByClassName('amazonsboard')[0].innerHTML = builder;
}
render(initialPos);