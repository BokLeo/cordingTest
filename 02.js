const arr1 = [[1],[2]];
const arr2 = [[3],[5]];
function solution(arr1, arr2) {
    var answer = [];
    for(let i=0; i<arr1.length; i++){
        let tmp = [];
        for(let j=0; j<arr1[i].length; j++){
            tmp.push(arr1[i][j]+arr2[i][j]);
        }
        answer.push(tmp);
    }
    return answer;
}
solution(arr1, arr2);