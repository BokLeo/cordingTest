function solution(arr, divisor) {
    var answer = [];
    arr.forEach(element => {
        element%divisor==0 ? answer.push(element) : -1; 
    });
    return answer.length==0 ? answer=[-1] : answer.sort((a,b)=>{
        return a-b;
    });
}
let inputdata = ["sun", "bed", "car"];
let inputdata1 = [3,2,6];
let inputdata2 = 10;
solution(inputdata1, inputdata2);
