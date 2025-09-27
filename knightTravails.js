import { knightMoves } from "./knight.js";
import { displayBoard } from "./chessBoard.js";

const args = process.argv.slice(2);
if (args.length !== 2) {
	console.error('Usage: node knighMoves.js "[x1, y1]" "[x2, y2]"');
	process.exit(1);
}

// check if input is valide before parsing
args.forEach(checkValidInput);

function checkValidInput(input) {
	if (!(input[0] === "[" &&
		input[input.length - 1] === "]")) {
		console.log('input must be an array of positions!');
		console.log('Hint: [x,y]')
		process.exit(1);
	}
}

const start = JSON.parse(args[0]);
const end = JSON.parse(args[1]);

function validateInput(positions) {
	// check array and length
	if (!Array.isArray(positions) || positions.length !== 2) {
		console.error("Each position must be an array with 2 numbers: [x,y]");
		process.exit(1);
	}

	// check type and range
	for (let pos of positions) {
		if (Number.isNaN(pos) || typeof pos !== "number" ||
			pos < 0 || pos > 7
		) {
			console.error("Coordinates must be numbers between 0 and 7")
			process.exit(1);
		}
	}
}

[start, end].forEach(validateInput);
const route = knightMoves(start, end);
displayBoard(route);
