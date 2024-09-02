import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import pList from './data/ProductList';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';
import Cart from './pages/Cart';

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
                      <PListCol clothes={p} key={i}/>
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
        <Route path='/detail/:pid' element={ <Detail clothes={clothes} /> } />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

function PListCol({clothes}) {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/detail/${clothes.id}`);
  };

  return (
    <Col md={4} onClick={goDetail} style={{ cursor: 'pointer' }}>
      <img src={`${process.env.PUBLIC_URL}/img/clothes${clothes.id}.png`} />
      <h4>{clothes.title}</h4>
      <p>{clothes.price}</p>
    </Col>
  )
}

export default App;