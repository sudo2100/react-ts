"use strict";
let person1 = {
    id: 1,
    name: "우영우",
    age: 31
};
let person2 = {
    id: 2,
    name: "이준호"
};
// person2의 이름 변경
person2.id = 10;
person2.name = "한준호";
console.log(`사용자1 - ID: ${person1.id}, 이름: ${person1.name}, 나이: ${person1.age}`);
console.log(`사용자2 - ID: ${person2.id}, 이름: ${person2.name}`);
