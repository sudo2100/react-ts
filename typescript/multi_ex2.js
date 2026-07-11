"use strict";
// 학생 객체 생성
let student2 = {
    id: 1,
    name: "김선화",
    subjects: [
        { courseId: 101, courseName: "Java", grade: 'B' },
        { courseId: 102, courseName: "TypeScript", grade: 'A' },
    ]
};
// 학생의 정보 출력
console.log(`학생명: ${student2.name}`);
student2.subjects.forEach(subject => {
    console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`);
});
