
// 객체의 구조 정의 - interface
interface Person{
    readonly id: number;   //필수 속성(읽기 전용, 수정불가)
    name: string; //필수 속성
    age?: number; //선택 속성
}

let person1: Person = {
    id: 1,
    name: "우영우",
    age: 31
}

let person2: Person = {
    id: 2,
    name: "이준호"
}

// person2의 이름 변경
// person2.id = 10; //수정 불가
person2.name = "한준호"

console.log(`사용자1 - ID: ${person1.id}, 이름: ${person1.name}, 나이: ${person1.age}`);
console.log(`사용자2 - ID: ${person2.id}, 이름: ${person2.name}`);
