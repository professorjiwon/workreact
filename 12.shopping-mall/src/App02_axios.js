import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';

/*
  * ajax로 서버로부터 데이터 얻어오기
    1. 설치하기 : npm i axios
*/
function App() {
  let [clothes, setClothes] = useState(pList);
  let [clickCount, setClickCount] = useState(2);

  // 페이지의 이동을 도와주는 함수
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'/>
            <Container>
              <Row>
                { 
                  clothes.map((p, i)=>{
                    return(
                      <PListCol clothes={p} i={i+1}/>
                    )
                  })
                }
              </Row>
            </Container>

            <Button variant="info" onClick={() => {
              axios.get(`https://raw.githubusercontent.com/professorjiwon/data/main/data${clickCount}.json`)
                   .then(result => {
                      console.log(result.data);
                      let copy = [...clothes, ...result.data];
                      setClothes(copy);
                      setClickCount(clickCount+1);
                   })
                   .catch(() => {
                      console.log('실패');
                      alert('더이상 상품이 없습니다');
                   })
            }}>서버에서 데이터 가져오기</Button>
            {/* 
                * 서버로 보낼때
                  axios.post('url',데이터)
                  ex) axios.post('url',{name:'kim'})

                * 동시에 요청을 여러개 할 때
                  Promise.all( [axios.get('url'), axios.get('url'), axios.post('url',데이터)] )
            */}
          </>
        }/>
        <Route path='/detail/:index' element={ <Detail clothes={clothes} bg="green" /> } />
        <Route path='*' element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

function PListCol(props) {
  return (
    <>
      <Col lg={4}>
        <img src={`${process.env.PUBLIC_URL}/img/clothes${props.i}.png`} />
        <h4>{props.clothes.title}</h4>
        <p>{props.clothes.price}</p>
      </Col>
    </>
  )
}

export default App;