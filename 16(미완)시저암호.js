function solution1(s, n) {
    var answer = '';
    let arr = s.split('');
    let arr2 = [];

    const cal = (n) => n=n-25;
    let num = n<25 ? n : cal(n);

    for(let e of arr){
        console.log("현재 e는 ? ", e, e.charCodeAt());
        console.log("현재 num는 ? ", num);
        
            e.charCodeAt() === 32 ? arr2.push(" ") : 
            (e.charCodeAt()>31&&e.charCodeAt()<91)&&e.charCodeAt()+num>90 ? arr2.push(String.fromCharCode(64+num)) : 
            (e.charCodeAt()>31&&e.charCodeAt()<91)&&e.charCodeAt()+num<91 ? arr2.push(String.fromCharCode(e.charCodeAt()+num)) : 
            (e.charCodeAt()>96&&e.charCodeAt()<123)&&e.charCodeAt()+num>122 ? arr2.push(String.fromCharCode(96+num)) : 
            (e.charCodeAt()>96&&e.charCodeAt()<123)&&e.charCodeAt()+num<123 ? arr2.push(String.fromCharCode(e.charCodeAt()+num)) : 
                arr2.push(String.fromCharCode(e.charCodeAt()+n));

        console.log("test1 : ", arr2.join(''));
    }    
    
    return arr2.join('');
}

let inputdata1 = "A a B c Z z Y y";
let inputdata2 = 3;
