function solution(left, right) {
    var answer = [];
    for(let i=left; i<=right; i++) answer.push(i);
    let sum = 0;

    answer.forEach(element => {
        Number.isInteger(Math.sqrt(element)) ? sum += (element*-1) : sum += element;
    });
    return sum;
}
let inputdata1 = 13;
let inputdata2 = 17;
solution(inputdata1, inputdata2);