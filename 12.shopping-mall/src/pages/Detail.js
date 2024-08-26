import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
/*
    탭 만들기
*/
function Detail (props) {

    let {index} = useParams();

    let findId = props.clothes.find(function(x) {
        return x.id == index;
    })

    let [alert, setAlert] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 1000)
        return () => {
            clearTimeout(timer);
        }
    }, [alert])

    let [num, setNum] = useState('');
    useEffect(() => {
        if(isNaN(num) == true) {  // Not a Number 숫자이면 false, 문자이면 true
            alert('그러지마요');
        }
    },[num])

    return (
        <div>
            { alert ? <h2>2초 이내 구매시 할인</h2> : null}

            <Container>
                <Row>
                    <Col lg={6}>
                        <img src={`${process.env.PUBLIC_URL}/img/clothes${findId.id+1}.png`} />
                    </Col>    
                    <Col lg={6}>
                        <h4>{findId.title}</h4>
                        <p>{findId.content}</p>
                        <p>{findId.price}원</p>
                        <Button variant="info">주문하기</Button>
                    </Col>
                </Row>
            </Container>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0">BUTTON 0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1">BUTTON 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2">BUTTON 2</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default Detail;