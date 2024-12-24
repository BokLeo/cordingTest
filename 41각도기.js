function solution(angle) {
	const num = angle/90
	return num < 1 ? 1 : num === 1 ? 2 : !Number.isInteger(num) ? 3 : 4;
}

solution(91);