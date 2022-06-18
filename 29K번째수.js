function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length; i++){
        answer.push(array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>{
            return a-b
        })[commands[i][2]-1]);
    }
    return answer;
}

let inputdata = "abcdef";
let inputdata1 = [1, 5, 2, 6, 3, 7, 4];
let inputdata2 = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
// [2번째부터, 5번째까지 자르고, 그 배열의 3번째 자리]
solution(inputdata1, inputdata2);
