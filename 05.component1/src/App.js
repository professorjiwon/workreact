import './App.css';

const user = {
  firstName : "Hong",
  lastName : "GilDong"
}

function Student(u) {
  return u.firstName + " " + u.lastName;
}

function App() {
  const isStudent = true;
  return (
    <div className="App">
      <Com1/>
      <h1>The Joeun React 2024</h1>
      <h3>component 실습</h3>

      {isStudent ? <h4>{Student(user)}님 환영합니다</h4> : <h4>학원생이 아닙니다</h4>}
    
      <Com1></Com1>
      <Com1/>
    </div>
  );
}

function Com1() {
  return (
    <>
      <h2>[THIS IS COMPONENT]</h2>
      <p>K-Digital Training</p>
      <p>의료용 AI 연동 개발 실무 프로젝트</p>
      <ul>
        <li>Java</li>
        <li>SpringBoot</li>
        <li>React</li>
      </ul>
    </>
  )
}

export default App;
