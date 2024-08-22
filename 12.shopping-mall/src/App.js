import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import clothes1 from './img/clothes1.png';
import { useState } from 'react';
import pList from './data/ProductList';
// import { num1, num2 } from './data/ProductList';

function App() {
  let [clothes, setClothes] = useState(pList);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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
/*
  매우 작은 기기(모바일) - xs{} 너비가 768px미만인 화면
  작은 기기(태블릿) - sm{} 너비가 992px미만인 화면
  중간 기기(노트북) - md{} 너비가 1200px미만인 화면
  큰 기기(데스크탑) - lg{} 너비가 1200px이상인 화면

  - 한행에 12개의 열을 가진다(중간기기이상일 때)
  <Col md={4}>
  <Col md={4}>
  <Col md={2}>
  <Col md={2}>
*/

export default App;