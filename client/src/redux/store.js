
import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartRedux";
import userSlice from "./userRedux.js";

export default configureStore({
    reducer:{
        cart:cartSlice,
        user:userSlice
    }
})