"use strict";
[1, 3, 2, 5, 4, 5, 2, 3].reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});
//# sourceMappingURL=check.js.map