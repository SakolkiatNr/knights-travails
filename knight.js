let chessboard = [
	/*
	 0  1  2  3  4  5  6  7 */
	[0, 2, 0, 2, 0, 0, 0, 0], // 0 
	[2, 0, 0, 0, 2, 0, 0, 0], // 1
	[0, 0, 1, 0, 0, 0, 0, 0], // 2
	[2, 0, 0, 0, 2, 0, 0, 0], // 3
	[0, 2, 0, 2, 0, 0, 0, 0], // 4
	[0, 0, 0, 0, 0, 0, 0, 0], // 5
	[0, 0, 0, 0, 0, 0, 0, 0], // 6
	[0, 0, 0, 0, 0, 0, 0, 0], // 7
]

function knighMoves(startLoc, endLoc) {
	// check for valid moves
	// store in array
	// check tree for each move
	// if found end location
	// return array of moves


	const [x, y] = startLoc;
	let moves = [
		[x - 2, y - 1], [x - 2, y + 1],
		[x - 1, y - 2], [x - 1, y + 2],
		[x + 1, y - 2], [x + 1, y + 2],
		[x + 2, y - 1], [x + 2, y + 1],
	];

	let validMoves = edgeList.filter(([nx, ny]) => {
		return nx >= 0 && nx < 8 && ny >= 0 && ny < 8
	})

	console.log(validMoves);

}

knighMoves([0, 0]);











