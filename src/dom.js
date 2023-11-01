    //Put together a script that creates a game board and a knight.
    const chessboard = document.getElementById('chessboard');
    //function to create the chessboard
   export function createChessBoard() {
        
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = document.createElement('div');
                if ((row + col) % 2 === 0) {
                    square.classList.add('white')
                } else {
                    square.classList.add('black')
                }
                square.classList.add('square');
                square.textContent = `[${row},${col}]`;
                chessboard.appendChild(square)
            }
        }
    }
    //helper function to display knights path. displayKnightPath()
    export function displayKnightPath(path) {
        for (let [row,col] of path) {
            const squareIndex = row * 8 + col;
            const square = chessboard.childNodes([squareIndex]);
            square.classList.add('knight')
        }
    }