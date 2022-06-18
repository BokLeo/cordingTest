function solution(n){
    var answer = 0;
    let arr = new Array();
    /* do~while문을 통해 숫자열을 각 자리수의 배열로 만들 수 있다.
        [do~while 반복문]
            - do : while표현식의 결과가 참인 동안 반복적으로 실행하고자 하는 실행문;
            - while : 조건;
            
        조건1. Math.floor()함수는 주어진 숫자와 같거나 작은 정수 중에 가장 큰수를 반환한다.
        조건2. Math.floor(n/10)으로 주어진 값을 10으로 나눈 몫을 n에 대입했을때,
        조건2ex. 123/10 = 12, 12/10 = 1, 1/10 = 0...
        조건3. n이 0보다 크다면 참.
        조건 >>> 반복되는 n값을 10으로 나누었을 때 0 이상이면 참.(1자리수 나오면 종료)

        1. n%10 -> 10으로 나눈 나머지의 값을
        2. arr 배열에 push한다.
    */
    do{
        arr.push(n%10);
    }while(n=Math.floor(n/10), n>0);
    
    // 완성된 배열을 reduce()함수를 사용하여 더하고 그 값을 return 한다.
    /*
        reduce() :: 배열의 각 요소에 대해 주어진 리듀서(reducer)함수를 실행하고, 하나의 결과값을 반환한다.
    */
    const result = arr.reduce((a,b) => a+b);
    
    return result;
}
let inputdata = 123;

solution(inputdata);

