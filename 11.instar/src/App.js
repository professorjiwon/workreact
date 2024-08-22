import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState([0,0,0]);
  let [title, setTitle] = useState(["초밥", "찬란한 아구", "역전우동"]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <h2 className="title">맛집 추천 INSTAR</h2>

      {/* 원본이 바뀜 */}
      {/* <button onClick={() => {setTitle(["청담등심", "찬란한 아구", "역전우동"]);}}>글수정</button> */}
      <button onClick={() => {
        let copy = [...title];
        copy[0] = "청담등심";
        setTitle(copy);
      }}>글수정</button>

      {/* title = ["초밥", "찬란한 아구", "역전우동"] */}
      {
        title.map(function(t) {
          return (
            <div className="list">
              <h4 onClick={() => {setModal(!modal)}}>{t}</h4>
              <p>8월 22일  <span onClick={() => {setCount(count+1)}}>🥇</span>{count}</p>
            </div>
          )
        })
      }

      


      { modal ? <Modal/> : null }

    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
