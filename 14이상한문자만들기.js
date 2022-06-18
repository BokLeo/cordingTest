function solution(s) {
    var answer = '';
    let arr = s.split(' ');
    let result = '';
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            j%2==0 ? result += arr[i][j].toUpperCase() : result += arr[i][j]=arr[i][j].toLowerCase();
        }   
        result += ' ';
    }    
    return result.substr(0, result.length-1);
}

// 놓친점 :: 문자 전체의 인덱스 번호가 아니라, 띄어쓰기 기준!
// 문자열을 "try", "hello", "world" 배열1로 나누고
// 하나씩 검사해서 result에 집어넣는다                                                      [구직중]
// 배열1의 인덱스 값(i)넘어가면 띄어쓰기 하나 추가
// 마지막 띄어쓰기 삭제

let inputdata = "try hello world";
solution(inputdata);

