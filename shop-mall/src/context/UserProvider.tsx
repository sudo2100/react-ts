import { useState } from "react";
import { UserContext } from "./UserContext";
import type { User, NewUser } from "../types/user";
import { initialUsers } from "../datas/users";

const UserProvider = ({children}: {children: React.ReactNode}) => {
    const [users, setUsers] = useState<User[]>(initialUsers);

    // 회원가입 함수
    const signup = ( newUser: NewUser) => {
        // 가입한 1명 회원
        const user: User = {...newUser, id: Date.now()}
        setUsers([...users, user])
    }

    return(
        <UserContext.Provider value={{ users, signup }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;