import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : 'kim' 
})

export default configureStore({
    reducer : {
        // 내보내기에 등록
        user : user.reducer
    }
})
