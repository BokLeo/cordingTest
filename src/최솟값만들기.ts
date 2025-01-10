function solution(A:number[],B:number[]){
	A.sort((a,b)=>a-b);
	B.sort((a,b)=>b-a);

	let sum = 0;
	
	A.forEach((v, i, arr)=>{
		sum += v * B[i];
	})

	return sum;
}

// [1, 4, 2]	[5, 4, 4]	29
// [1,2]	[3,4]	10

console.log(solution([1, 4, 2], [5, 4, 4])); // => 29
console.log(solution([1,2],	[3,4]));	// => 10