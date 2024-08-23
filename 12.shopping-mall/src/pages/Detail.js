import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail (props) {
    /*
    let {index, member} = useParams();
    console.log(index);
    console.log(member);
    */

    let {index} = useParams();

    let findId = props.clothes.find(function(x) {
        return x.id == index;
    })
    console.log(typeof(findId));   
    console.log(findId.id);

    return (
        <div>
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