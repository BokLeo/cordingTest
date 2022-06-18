function solution(n) {
    var answer = 0;
    let sum = n;
    for(let i=1; i<=(n/2); i++){
        (n/i)==1 || (n%i)==0 ? sum += i : false;
    }
    return sum;
}