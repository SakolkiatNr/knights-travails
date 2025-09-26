
import { displayBoard } from "./chessBoard.js";

export function knighMoves(startLoc, endLoc) {
	// implementing Breadth-first search

	const getValidMoves = (startLocation) => {
		const [x, y] = startLocation;
		let edgeList = [
			[x - 2, y - 1], [x - 2, y + 1],
			[x - 1, y - 2], [x - 1, y + 2],
			[x + 1, y - 2], [x + 1, y + 2],
			[x + 2, y - 1], [x + 2, y + 1],
		];

		return edgeList.filter(([nx, ny]) => {
			return nx >= 0 && nx < 8 && ny >= 0 && ny < 8
		});
	}

	const searchEnd = (start, target) => {
		// adjacency list
		let visited = Array.from(new Array(8), () => []);
		let que = [[start]];

		while (que.length > 0) {
			let path = que.shift();
			let currentMove = path[path.length - 1];
			let [x, y] = currentMove;

			visited[x].push(y);

			// found target
			if (x === target[0] && y === target[1]) {
				return path;
			}

			// next possibilities
			const validMoves = getValidMoves(currentMove);

			// filter visited cells
			const possibilities = validMoves.filter((move) =>
				!visited[move[0]].includes(move[1]));

			// explore
			for (let move of possibilities) {
				let nextPath = path.slice();
				nextPath.push(move);
				que.push(nextPath);
			}
		}

		return null; // not possible in this case but ok
	}

	const shortestPath = () => searchEnd(startLoc, endLoc);
	let a = shortestPath();

	return a;
}


let test = knighMoves([0, 0], [7, 7]);
displayBoard(test);
