import { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './../App.css';
import {Context1} from './../App';

function Detail (props) {
    // useContext() : Context1을 해체   {stock, clothes}
    /*
    let a = useContext(Context1);
    console.log(a);
    console.log(a.stock);
    */

    let {stock, clothes} = useContext(Context1);
    console.log(stock);
    console.log(clothes);

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
        if(isNaN(num) == true) { 
            alert('그러지마요');
        }
    },[num])

    let [tab, setTab] = useState(0);

    let [fade2, setFade2] = useState('start')

    useEffect(() => {
        setFade2('end')
    }, [])


    return (
        <div>
            { alert ? <h2>2초 이내 구매시 할인</h2> : null}

            <Container className={fade2}>
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

    let {stock} = useContext(Context1);

    useEffect(() => {
        setTimeout(() => {setFade('end')},100)
        return () => {
            setFade('start')
        }
    }, [tab])

    return( 
        <div className={fade}>
            { [<div>{stock}</div>, <div>{stock[1]}</div>, <div>{stock[tab]}</div>][tab] }
        </div>
    )
}

export default Detail;