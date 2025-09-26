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
	// check tree for each move
	// if found end location
	// return array of moves

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

	const getKnightMoves = () => getValidMoves(startLoc);

	return { getKnightMoves }

}


console.log(knighMoves([0, 1]).getKnightMoves());








