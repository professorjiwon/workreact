import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
/*
   * useEffect
    lifeCycle(생명주기)
    컴포넌트
    1. 생성 (mount)
    2. 재렌더링 (update)
    3. 소멸 (unmount)

    class Detail2 extends React.Component {
        componentDidMount() {
            Detail2 컴포넌트가 생성되고 나서 실행할 코드
        }
        componentDidUpdate() {
            Detail2 컴포넌트가 update 나서 실행할 코드
        }
        componentWillUnmount() {
            Detail2 컴포넌트가 삭제되기 전 실행할 코드
        }
    }

    - useEffect안에 들어가는 코드들
      1) 어려운 연산
      2) 서버에서 데이터를 가져오는 작업
      3) 타이머등

      side Effect : 함수의 핵심기능이 아닌 부가기능
*/
function Detail (props) {

    let {index} = useParams();

    let findId = props.clothes.find(function(x) {
        return x.id == index;
    })

    useEffect(() => {
        // mount, update 될 때 실행
        // 그래서 LifeCycle hook 이라 함
        for(var i=1; i<10000; i++) {
            console.log(1);
        }
        console.log('로드 되고 실행');
    })

    console.log('로드 되고 실행222222');

    let [count, setCount] = useState(0);

    return (
        <div>
            {count}
            <button onClick={() => setCount(count+1)}>1증가버튼</button>

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