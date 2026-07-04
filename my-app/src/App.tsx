
import './App.css'
import Counter from './components/Counter'
import DrinkList from './components/DrinkList'
import Greet from './components/Greet'
import InputValueState from './components/InputValueState'
import Player from './components/Player'
import Player2 from './components/Player2'

function App() {
  //객체 정의
  const playerObj = {
    name: "신유빈",
    age: 22
  }

  const clickHandler = () => {
    alert("버튼이 클릭되었습니다.");
  }

  return (
    <>
      <section className="app">
        {/* <Greet name="타입스크립트" /> */}
        {/* <Player 
          player={playerObj} 
          clickHandler={clickHandler} 
        /> */}
        {/* <Player2 
          player={playerObj} 
          clickHandler={clickHandler} 
        /> */}
        {/* <Counter /> */}
        {/* <InputValueState /> */}
        <DrinkList />
      </section>
    </>
  )
}

export default App
