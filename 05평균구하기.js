function solution(s){
    var answer = '';
    return s.reduce((x,y) => x+y) / s.length;
}

let inputData = [1,2,3,4];
solution(inputData);
