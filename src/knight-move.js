//function to find knights moves using BFS
function knightsMoves(start, end) {
    const moves = [
        [2,1], [2,-1], [-2,1], [-2,-1], [1,2], [1,-2], [-1,2], [-1,-2]
    ];

    const visited = new Set();
    const queue = [[start]];

    while (queue.length > 0) {
        const path = queue.shift();
        const currPosition = path[path.lenght - 1];

        if (currPosition[0] === end[0] && currPosition[1] === end[1]) {
            return path;
        }
        if (!visited.has(currPosition.toSring())) {
            visited.add(currPosition.toSring());

            for (const move of moves) {
                const newRow = currPosition[0] + move[0];
                const newCol  = currPosition[1] + move[1];

                if (newRow > 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                    const newPath = [...path, [newRow, newCol]];
                    queue.push(newPath)
                }
                
            }
        }    
    }
    return []
};
