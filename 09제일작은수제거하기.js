function solution(arr) {
    var answer = [];
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr.length<2 ? [-1] : arr;
}

let inputdata = [4, 3, 2, 1];

solution(inputdata);

