function solution(s) {
    const mok = Math.floor(s.length/2);
    return s.length%2==1 ? s[mok] : s[mok-1]+s[mok];
}

let inputdata = "abcdef";
let inputdata1 = [3,2,6];
let inputdata2 = 10;
solution(inputdata);
