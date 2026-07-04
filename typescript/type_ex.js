"use strict";
// 객체의 구조 정의 - Member
//객체 생성
const member1 = {
    id: 1,
    name: "우영우",
    role: "user"
};
const member2 = {
    id: 2,
    name: "이준호",
    age: 35,
    role: "admin"
};
console.log(`회원1 - ID: ${member1.id}, 이름: ${member1.name}, \
권한: ${member1.role}`);
console.log(`회원2 - ID: ${member2.id}, 이름: ${member2.name}, \
나이: ${member2.age}, 권한: ${member2.role}`);
