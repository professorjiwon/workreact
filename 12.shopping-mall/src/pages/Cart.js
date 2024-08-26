import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {
    /*
    let state = useSelector((state) => {return state})
    console.log(state);
    console.log(state.user);
    */

    let state2 = useSelector(state => state.user)  // 원하는 것만 가져오기

    return (
        <div className='cart'>
        <br/>
        <h2>{state2}님의 CART LIST</h2>
        <br/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
          </Table>
        </div>
    )
}

export default Cart;