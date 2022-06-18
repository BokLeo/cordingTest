function solution(n) {
    return Number.parseInt(n.toString(3).toString().split("").reverse().join(''), 3);
}

let inputdata = 45;

solution(inputdata);
