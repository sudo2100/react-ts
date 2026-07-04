
// 객체 타입 정의
/*type PlayerProps = {
    player: {
        name: string,
        age: number
    },
    clickHandler: () => void
}*/

interface PlayerProps{
    player: {
        name: string,
        age: number
    },
    clickHandler: () => void
}

// props로 객체를 전달받고, 타입 정의
const Player2 = ({player, clickHandler}: PlayerProps) => {

    return(
        <>
            <h2>운동 선수</h2>
            <p>이름: {player.name}</p>
            <p>나이: {player.age}</p>
            <button onClick={clickHandler}>클릭</button>
        </>

    )
}

export default Player2