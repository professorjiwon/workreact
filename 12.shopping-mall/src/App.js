import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';
import Cart from './pages/Cart';

/*
  ** 장바구니 만들기

  * 외부 라이브러리 사용(Redux)
  1) 설치 : npm install @reduxjs/toolkit react-redux
  2) store폴더 만들고, store.js파일 만들기
  3) index.js <Provider>로 감싸기
*/
function App() {
  let [clothes, setClothes] = useState(pList);
  let [clickCount, setClickCount] = useState(2);

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Fashion Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
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
                      <PListCol clothes={p} i={i+1} key={i}/>
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
          </>
        }/>
        <Route path='/detail/:index' element={ <Detail clothes={clothes} /> } />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

function PListCol(props) {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/detail/${props.i-1}`);
  };

  return (
    <Col lg={4} onClick={goDetail} style={{ cursor: 'pointer' }}>
      <img src={`${process.env.PUBLIC_URL}/img/clothes${props.i}.png`} />
      <h4>{props.clothes.title}</h4>
      <p>{props.clothes.price}</p>
    </Col>
  )
}

export default App;