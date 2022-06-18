function solution(n) {
    var answer = [];
    // 숫자열에 ('')을 더해준다.
    console.log("1 : ", typeof(n), ":: 들어온 타입은 숫자이다");
    console.log("2 : ", typeof((n+'')), ":: ('')을 더하여 문자열로 만들어준다" );
    console.log("3 : ", (n+'').split(''), ":: 문자열을 나눠준다");
    console.log("4 : ", (n+'').split('').map(Number), ":: 나눠진 문자를 숫자로 바꿔준다");
    console.log("5 : ", (n+'').split('').map(Number).reverse(), ":: 배열의 역행");
    
    // 만약 들어온 숫자가 뒤죽박죽이라면?
    // 5번식에서 문제 발생
    // sort()함수 사용 :: sort함수란 배열을 오름차순/내림차순으로 정렬하는 함수다.
    // arr.sort(function(a,b){ return a-b; }) :: 오름차순
    // arr.sort(function(a,b){ return b-a; }) :: 내림차순
    console.log("6 : ", (n+'').split('').map(Number).sort(function(a, b){
        return a - b;
    }), ":: 오름차순 정렬");
    console.log("6 : ", (n+'').split('').map(Number).sort(function(a, b){
        return b - a;
    }), ":: 내림차순 정렬");

    // 하지만 문제는 뒤집기 문제임으로(정렬X) 아래 답이 정답이다.
    return (n+'').split('').map(Number).reverse();
}

let inputdata = 12345;

solution(inputdata);

