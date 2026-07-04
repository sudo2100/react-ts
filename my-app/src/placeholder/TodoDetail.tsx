import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type {Todo} from "./Todos"
import axios from "axios";

const TodoDetail = () => {
    const {id} = useParams();
    const [todo, setTodo] = useState<Todo | null>(null);

    useEffect(() => {
        const fetchTodo = async () => {
            try{
                const response = 
                    await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
                setTodo(response.data);
            }catch(error){
                alert("통신 중 오류 발생!!");
            }
        }
        //호출
        fetchTodo();
    }, [id]);

    // todo가 아직 로딩되지 않았을때 로딩 메시지 표시
    if(!todo){
        return <div>로딩 중...</div>
    } 
 
    return(
        <div>
            <h2>할 일 상세정보</h2>
            <p>ID: {todo.id}</p>
            <p>제목: {todo.title}</p>
            <p>완료 여부: {todo.completed ? '완료' : '미완료'}</p>
        </div>
    )
}

export default TodoDetail;