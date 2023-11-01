//function to find knights moves using BFS
export function knightMoves(start, end) {
  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const visited = new Set();
  const queue = [[start]];

  while (queue.length > 0) {
    const path = queue.shift();
    const currentPosition = path[path.length - 1];

    if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
      return path;
    }
    if (!visited.has(currentPosition.toString())) {
      visited.add(currentPosition.toString());
      for (const move of moves) {
        const newRow = currentPosition[0] + move[0];
        const newCol = currentPosition[1] + move[1];

        if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
          const newPath = [...path, [newRow, newCol]];
          queue.push(newPath);
        }
      }
    }
  }

  return [];
}
