import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  creators: [],
  loading: false,
  error: null,
};

const creatorSlice = createSlice({
    name: 'creator',
    initialState,
    reducers: {},
});

export default creatorSlice.reducer;