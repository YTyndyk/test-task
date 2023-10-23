import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {},
	token: "",
	isLogin: false,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: {},
});
export default authSlice.reducer;
