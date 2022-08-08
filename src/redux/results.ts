import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiBaseAddress } from '../models/survey'

export const load = createAsyncThunk('results/load', async (id: string) => {
    const response = await axios.get(apiBaseAddress + '/results?postId=' + id)
    return response.data
})

export const post = createAsyncThunk('results/post', async (data: {postId: string, surveyResult: any, surveyResultText: string}) => {
  const response = await axios.post(apiBaseAddress + '/post', data);
  return response.data
})
