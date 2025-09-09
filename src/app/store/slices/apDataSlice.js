import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchApiData = createAsyncThunk(
    'apiData/fetchApiData',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return data;
    }
);


const apiDataSlice = createSlice({
    name: 'apiData',
    initialState:{
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
              .addCase(fetchApiData.pending, (state) =>{
                state.status = 'loading'
              })
              .addCase(fetchApiData.fulfilled, (state, action) =>{
                state.status = 'scucceeded';
                state.data = action.payload;
              })
              .addCase(fetchApiData.rejected, (state, action) =>{
                state.status = 'failed';
                state.error = action.error.message
              });
    },
});

export default apiDataSlice.reducer;