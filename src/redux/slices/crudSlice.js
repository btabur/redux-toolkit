import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

const crudSlice = createSlice({
    name:'crudSlice',
    initialState:initialState,
    reducers: {
        increase:(state) => {
            state.count +=1
        }
    }
})

export const {increase} = crudSlice.actions

export default crudSlice.reducer