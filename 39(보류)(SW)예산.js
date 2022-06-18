// 순열 구하기
const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
      // 해당하는 fixed를 제외한 나머지 배열 
      const permutations = getPermutations(rest, selectNumber - 1); 
      // 나머지에 대해서 순열을 구한다.
      const attached = permutations.map((el) => [fixed, ...el]); 
      //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });

    return results;
}

// 조합 구하기
function combination(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixed = v;
      const restArr = arr.slice(idx + 1);
      const combinationArr = combination(restArr, selectNum - 1);
      const combineFix = combinationArr.map((v) => [fixed, ...v]);
      result.push(...combineFix);
    });

    return result;
  }

function solution(d, budget) {
    var answer = [];
    const line = d.sort((a,b)=>a-b);
    let minPlue=0;
    let count = 0;


    for(let i=0; i<line.length; i++){    
        minPlue += line[i];
        if(minPlue>budget) {
            count = i;
            break;
        }else{
            count = line.length;
            break;
        }
    }
    if(count===0) return 0;

    for(let i=count+1; i>0; i--){
        combination(d,i).forEach((arr)=>{
            let sum = arr.reduce((a, b) => a + b, 0);
            sum<=budget ? answer.push(arr) : false;
        })
    }

    const set = new Set();
    answer.forEach((arr)=>{
        set.add(arr.length);
    });
    

    return console.log(Math.max(...[...set]));
}

let inputdata1 = [3,4,5];
let inputdata2 = 2;
solution(inputdata1, inputdata2);
