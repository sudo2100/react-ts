// 객체의 구조 정의 - Member

//유니언 타입(Union Type) - 여러 타입 중 하나를 선택할 수 있는 타입
type MemberRole = "user" | "admin";

type Member = {
   id: number;
   name: string;
   age?: number;
   role: MemberRole;  //참조 타입
}

//객체 생성
const member1: Member = {
    id: 1,
    name: "우영우",
    role: "user"
}

const member2: Member = {
    id: 2,
    name: "이준호",
    age: 35,
    role: "admin"
}

console.log(`회원1 - ID: ${member1.id}, 이름: ${member1.name}, \
권한: ${member1.role}`);

console.log(`회원2 - ID: ${member2.id}, 이름: ${member2.name}, \
나이: ${member2.age}, 권한: ${member2.role}`);
