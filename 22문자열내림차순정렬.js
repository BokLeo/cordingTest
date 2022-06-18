function solution(s) {
    var answer = [];
    for(e in s) answer.push(s.charCodeAt(e));
    answer.sort((a,b)=>{
        return b-a;
    })
    for(e in answer) answer[e]=String.fromCharCode(answer[e]);    
    return console.log(answer.join(''));
}

let inputdata = "ZaBYcasldKa";
solution(inputdata);


////////////////////////
/* 
미친답이다...
sort는 유니코드 기반으로 정렬하기 때문에?
뭐 상관없다?
굳이 split을 해야하나?
걍 sort로 정렬하고 돌리고 연결하면 되지 않을까?
    => 안됨. sort는 array(배열)에 내장되어있는 함수이다.
*/
function solution1(s) {
  return s
    .split("")  // 배열변환하고?
    .sort()     // 정렬하고?
    .reverse()  // 돌리고?
    .join("");  // 연결?
}