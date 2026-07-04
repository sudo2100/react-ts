// props로 객체를 전달받고, 타입 정의
const Player = ({player, clickHandler}: {
    player: {name: string, age: number},
    clickHandler: () => void
}) => {

    return(
        <>
            <h2>운동 선수</h2>
            <p>이름: {player.name}</p>
            <p>나이: {player.age}</p>
            <button onClick={clickHandler}>클릭</button>
        </>

    )
}

export default Player;