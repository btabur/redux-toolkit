import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

const counterSlice = createSlice({
    name:'counterSlice',
    initialState:initialState,
    reducers: {
        increase:(state) => {
            state.count +=1;
        },
        decrease:(state)=> {
            state.count-=1;
        },
        setCount:(state,action) => {
            state.count = action.payload
        }
    }
})

export const {increase,decrease,setCount} = counterSlice.actions

export default counterSlice.reducer