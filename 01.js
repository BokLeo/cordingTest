const data = "5 3";
const n = data.split(" ");
const a= Number(n[0]), b = Number(n[1]);

let str = "*";
for(var i=0; i<b; i++){
    console.log(str.repeat(a));
}