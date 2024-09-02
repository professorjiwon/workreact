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
    ],
    reducers : {
        addCount(s, action) {
            let i = s.findIndex(ind => ind.id == action.payload)
            s[i].count++
        },
        addItem(state, action) {
            // state.push({id:1, title: '바지', count: 1})
            state.push(action.payload)
        }
    }
})
export let { addCount, addItem } = cart.actions

export default configureStore({
    reducer : {
        // 내보내기에 등록
        member : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})


