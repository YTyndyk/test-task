import { createSlice } from "@reduxjs/toolkit";

import { login } from "./auth-operations";

const initialState = {
	isLogin: false,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state) => {
				state.loading = false;
				state.isLogin = true;
			})
			.addCase(login.rejected, (state, { payload }) => {
				state.loading = false;
				state.error = payload;
			});
	},
});
export default authSlice.reducer;
