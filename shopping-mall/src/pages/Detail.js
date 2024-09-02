import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import './../App.css';
import axios from "axios";

function Detail (props) {

    let {pid} = useParams();

    let findId = props.clothes.find(function(x) {
        return x.id == pid;
    })

    let [alert, setAlert] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 1000)
        return () => {
            clearTimeout(timer);
        }
    }, [alert])

    let [tab, setTab] = useState(0);
    let [fade2, setFade2] = useState('start')

    useEffect(() => {
        setFade2('end')
    }, [])

    const navigate = useNavigate();

    return (
        <div>
            { alert ? <h2>2초 이내 구매시 할인</h2> : null}

            <Container className={fade2}>
                <Row>
                    <Col lg={6}>
                        <img src={`${process.env.PUBLIC_URL}/img/clothes${findId.id}.png`} />
                    </Col>    
                    <Col lg={6}>
                        <h4>{findId.title}</h4>
                        <p>{findId.content}</p>
                        <p>{findId.price}원</p>
                        <Button variant="info" onClick={() => {
                            axios.post('/react/addcart', {id:findId.id, title:findId.title, count:1})
                                 .then(result => {
                                    console.log(result);
                                    navigate('/cart');
                                 })
                                 .catch(error => {
                                    console.log("실패", error);
                                 })
                        }}>장바구니에 담기</Button>
                    </Col>
                </Row>
            </Container>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">BUTTON 0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">BUTTON 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">BUTTON 2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab} />

        </div>
    )
}

function TabContent({tab}) {
    let [fade, setFade] = useState('')

    useEffect(() => {
        setTimeout(() => {setFade('end')},100)
        return () => {
            setFade('start')
        }
    }, [tab])

    return( 
        <div className={fade}>
            { [<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div>][tab] }
        </div>
    )
}

export default Detail;