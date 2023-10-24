import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/api/auth";

export const login = createAsyncThunk(
	"auth/login",
	async (data, { rejectWithValue }) => {
		try {
			const result = await api.login(data);
			return result;
		} catch ({ response }) {
			return rejectWithValue(response.data);
		}
	},
);
