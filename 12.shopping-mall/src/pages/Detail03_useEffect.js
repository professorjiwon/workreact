import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
/*
  - useEffect(() => { 실행할 코드 }, [변경되는 state])
    디펜더시(변경되는 state)가 변경되어 재렌더링 될때만 호출이 됨
    이외의 재렌더링시에는 호출되지 않음

  - useEffect(() => { 실행할 코드 }, [])
    최초 mount될 때 한번만 실행

  - useEffect(() => { 변수.. return( 리턴할 코드 ) }, []) 
    return문법 : clean up function이라 한다
    useEffect가 실행되기 전에 return을 먼저 실행
    return은 mount시 실행안되고, unmount시에만 실행됨

   * 정리
   useEffect(() => {}) : 재렌더링 될때마다 실행
   useEffect(() => {},[]) : mount시 한번만 실행
   useEffect(() => {},[???]) : ???이 재렌더링 될때마다 실행
   useEffect(() => {..  return( unmout시 한번 실행 )})
*/
function Detail (props) {

    let {index} = useParams();

    let findId = props.clothes.find(function(x) {
        return x.id == index;
    })

/*
    let [alert, setAlert] = useState(true);
    let [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => { setAlert(false) }, 1000)
        return () => {
            clearTimeout(timer);
        }
    }, [alert])
*/
    let [num, setNum] = useState('');
    useEffect(() => {
        if(isNaN(num) == true) {  // Not a Number 숫자이면 false, 문자이면 true
            alert('그러지마요');
        }
    },[num])

    return (
        <div>
            <input onChange={(e) => {setNum(e.target.value)}} />
{/* 
            { alert ? <h2>2초 이내 구매시 할인</h2> : null}
            <button onClick={() => {setAlert(true)}}>alert 버튼</button>

            {count}
            <button onClick={() => {setCount(count+1)}}>count 버튼</button> */}

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
        </div>
    )
}

export default Detail;