function solution(s){
    var answer = true;

    let searchP =  s.toLowerCase().match(/p/g);
    let searchY =  s.toLowerCase().match(/y/g);

    searchP ? (
        searchY ? (
            (searchP.length === searchY.length) ? answer=true : answer=false
        ) : answer=false
    ) : searchY ? answer=false : answer=true;

    return answer;
   
}