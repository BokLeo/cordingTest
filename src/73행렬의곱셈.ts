/*
	[행렬의 곱셈]
	- 2차원 행렬 arr1, arr2를 입력받아.
	- arr1에 arr2를 곱한 결과 return

	[제한사항]
	- 행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
	- 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
	- 곱할 수 있는 배열만 주어집니다.
*/
function 행렬의곱셈(arr1:number[][], arr2:number[][]){
	let span = arr2[0].length;
	let leng = arr2.length;

	let result = [];

	for(let i=0; i<arr1.length; i++){	
		let newArr = [];
		for(let j=0; j<span; j++){
			
			let num = 0;
			for(let k=0; k<leng; k++){
				num += arr1[i][k] * arr2[k][j];
			}
			newArr.push(num);	
		}
		result.push(newArr);
	}
	return result;	
}

// console.log(행렬의곱셈([[1, 4], [3, 2], [4, 1]],	[[3, 3], [3, 3]])); //	[[15, 15], [15, 15], [15, 15]]
// console.log(행렬의곱셈([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]])); //	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]
console.log(행렬의곱셈([[1, 2, 3], [4, 5, 6]], [[1, 4], [2, 5], [3, 6]])); //	[[14, 32], [32, 77]]


/*
이 문제를 풀기 위해서는 기본적인 선형대수에 대한 지식이 필요할 것입니다.

A는 mn 행렬, B는 nk 행렬이라고 가정합니다. A의 열의 수와 B의 행의 수가 같을 때만 두 행렬을 곱할 수 있습니다.
그러면 일반적으로 행렬 A와 행렬 B를 곱한 행렬 C=AB는 m*k 행렬이 되고 C의 i행 j열의 원소를 다음과 같이 구합니다.

C[i][j] = A[i][1]B[1][j] + A[i][2]B[2][j] + ... + A[i][n]*B[n][j]

💡 행렬 곱하기(선형대수) 공부하고 다시풀자.
	😂 행렬 공부하고 옴.

*/