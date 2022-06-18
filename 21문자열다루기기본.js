function solution(s) {
    var answer = true;
    if(s.length===4||s.length===6){
        for(e in s) isNaN(+s[e]) ? answer=false : answer;
    }else{
        answer=false;
    }

    return answer;
}

let inputdata = "a234";
solution(inputdata);


function test(s){
        
    let arr1 = [1,2,3,4,5,6];
/////[  불가  ]//////////////////////////////////////////////
    // 삼항+for in
    s.length===4||s.length===6 ? (
        /*
            삼항연산자에는 값을 반환하는 식이 와야한다.
            하지만 아래의 for문은 식을 반환하는 형태가 아니다.
        */
        for(e in arr1) console.log(arr1[e])
    ) : false;
/////[  가능  ]//////////////////////////////////////////////
    // if문+for in
    if(s.length===4||s.length===6){
        /*
        scope과 관련있다.
        {}(블록)내부에서는 지역변수 할당 가능.
            ※ 위 삼항에서는 블록단위가 아니라 지역변수가 불가능하여 for문 부적격?? 
        */
        for(e in arr1) console.log(arr1[e]);
    }else{
        false;
    }
/////[  가능  ]//////////////////////////////////////////////
    // 생코방 답변
    s.length===4||s.length===6 ? (
        arr1.map(v=>console.log(v))) : false;
}