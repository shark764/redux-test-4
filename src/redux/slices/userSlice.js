import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'User 1',
  age: 23,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUsersAge: (state, action) => {
      state.age = action.payload;
    },
    changeUsersName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeUsersAge, changeUsersName } = userSlice.actions;
