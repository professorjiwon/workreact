import { Container, Row, Col, Button } from "react-bootstrap";

function Detail () {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <img src={`${process.env.PUBLIC_URL}/img/clothes2.png`} />
                    </Col>    
                    <Col lg={6}>
                        <h4>상품명</h4>
                        <p>상품설명</p>
                        <p>35000</p>
                        <Button variant="info">주문하기</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Detail;