import { createSlice } from "@reduxjs/toolkit"

const formSlice = createSlice({
    name:'form',
    initialState:{
        studentDetails:[],
    },
    reducers:{
        setStudentDetails:(state,action)=>{
            state.studentDetails = action.payload
        }
    }



})

export const {setStudentDetails} = formSlice.actions;
export default formSlice.reducer;