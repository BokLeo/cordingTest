function solution(n) {
    var answer = 0;
    console.log("1 : ", (n+'').split(''), ":: 숫자>문자>배열");
    console.log("2 : ", (n+'').split('').sort((a,b)=>b-a).map(Number), ":: 내림차순 정렬 후 넘버타입으로 형변환");
    console.log("3 : ", (n+'').split('').sort((a,b)=>b-a).map(Number).join().replace(/\,/g,''), ":: 연결해서 꺼낸 후 콤마 지우기");
    console.log("4 : ", Number((n+'').split('').sort((a,b)=>b-a).map(Number).join().replace(/\,/g,'')), ":: 전체 문자열 > 숫자열 변환");
    
    // 콤마(,)의 경우 특수문자이기 때문에 정규표현식을 사용하여 지워준다.

    /*
        + 추가정보 
        js에서는 문자열을 숫자로 변경하고 싶을 경우 1을 곱해주면 된다.
         
        number + string = string    => 1+"" = 문자형
        string * number = number    => "1"*1 = 숫자형
    */
    
    return Number((n+'').split('').sort((a,b)=>b-a).map(Number).join().replace(/\,/g,''));
}

let inputdata = 118372;

solution(inputdata);

