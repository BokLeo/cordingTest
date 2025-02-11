"use strict";
function 전화번호목록(phone_book) {
    return phone_book.some(number => {
        return phone_book.some(el => {
            if (number !== el) {
                return number.includes(el);
            }
            return false;
        });
    });
}
console.log(전화번호목록(["119", "97674223", "1195524421"])); // true (119가 1195524421의 접두사이므로)
//# sourceMappingURL=check.js.map