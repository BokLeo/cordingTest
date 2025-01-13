function 최댓값과최솟값(s:string) {

	let arr = s.split(' ').map(item=>Number(item));
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	
	return `${min} ${max}`;
}

console.log(최댓값과최솟값(	"1 2 3 4")); // "1 4"
console.log(최댓값과최솟값(	"-1 -2 -3 -4")); // "-4 -1"