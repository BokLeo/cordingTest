function solution(s) {
    var answer = '';
    for(let i=0; i<s.length-4; i++) answer += "*";
    return answer + s.slice(-4);
}

let phone_number = "0123456789";

solution(phone_number);