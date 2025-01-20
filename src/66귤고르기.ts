/*
	"귤 고르기"
	- 경화는 과수원에서 귤 수확
	- 수확한 귤 중 k개를 상자 하나에 담아 판매
	- 귤의 크기가 일정하지 않음
	- 수확한 귤 8개의 크기가 [1, 3, 2, 5, 4, 5, 2, 3] 일때
	- 1,4인 귤을 제외하면
	- 크기 2,3,5의 갯수가 균일해짐
	- 귤을 크기별로 분류했을때 서로 다른 종류의 최소 갯수

	- 한 상자에 담으려는 귤의 개수(k)와 귤의 크기를 담은 배열(tangerine) 주어짐
	- return 겨화가 귤 k개를 고를때 크기가 서로 다른 종류의 수의 최솟값 return

	[제한 사항]
	- 1 ≤ k ≤ tangerine의 길이 ≤ 100,000
	- 1 ≤ tangerine의 원소 ≤ 10,000,000

	[입출력 예]
		k	tangerine	result
*/

function 귤고르기(k:number, tangerine:number[]){
	const frequencyMap = tangerine.reduce((acc, num) => {
		acc[num] = (acc[num] || 0) + 1;
		return acc;
	}, {} as Record<number, number>);

	const sortedData = tangerine.slice().sort((a, b) => {
    const freqA = frequencyMap[a];
    const freqB = frequencyMap[b];

    // 빈도수가 많은 순서대로 정렬
    if (freqB !== freqA) {
      return freqB - freqA;
    }

    // 빈도가 같으면 숫자 크기 순으로 정렬
    return a - b;
  });

	let totalSet = new Set();

	// console.log(sortedData);
	for(let i=0; i<sortedData.length; i++){
		if(k - 1 >= 0){
			k -= 1;
			if(!totalSet.has(sortedData[i])) totalSet.add(sortedData[i]);
		}

		if(k===0) break;
	}

	return totalSet.size;

}
// console.log(귤고르기(6,	[1, 3, 2, 5, 4, 5, 2, 3]));	//	3
// console.log(귤고르기(4,	[1, 3, 2, 5, 4, 5, 2, 3]));	//	2
// console.log(귤고르기(2,	[1, 1, 1, 1, 2, 2, 2, 3]));	//	1
// console.log(귤고르기(6,	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3]));	//	1


/*
	- ⭐ keypoint : 무게는 중요하지 않다.
	많은 수부터 바구니에 담는 것이 가장 적은 종류의 수로 넣는 것이다.
	1. 무게당 몇개인지 세기
	2. 많은 수부터 내림차순으로 정렬하기
	3. 앞에서부터 한개씩(개수) 차례로 넣기 -> 가용량이 한개씩(총개수) 줄어드는 것이 중요하다 -> Set에 넣어서 중복 종류를 제한한다.
	4. 합계가 6이되면 Set의 size가 들어간 종류의 갯수이다.
 */