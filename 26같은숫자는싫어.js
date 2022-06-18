function solution(arr){
    let result = [];
    for(let i=0; i<arr.length; i++) arr[i]!=arr[i+1] ? result.push(arr[i]) : false;
    return result;
}

let inputdata = [1,1,3,3,0,1,1];
let inputdata1 = [3,2,6];
let inputdata2 = 10;
solution(inputdata);
