"use strict";
// Record<객체 자료형, 숫자>
const prices = {
    apple: 2000,
    banana: 1500,
    orange: 1000
};
// 사과의 가격
console.log(`사과 가격: ${prices.apple}`);
// 전체 출력 - for(변수 in 배열)
for (const fruit in prices) {
    console.log(`${fruit}: ${prices[fruit]}`);
}
