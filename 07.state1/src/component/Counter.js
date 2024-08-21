import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count+1)}}>+</button>&emsp;
            <button onClick={() => {setCount(count-1)}}>-</button>
        </>
    )
}

export default Counter;