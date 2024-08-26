import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './userSlice';

let stock = createSlice({
    name: 'stock',
    initialState : [10,11,12] 
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id:0, title: 'vest', count: 2},
        {id:2, title: 'jacket', count: 1}
    ]
})

export default configureStore({
    reducer : {
        // 내보내기에 등록
        member : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})


