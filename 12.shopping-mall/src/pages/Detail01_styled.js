import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn = styled.button`
    background : yellow;
    color : bule;
    padding : 10px;
`;

let Box = styled.div`
    padding : 20px;
    background : grey;
`;
let BlueBtn = styled.button`
    background : blue;
    color : white;
    padding : 10px;
`;

let Btn = styled.button`
background : ${props => props.bg};
color : bule;
padding : 10px;
`;


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
            <YellowBtn>노란 버튼</YellowBtn>
            <Box>div</Box>
            <BlueBtn>블루 버튼</BlueBtn>
            
            <Btn bg='pink'>핑크 버튼</Btn>
            <Btn bg='yellow'>노란 버튼</Btn>

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