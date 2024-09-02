import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function Cart() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('/react/getCart')
             .then(result => {
                setList(result.data);
             })
             .catch(() => {
                console.log("실패");
             })
    },[]);
    return (
        <div className='cart'><br/>
        <h2>CART LIST</h2><br/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>상품명</th>
                    <th>수량</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map(c =>
                        <tr>
                            <td>{c.id}</td>
                            <td>{c.title}</td>
                            <td>{c.count}</td>
                        </tr>
                    )
                }
            </tbody>
          </Table>
        </div>
    )
}

export default Cart;

