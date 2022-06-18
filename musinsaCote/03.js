function solution(records, k, date) {
    var answer = [];
    
    let arr = {};
    for(let i=0; i<records.length; i++){
        arr[i] = {
            orderDate : records[i].split(' ')[0],
            orderUid : records[i].split(' ')[1],
            orderPid : records[i].split(' ')[2]    
        }
    }
    console.log(arr);
    let dday = new Date(date);
    dday.setDate(dday.getDate()+k);
    console.log(dday);


    return answer;
}

let records = ["2020-02-02 uid141 pid141", "2020-02-03 uid141 pid32", "2020-02-04 uid32 pid32", "2020-02-05 uid32 pid141"];
let k = 10;
let date = 	"2020-02-05";

solution(records, k, date);

