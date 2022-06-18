function solution(n, m) {
    var answer = [];
    gcd = (n, m)=>{
        let r = m%n;
        r != 0 ? gcd(r, n) : answer[0] = n;
    };
    gcd(n, m);
    lcm = (n, m)=> n*m;
    answer[1] = lcm(n,m)/answer[0];

    return answer;
}



let inputData = 626331;
solution(3, 12);

