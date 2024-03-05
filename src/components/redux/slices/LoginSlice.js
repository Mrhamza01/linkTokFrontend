import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const LoginSlice = createSlice({
	name: "Login",
	initialState,
	reducers: {
		// reudcer complete logic will be define here
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = LoginSlice.actions;

export default LoginSlice.reducer;
