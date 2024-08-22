import './App.css';
import { useState } from 'react';

function App() {
  let [count, setCount] = useState([0,0,0]);
  let [title, setTitle] = useState(["초밥", "찬란한 아구", "역전우동"]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);  // div의 index번호 변경. [0,1,2]

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

      {
        title.map(function(t, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {setModal(!modal); setModalTitle(i)}}>{t}</h4>
              <p>8월 22일  <span onClick={() => {
                  let copy = [...count];
                  copy[i] = copy[i] + 1;
                  setCount(copy)
                }} >🥇</span>{count[i]}</p>
            </div>
          )
        })
      }

      


      { modal ? <Modal title={title} modalTitle={modalTitle} /> : null }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
