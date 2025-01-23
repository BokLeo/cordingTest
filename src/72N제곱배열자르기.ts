/*	
	"N^2 배열 자르기"
	- 정수 n, left, right를 가지고 1차원 배열만들기
		1. n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
		2. i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
		3. 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
		4. 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
		5. 새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.

		[제한 사항]
		- 1 ≤ n ≤ 107
		- 0 ≤ left ≤ right < n2
		- right - left < 105
*/

function N제곱배열만들기(n:number, left:number, right:number){
	let arr: number[] = [];

	for(let i=left; i<=right; i++){
		let 몫 = Math.floor(i/n);
		let 나머지 = i % n;
		// console.log(`${몫} ... ${나머지}`);

		// ############################################ 첫답
		// if(몫 === 0){
		// 	arr.push(나머지+1);
		// }else{
		// 	if(나머지 === 0 || 나머지 <= 몫){
		// 		arr.push(몫+1);
		// 	}else{
		// 		arr.push((몫+1)+(나머지-몫));
		// 	}
		// }

		// ############################################ 줄이기
		// if(몫 !== 0 && (나머지 === 0 || 나머지 <= 몫)){
		// 	arr.push(몫+1);
		// }else{
		// 	arr.push(나머지+1);
		// }

		// ############################################ 더 줄이기
		몫 !== 0 && (나머지 === 0 || 나머지 <= 몫) ? arr.push(몫 + 1) : arr.push(나머지 + 1);
	}

	return arr;
}

console.log(N제곱배열만들기(3, 2, 5)); //	[3,2,2,3]
// console.log(N제곱배열만들기(4, 7, 14)); //	[4,3,3,3,4,4,4,4]
// console.log(N제곱배열만들기(5, 4, 6)); //	[5,2,2]
// console.log(N제곱배열만들기(10000000, 99999999999, 99999999999)); //	[10000000]
// console.log(N제곱배열만들기(4, 0, 15)); //	 [1, 2, 3, 4, 2, 2, 3, 4, 3, 3, 3, 4, 4, 4, 4, 4]


/*
	"후기"
	- 😢 와... 하루 종일 걸림....
	- 배열을 만들어서 잘라내는 풀이는 빠르게 함
	- 그러나, time out으로 그렇게 푸는게 아니라는 것을 암
	- 화이트 보드에 적어가며 규칙 파악 들어감.
	- 규칙은 이해했는데... 식을 만드는 과정에서 한참 오버타임....
	- 내가 잘하는 방정식 만들어서 풀려다가 와따메... 그래서 그냥 케이스 별로 if문으로 차근차근 나누고 마지막에 리팩토링함...

	- '나머지+1'은 나머지>몫 일때가 반복이 끝나는 지점인 사항을 발견하여
	- '몫+1' 이 반복되는 값이고
	- '나머지-몫' 추가값인점을 확인하여
	- 최종 '(몫+1)+(나머지-몫)' 이라는 수식을 세운뒤 절삭함.

	0 	[0 ... 0]		1
	1 	[0 ... 1]		2
	2 	[0 ... 2]		3
	3 	[0 ... 3]		4
	-----------------
	4 	[1 ... 0]		2
	5 	[1 ... 1]		2
	6 	[1 ... 2]		3
	7 	[1 ... 3]		4
	-----------------
	8 	[2 ... 0]		3
	9 	[2 ... 1]		3
	10	[2 ... 2]		3
	11	[2 ... 3]		4
	-----------------
	12	[3 ... 0]		4
	13	[3 ... 1]		4
	14	[3 ... 2]		4
	15	[3 ... 3]		4
*/