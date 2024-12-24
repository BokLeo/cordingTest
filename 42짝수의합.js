function solution(n) {
	if (n <= 0) return 0; // 음수 또는 0 처리
	
	let count = Math.trunc(n/2);

	let numbers = [];
	while(count > 0){
		numbers.push(count * 2);
		count--;
	}
	
	return numbers.reduce((acc, cur) => acc + cur, 0);
}

solution(10);