import { useState } from "react";
import type { SignUpForm } from "../types/user";

const initialForm: SignUpForm = {
    username: "",
    password: "",
    passwordConfirm: "",
    name: "",
    email: ""
}

const SignUp = () => {
    const [form, setForm] = useState<SignUpForm>(initialForm);

    // 폼에 입력된 데이터 가져오기
    const { username, password, passwordConfirm, name, email } = form;

    // 입력값 변경 핸들러
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    return(
        <div className="sign-up">
            <h2>회원 가입</h2>
            <form>
                <div>
                    <label htmlFor="username">아이디</label>
                    <input 
                        type="text" 
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                        placeholder="아이디를 입력해주세요"
                    />
                </div>
            </form>
        </div>
    )
}

export default SignUp;