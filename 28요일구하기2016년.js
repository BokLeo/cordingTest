function solution(a, b) {
    let day = new Date("2016-"+a+"-"+b);
    switch (day.getDay()) {
        case 0:
            return "SUN";
        case 1:
            return "MON";
        case 2:
            return "TUE";
        case 3:
            return "WED";
        case 4:
            return "THU";
        case 5:
            return "FRI";
        case 6:
            return "SAT";
        default:
            break;
    }
}

let inputdata = "abcdef";
let inputdata1 = 5;
let inputdata2 = 24;
solution(inputdata1, inputdata2);
