function solution(sizes) {
    let arr = [];
    sizes.forEach((e)=>{
        arr.push(e.sort((a,b)=>{
            return b-a;
        }));
    });

    let W = [];
    let H = [];

    arr.flat().forEach((e, i) => {
        i%2==0 ? W.push(e) : H.push(e); 
    }); 

    return Math.max(...W)*Math.max(...H);
}


let inputdata = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];
solution(inputdata);