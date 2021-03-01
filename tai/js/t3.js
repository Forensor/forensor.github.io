"use strict";
class T3 {
    constructor(board = [0, 0, 0, 0, 0, 0, 0, 0, 0], turn = true) {
        this._board = board;
        this._turn = turn;
    }
    board() {
        return this._board;
    }
    move(pos) {
        if (this._turn)
            this._board[pos] = 1;
        else
            this._board[pos] = 2;
        this._turn = !this._turn;
    }
    moves() {
        let posMoves = [];
        this._board.forEach((piece, pos) => {
            if (piece === 0)
                posMoves.push(pos);
        });
        return posMoves;
    }
    reset() {
        this._board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this._turn = true;
    }
    turn() {
        return this._turn;
    }
    xWon() {
        if (this._board[0] === 1 && this._board[1] === 1 && this._board[2] === 1)
            return true;
        if (this._board[3] === 1 && this._board[4] === 1 && this._board[5] === 1)
            return true;
        if (this._board[6] === 1 && this._board[7] === 1 && this._board[8] === 1)
            return true;
        if (this._board[0] === 1 && this._board[3] === 1 && this._board[6] === 1)
            return true;
        if (this._board[1] === 1 && this._board[4] === 1 && this._board[7] === 1)
            return true;
        if (this._board[2] === 1 && this._board[5] === 1 && this._board[8] === 1)
            return true;
        if (this._board[0] === 1 && this._board[4] === 1 && this._board[8] === 1)
            return true;
        if (this._board[2] === 1 && this._board[4] === 1 && this._board[6] === 1)
            return true;
        return false;
    }
    oWon() {
        if (this._board[0] === 2 && this._board[1] === 2 && this._board[2] === 2)
            return true;
        if (this._board[3] === 2 && this._board[4] === 2 && this._board[5] === 2)
            return true;
        if (this._board[6] === 2 && this._board[7] === 2 && this._board[8] === 2)
            return true;
        if (this._board[0] === 2 && this._board[3] === 2 && this._board[6] === 2)
            return true;
        if (this._board[1] === 2 && this._board[4] === 2 && this._board[7] === 2)
            return true;
        if (this._board[2] === 2 && this._board[5] === 2 && this._board[8] === 2)
            return true;
        if (this._board[0] === 2 && this._board[4] === 2 && this._board[8] === 2)
            return true;
        if (this._board[2] === 2 && this._board[4] === 2 && this._board[6] === 2)
            return true;
        return false;
    }
    isDraw() {
        return this.moves().length === 0;
    }
}