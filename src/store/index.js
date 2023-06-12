import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialStateCounter = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateCounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const intialStateAuth = { isLogin: false };
const authSlice = createSlice({
  name: "Auth",
  initialState: intialStateAuth,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const counterActions = counterSlice.actions;
export const authAction = authSlice.actions;
const store = configureStore({
  reducer: { count: counterSlice.reducer, AuthStatus: authSlice.reducer },
});
export default store;
