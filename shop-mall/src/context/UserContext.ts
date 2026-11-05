// Context API 
import { createContext, useContext } from "react";
import type { User, NewUser } from "../types/user";

// 회원 컨텍스트 타입 정의
// 구현할 기능을 선언하는 타입 정의
interface UserContextType{
    users: User[];  //회원(목록) 조회
    signup: (newUser: NewUser) => void; // 회원가입
}

// 회원 컨텍스트 생성
export const UserContext = createContext<UserContextType | null>(null);

// 사용자 훅 만들기
export const useUser = () => {
    const context = useContext(UserContext);
    if(!context){
        throw new Error("useUser는 UserProvider 내부에서만 사용 가능")
    }
    return context;
}