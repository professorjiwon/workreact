import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './../App.css';

/*
    탭 만들기
*/
/*
    애니메이션 만들기
    1) 애니메이션 동작 전 스타일을 담을 className 설정
    2) 애니메이션 동작 후 스타일을 담을 className 설정
    3) transition으로 ?초동안 변하게
    4) 원할 때 동작 전 className을 동작 후 className으로 변경
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

            {/* state가 0이면 내용0을, 1이면 내용1을 보여주기 */}
            {/* 1. 삼항연산자 사용 */}
{/*             
            { tab == 0 ? <div>내용 0</div> : tab == 1 ? <div>내용 1</div> : <div>내용 2</div> } 
*/}

            {/* 2. component 사용 */}
            <TabContent tab={tab} />

        </div>
    )
}

// if문 사용
/*
function TabContent({tab}) {
    if(tab == 0)
        return <div>내용 0</div>
    else if(tab == 1)
        return <div>내용 1</div>
    else
        return <div>내용 2</div>
}
*/

// 배열 리턴
/*
function TabContent({tab}) {
    // let array = [<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div>];
    // array[0];
    // [<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div>][2];

    return [<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div>][tab]
}
*/

// 애니메이션
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