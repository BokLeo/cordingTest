function solution(a, b) {
    let sum = 0;
    for(let i=0; i<a.length; i++) sum += (a[i]*b[i]);
    return sum;
}

let inputdata1 = [-1,0,1];
let inputdata2 = [1,0,-1];
solution(inputdata1, inputdata2);