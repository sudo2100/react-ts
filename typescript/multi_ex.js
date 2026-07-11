"use strict";
// 학생 객체 생성
let student1 = {
    id: 1,
    name: "김선화",
    subject: {
        courseId: 101, courseName: "Java", grade: 'B'
    }
};
// 학생의 정보 출력
console.log(`학생명: ${student1.name}`);
console.log(`수강과목 ID: ${student1.subject.courseId}, \
수강과목명: ${student1.subject.courseName}, 학점: ${student1.subject.grade}`);
