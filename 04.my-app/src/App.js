import './App.css';

function App() {
  const isStudent = false;
  return (
    <div>
      {/* 삼항연산자로 인식하게 하려면 { }를 넣어야 됨
          중괄호가 없으면 글자로 인식
      */}
      {isStudent == true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>}
    </div>
  )
}

export default App;
