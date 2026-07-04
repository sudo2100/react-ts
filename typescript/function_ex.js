"use strict";
// 함수 정의
// return이 있는 함수
/*function sub(x: number, y: number): number{
    return x - y
}*/
const sub = (x, y) => {
    return x - y;
};
const result = sub(10, 11);
console.log("결과:", result);
//return이 없는 함수
/*function greet(name: string): void{
    console.log(`Hello, ${name}`);
}*/
const greet = (name) => {
    console.log(`Hello, ${name}`);
};
greet("TypeScript!");
// 객체를 반환하는 함수
const createUser = (id, name) => {
    return { id, name };
};
const user_kim = createUser(1, "김기용");
console.log(`사용자 ID: ${user_kim.id}, 이름: ${user_kim.name}`);
