function solution(strings, n) {
    var answer = strings;
    answer.sort((a,b)=>{
        return a[n]>b[n] ? 1 : a[n]<b[n] ? -1 : a<b ? -1 : 1;
    });
    return console.log(answer);
}
let inputdata = ["sun", "bed", "car"];
let inputdata1 = ["sun", "bed", "car"];
let inputdata2 = 1;
solution(inputdata1, inputdata2);
