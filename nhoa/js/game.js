const game = new T3();
let humanPlaysX = true;
function reset () {
    game.reset();
}
function playX() {
    humanPlaysX = true;
    document.getElementById('info').innerHTML = 'Click any button to reset';
    reset();
    renderBoard();
}
function playO() {
    humanPlaysX = false;
    document.getElementById('info').innerHTML = 'Click any button to reset';
    reset();
    const bestMove = Nhoa.getBestMove(game.board(), 10, true);
    game.move(
        [
            'a3',
            'b3',
            'c3',
            'a2',
            'b2',
            'c2',
            'a1',
            'b1',
            'c1'
        ].findIndex(coord => coord === bestMove)
    );
    renderBoard();
}
function addListeners() {
    Array.from(document.getElementsByClassName('e')).forEach(square => {
        square.addEventListener('click', () => {
            game.move(
                [
                    'a3',
                    'b3',
                    'c3',
                    'a2',
                    'b2',
                    'c2',
                    'a1',
                    'b1',
                    'c1'
                ].findIndex(coord => coord === square.id)
            );
            if (game.isDraw()) document.getElementById('info').innerHTML = 'Draw';
            else if (game.xWon()) document.getElementById('info').innerHTML = 'X won!';
            else if (game.oWon()) document.getElementById('info').innerHTML = 'O won!';
            else {
                const bestMove = Nhoa.getBestMove(game.board(), 10, !humanPlaysX);
                game.move(
                    [
                        'a3',
                        'b3',
                        'c3',
                        'a2',
                        'b2',
                        'c2',
                        'a1',
                        'b1',
                        'c1'
                    ].findIndex(coord => coord === bestMove)
                );
            }
            if (game.isDraw()) document.getElementById('info').innerHTML = 'Draw';
            else if (game.xWon()) document.getElementById('info').innerHTML = 'X won!';
            else if (game.oWon()) document.getElementById('info').innerHTML = 'O won!';
            renderBoard();
        });
    });
}
function renderBoard() {
    document.getElementById('board').innerHTML = '';
    let builder = '';
    const ids = ['a3', 'b3', 'c3', 'a2', 'b2', 'c2', 'a1', 'b1', 'c1'];
    game.board().forEach((piece, pos) => {
        if (piece === 0) builder += `<div id="${ids[pos]}" class="square e"></div>`;
        if (piece === 1) builder += `<div id="${ids[pos]}" class="square x"></div>`;
        if (piece === 2) builder += `<div id="${ids[pos]}" class="square o"></div>`;
    });
    document.getElementById('board').innerHTML = builder;
    if (!game.isDraw() && !game.xWon() && !game.oWon()) addListeners();
}
renderBoard();