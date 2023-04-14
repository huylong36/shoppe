import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";


export const createUser = createAsyncThunk('user/register',async(payload:any) =>{
    const data = await userApi.register(payload);
    localStorage.setItem('token_user', JSON.stringify(data.data.jwt));
    localStorage.setItem('user', JSON.stringify(data.data.user));
    return data.data.user;

})
const authSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
    },
    reducers: {},
    extraReducers:(builder) =>{
        builder.addCase(createUser.fulfilled , (state , action )=>{
        state.current = action.payload;
    })
}
})
const {reducer} = authSlice;
export default reducer;