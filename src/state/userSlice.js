import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create async action for user creation
export const createUser = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await fetch('', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await response.json();
  }
);

// Define initial state
const initialState = {
  user: null,
  authToken: null,
  error: null
};

// Create user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.authToken = action.payload.authToken;
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default userSlice.reducer;
