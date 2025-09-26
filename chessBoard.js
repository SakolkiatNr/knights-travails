import { knighMoves } from "./knight.js";


function chessBoard(moves) {
	let b = board(moves);
	let s = markStrings(b);
	let totalMoves = moves.length - 1;



	console.log('');
	console.log("  ▌ ▌   ▗    ▌  ▐   ▀▛▘           ▗▜    ");
	console.log("  ▙▞ ▛▀▖▄ ▞▀▌▛▀▖▜▀   ▌▙▀▖▝▀▖▌ ▌▝▀▖▄▐ ▞▀▘");
	console.log("  ▌▝▖▌ ▌▐ ▚▄▌▌ ▌▐ ▖  ▌▌  ▞▀▌▐▐ ▞▀▌▐▐ ▝▀▖");
	console.log("  ▘ ▘▘ ▘▀▘▗▄▘▘ ▘ ▀   ▘▘  ▝▀▘ ▘ ▝▀▘▀▘▘▀▀ ");

	console.log('');
	console.log('   +---+---+---+---+---+---+---+---+');
	console.log(' 0 |', s[0]);
	console.log('   |---+---+---+---+---+---+---+---|');
	console.log(' 1 |', s[1]);
	console.log('   |---+---+---+---+---+---+---+---|');
	console.log(' 2 |', s[2]);
	console.log('   |---+---+---+---+---+---+---+---|');
	console.log(' 3 |', s[3]);
	console.log('   |---+---+---+---+---+---+---+---|');
	console.log(' 4 |', s[4]);
	console.log('   |---+---+---+---+---+---+---+---|');
	console.log(' 5 |', s[5]);
	console.log('   |---+---+---+---+---+---+---+---|');
	console.log(' 6 |', s[6]);
	console.log('   |---+---+---+---+---+---+---+---|');
	console.log(' 7 |', s[7]);
	console.log('   +---+---+---+---+---+---+---+---+');
	console.log('     0   1   2   3   4   5   6   7');
	console.log('   =================================')

	console.log(`From [${moves[0]}] to [${moves[moves.length - 1]}]`);
	console.log(`Made it in ${totalMoves} moves! here's the shortest path:`);
	printPath(moves);

}

function board(moves) {
	let board = Array.from({ length: 8 }, () => new Array(8));
	board.forEach((row) => row.fill(' '));

	// render marks on the board
	let count = 0;
	moves.forEach(element => {
		let [x, y] = element;
		// first element
		if (element === moves[0]) {
			board[x][y] = 'S';
			return;
		}

		// if (element === moves[moves.length - 1]) {
		// 	board[x][y] = 'E';
		// 	return;
		// }

		board[x][y] = ++count;
	});

	return board;
}

function markStrings(board) {
	let strings = [];

	board.forEach((row) => {
		let string = '';

		for (let i = 0; i < 8; i++) {
			if (i == 0) {
				string += `${row[0]} `;
				continue;
			}

			if (i == 7) {
				string += `| ${row[7]} |`;
				continue;
			}

			string += `| ${row[i]} `;
		}

		strings.push(string);
	});

	return strings;
}

function printPath(moves) {
	console.log('Start');
	moves.forEach((move) => console.log(move));
	console.log('End');
}

let moves = knighMoves([0, 0], [7, 7]);
chessBoard(moves);
