/*
	[문제 설명]
	- 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 한다.
		> n의 다음 큰 숫자는 n보다 큰 자연수.
		> n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같다.
		 	=> 0을 제거했을때 1의 갯수가 동일하다.
		> n의 다음 큰 숫자는 조건 1,2를 만족하는 수 중 가장 작은 수.

	[제한 사항]
	n은 1,000,000 이하의 자연수 입니다.

	[입출력 예]
	n	result
	78	83
	15	23

	[입출력 예 설명]
	입출력 예#1
	문제 예시와 같습니다.
	입출력 예#2
	15(1111)의 다음 큰 숫자는 23(10111)입니다.

*/

function 다음큰숫자(n:number) : number{
	const getBinaryOneCnt = (param:number) : number => {
		return param.toString(2).match(/1/g)?.length || 0;
	}
	
	let basicValueOneCnt:number = getBinaryOneCnt(n);
	while(true){
		++n;
		if(getBinaryOneCnt(n) === basicValueOneCnt) return n;
	}
}

console.log(다음큰숫자(15));