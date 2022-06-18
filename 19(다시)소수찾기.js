// 개인적인 시도에서는 속도 초과 발생.
/*
문제의 의도]
    O(N)의 시간복잡도를 알고있는가?
    O(N)의 시간복잡도를 최적화 할 수 있는가?

    에라토스테네스의 체(현재까지의 소수를 제거하는 가장 빠른 알고리즘)
    - 소수의 배수는 모든 소수가 아닌 수 이다.
    - 제곱근의 이하의 소수만 구한다면
    - 그 배수들은 더이상 검사 할 필요가 없다.

나의 실수]
    1~n까지의 불필요한 검사에 의해 시간복잡도가 증가했다. << 시간초과
*/

// 첫번째 풀이(MyFail ++ 추가 수정)
function solution(n) {
    let answer = [];
    // 소수를 판별하는 함수를 생성하였다.
    const sosu = (e) => {
        // (검사할 수)%(제곱근 이하의 수들)==0 이라면 나누어 떨어지기 때문에 소수가 아니다.
        // 100%5==0 => 100은 소수가 아니다.
        // 101%(1,2,3...8,9,10)!=0 => 101은 소수다.
        for(let i=2; i<=Math.sqrt(e); i++){
            // 만약 소수가 아니라면 false반환 끝.
            if(e%i==0) return false;
        }
        // 위 경우가 아닐경우(소수)면 true반환.
        return true;
    }
    
    for(let i=2; i<=n; i++){
        // 입력된 수 이하의 값을 sosu함수에 넣어본다.
        // 결과로 입력수의 소수일때 true가 반환되고,
        // answer에 저장되게 된다.
        if(sosu(i)) answer.push(i);
    };

    return answer.length;
}

// 두번째 풀이(풀이 검색 후 에라토스테네스의 체 사용)
/*
    에라토스테네스의 체는 숫자 집합에서 배수들을 제거하는 방법이다(체로 거르는 모습)
    1. 입력된 수 만큼의 크기를 가진 배열을 생성한다.(0번 포함 => n+1)
        수와 번호를 동일하게 하기위해서(배열은 0부터)
    2. 소수에 포함되지 않는 0과 1을 제외하고 true로 초기화(0과1은 false)
        arr = [false, false, true, true...]
    3. arr[i]번째에 false가 들어있다면 넘어간다.
    4. 입력값의 제곱근 이하 소수들의 배수를 삭제한다.
        └why? 
            - 4,6,8... (2의 배수로서 삭제된다) 
            - 6,9,12... (3의 배수로서 삭제된다) 
            - 10,15,20... (5의 배수로서 삭제된다) 
            - 14,21,28... (7의 배수로서 삭제된다) 
            삭제된 수 : 4,6,8,9,10,12,14,15,16,18,20,21...
            남은 수 : 2,3,5,7,11,13,17,19... ★ 소수!
*/
function solution(n) {
    let answer = [];
    const arr = [];
    arr.length = n+1;
    arr.fill(true).splice(0,2,false,false);

    for(let i=2; i<=Math.sqrt(n); i++){
        if(arr[i]==false) continue;
        // j는 i의 배수
        // i==2 => j==4 why? 2는 소수이기 때문에 pass
        // j+=i why? 4+2, 6+2, 8+2... 2의 배수 이하 동.
        // 제곱근 이하 소수들의 배수들은 false처리한다.
        for(let j=i*i; j<=n; j+=i){
            arr[j] = false;
        }
    }

    // arr배열 중 값이 'true'인 경우 번호를 answer에 넣는다.
    arr.forEach(function(value, i){ // value=='값', i=='순서번호'
        value==true ? answer.push(i) : false;
    })

    // 소수값과 번호가 동일하기 때문에 번호를 answer에 넣고 
    // answer에는 소수들이 들어가 있다.
    // 길이를 return 해준다.
    return answer.length;
}

let inputdata = 11;
solution(inputdata);