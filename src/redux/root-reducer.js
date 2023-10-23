import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth-slice";

const persistConfig = {
	key: "auth",
	storage,
	whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
	auth: persistedAuthReducer,
});

export default rootReducer;
