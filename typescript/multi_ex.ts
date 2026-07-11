// 학점 타입 정의
type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

// 과목 자료형 정의
interface Course{
    courseId: number,
    courseName: string,
    grade: Grade  //타입 참조 
}

// 학생 자료형 정의
interface Student{
    id: number,
    name: string,
    subject: Course  //과목 자료형 참조
}

// 학생 객체 생성
let student1: Student = {
    id: 1,
    name: "김선화",
    subject: {
        courseId: 101, courseName: "Java", grade: 'B'
    }
}

// 학생의 정보 출력
console.log(`학생명: ${student1.name}`);
console.log(`수강과목 ID: ${student1.subject.courseId}, \
수강과목명: ${student1.subject.courseName}, 학점: ${student1.subject.grade}`);

