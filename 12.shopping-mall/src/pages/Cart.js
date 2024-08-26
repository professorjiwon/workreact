import { Table } from 'react-bootstrap';

function Cart() {
    return (
        <div className='cart'>
        <br/>
        <h2>CART LIST</h2>
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