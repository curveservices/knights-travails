import { displayKnightPath } from "./dom";
import { knightMoves } from "./knight-move";

const start = [0, 0];
const end = [7, 7];
const path = knightMoves(start, end);

export function handleText() {
  const displayMoves = document.getElementById("moves");
  if (path.length > 0) {
    displayKnightPath(path);
    displayMoves.textContent = `Knight made it in ${
      path.length - 1
    } moves! Here's the path:\n${path.map((pos) => `[${pos}]`).join("\n")}`;
  } else {
    alert("No valid path found.");
  }
}
