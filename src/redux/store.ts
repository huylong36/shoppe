import { configureStore } from "@reduxjs/toolkit";
import  authreducers from '../redux/slices/authSlice'

const reducers={
    users:authreducers
}
export const store = configureStore({
    reducer:reducers
    
})
export default store;