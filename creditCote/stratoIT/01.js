function solution(num) {
    var answer = "";    
    let alpha = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    const inputArr = String(num).split("");
    
    inputArr.forEach((element) => {
        answer += alpha[element];
    });
    return answer;
}

let inputdata = 1112;
let inputdata1 = [3,4,5];
let inputdata2 = 2;
solution(inputdata);
