
import './App.css';

function App() {

  /* 여러줄 주석 */
  // return이 한줄 일때
  // return <h1>React 처음 시작 또 시작 ㅕㅕㅕ</h1>

  // return안이 여러줄 일때
  /*
    1. 소괄호를 반드시 넣어준다
    2. 루트 태그를 반드시 넣어준다
  */
  return ( //주석
    <>{/* 여러줄 일때는 반드시 최상위 태그가 존재해야 된다 */}
      <h1>React</h1>
      <h2>여러줄 리턴</h2>
      {/* 주석 */}
    </>
  )
}

export default App;
