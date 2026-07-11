// 학점 타입 정의
type GradeType = 'A' | 'B' | 'C' | 'D' | 'F';

// 과목 자료형 정의
interface Course{
    courseId: number,
    courseName: string,
    grade: GradeType  //타입 참조 
}

// 학생 자료형 정의
interface Student{
    id: number,
    name: string,
    subjects: Course[]  //과목 자료형 참조
}

// 학생 객체 생성
let student2: Student = {
    id: 1,
    name: "김선화",
    subjects: [
        {courseId: 101, courseName: "Java", grade: 'B'},
        {courseId: 102, courseName: "TypeScript", grade: 'A'},
    ]
}

// 학생의 정보 출력
console.log(`학생명: ${student2.name}`);
// 반복문 - forEach 함수 (() => {})
student2.subjects.forEach(subject => {
    console.log(`과목명: ${subject.courseName}, 학점: ${subject.grade}`);
})


