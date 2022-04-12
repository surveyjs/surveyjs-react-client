import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState: { id: string, data: Array<any>, status: string, error: any } = {
    id: '',
    data: [],
    status: 'idle',
    error: null
}

const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
          .addCase(load.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(load.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched results to the array
            state.id = action.payload.id
            state.data = [].concat(action.payload.data)
          })
          .addCase(load.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
      }
})

export const load = createAsyncThunk('results/load', async (id: string) => {
    const response = await axios.get('/api/results?postId=' + id)
    return response.data
})


export default resultsSlice.reducer