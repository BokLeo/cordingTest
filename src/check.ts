const half = (n:number) =>  n % 2 > 0 ? Math.floor(n/2)+1 : n/2;
console.log(`
	${ half(1) }
	`);

console.log(`
	${ [].reduce((pre, cur)=>pre+cur) }
	`)
