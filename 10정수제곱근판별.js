function solution(n) {
    var answer = 0;
    let num = Math.sqrt(n); // Math.sqrt함수는 숫자의 제곱근을 반환한다.
    return num%1===0 ? Math.pow((num+1), 2) : -1;
}

let inputdata = 121;

solution(inputdata);

