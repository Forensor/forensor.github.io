"use strict";
class Nhoa {
    static getBestMove(node, depth, max) {
        let bestMove = '';
        let bestValue = 0;
        if (max) {
            bestValue = Number.NEGATIVE_INFINITY;
            this.childs(node, max).forEach((child, ind) => {
                const value = this.alphabeta(child, depth, bestValue, Number.POSITIVE_INFINITY, false);
                if (value > bestValue) {
                    bestValue = value;
                    bestMove = this.iMoves(node)[ind];
                }
            });
        }
        else {
            bestValue = Number.POSITIVE_INFINITY;
            this.childs(node, max).forEach((child, ind) => {
                const value = this.alphabeta(child, depth, Number.NEGATIVE_INFINITY, bestValue, true);
                if (value < bestValue) {
                    bestValue = value;
                    bestMove = this.iMoves(node)[ind];
                }
            });
        }
        return bestMove;
    }
    static alphabeta(node, depth, a, b, max) {
        if (this.xWon(node))
            return 1;
        if (this.oWon(node))
            return -1;
        if (this.childs(node, max).length === 0)
            return 0;
        if (depth === 0)
            return 0;
        if (max) {
            let value = Number.NEGATIVE_INFINITY;
            for (let child of this.childs(node, max)) {
                value = Math.max(value, this.alphabeta(child, depth - 1, a, b, false));
                a = Math.max(a, value);
                if (a >= b)
                    break;
            }
            return value;
        }
        else {
            let value = Number.POSITIVE_INFINITY;
            for (let child of this.childs(node, max)) {
                value = Math.min(value, this.alphabeta(child, depth - 1, a, b, true));
                b = Math.min(b, value);
                if (a >= b)
                    break;
            }
            return value;
        }
    }
    //  0 | 1 | 2
    // -----------
    //  3 | 4 | 5 
    // -----------
    //  6 | 7 | 8 
    static xWon(node) {
        if (node[0] === 1 && node[1] === 1 && node[2] === 1)
            return true;
        if (node[3] === 1 && node[4] === 1 && node[5] === 1)
            return true;
        if (node[6] === 1 && node[7] === 1 && node[8] === 1)
            return true;
        if (node[0] === 1 && node[3] === 1 && node[6] === 1)
            return true;
        if (node[1] === 1 && node[4] === 1 && node[7] === 1)
            return true;
        if (node[2] === 1 && node[5] === 1 && node[8] === 1)
            return true;
        if (node[0] === 1 && node[4] === 1 && node[8] === 1)
            return true;
        if (node[2] === 1 && node[4] === 1 && node[6] === 1)
            return true;
        return false;
    }
    static oWon(node) {
        if (node[0] === 2 && node[1] === 2 && node[2] === 2)
            return true;
        if (node[3] === 2 && node[4] === 2 && node[5] === 2)
            return true;
        if (node[6] === 2 && node[7] === 2 && node[8] === 2)
            return true;
        if (node[0] === 2 && node[3] === 2 && node[6] === 2)
            return true;
        if (node[1] === 2 && node[4] === 2 && node[7] === 2)
            return true;
        if (node[2] === 2 && node[5] === 2 && node[8] === 2)
            return true;
        if (node[0] === 2 && node[4] === 2 && node[8] === 2)
            return true;
        if (node[2] === 2 && node[4] === 2 && node[6] === 2)
            return true;
        return false;
    }
    static childs(node, max) {
        let states = [];
        node.forEach((piece, pos) => {
            if (piece === 0)
                states.push(this.replace(node, pos, max));
        });
        return states;
    }
    static replace([x, ...xs], pos, max) {
        if (x === undefined)
            return [];
        if (pos === 0)
            return [max ? 1 : 2].concat(xs);
        return [x].concat(this.replace(xs, pos - 1, max));
    }
    static iMoves(node) {
        let iChilds = [];
        node.forEach((piece, pos) => {
            if (piece === 0)
                iChilds.push(['a3', 'b3', 'c3', 'a2', 'b2', 'c2', 'a1', 'b1', 'c1'][pos]);
        });
        return iChilds;
    }
}