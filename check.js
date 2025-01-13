"use strict";
const half = (n) => n % 2 > 0 ? Math.floor(n / 2) + 1 : n / 2;
console.log(`
	${half(1)}
	`);
console.log(`
	${[].reduce((pre, cur) => pre + cur)}
	`);
//# sourceMappingURL=check.js.map