import { configureStore } from "@reduxjs/toolkit";
// import { userTaskSlice } from "./slices/taskSlices";
import userTaskSlice from './slices/taskSlices'


const Store = configureStore({
    reducer:{
        tasks : userTaskSlice,
    },
});

export default Store;