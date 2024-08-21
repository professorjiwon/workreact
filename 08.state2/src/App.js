import './App.css';
import Controller from './component/Controller';
import Views from './component/Views';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function onChangeInput(e) {
    setText(e.target.value);
  }

  const onClickBtn = (value) => {
    setCount(count + value);
  }

  // useEffect() : 재렌더링이 완료되었을 때 내가 정의 한 함수 실행
  // lifecycle을 제어하는데 사용, 타이머
  useEffect(() => {
    console.log("update : " + count + ", " + text);
  },[count, text]);


  return (
    <div className="App">
      <h1>Counter</h1>
      <input value={text} onChange={onChangeInput}/>
      <Views count={count} />
      <Controller onClickBtn={onClickBtn}/>
    </div>
  );
}

export default App;
