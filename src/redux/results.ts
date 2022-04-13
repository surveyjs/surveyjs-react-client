import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export const load = createAsyncThunk('results/load', async (id: string) => {
    const response = await axios.get('/api/results?postId=' + id)
    return response.data
})

export const post = createAsyncThunk('results/post', async (data: {postId: string, surveyResult: any}) => {
  const response = await axios.post('/api/post', data);
  return response.data
})
