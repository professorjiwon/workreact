import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// 변경시 1.
// import { changeName, increase } from '../store/store';

// userSlice로 분할 할 후 import
import { changeName, increase } from '../store/userSlice';

function Cart() {
    /*
    let state = useSelector((state) => {return state})
    console.log(state);
    console.log(state.user);
    */

    // let state2 = useSelector(state => state.member)  // 원하는 것만 가져오기
    let state = useSelector(state => state)

    // 변경시 2.  store.js에 요청을 보내는 함수
    let dispatch = useDispatch();

    return (
        <div className='cart'><br/>
        <h2>{state.member.name} {state.member.age}님의 CART LIST</h2><br/>
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
                {
                    state.cart.map(c => 
                        <tr>
                            <td>{c.id}</td>
                            <td>{c.title}</td>
                            <td>{c.count}</td>
                            <td>
                                <Button variant="outline-secondary" onClick={() => {
                                    dispatch(increase(3))
                                }}>
                                    +
                                </Button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
          </Table>
        </div>
    )
}

export default Cart;

