import { configureStore, createSlice } from '@reduxjs/toolkit'

// 객체나 배열 변경
let user = createSlice({
    name : 'user1',
    initialState : {name : 'kim', age : 20},
    reducers : {
        /*
        changeName() {
            return {name : 'park', age : 20}
        }
        */
        changeName(state) {
            state.name = 'park'
        },
        a(state) {
            state.age = 9
        }
    }
})
export let { changeName, a } = user.actions

/*
let user = createSlice({
    name : 'user1',
    initialState : 'kim',
    reducers : {
        changeName(state) {
            return 'jiwon ' + state
        }
    } 
})
export let { changeName } = user.actions
*/

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


