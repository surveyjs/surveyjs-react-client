import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiBaseAddress, ISurveyDefinition } from '../models/survey'

const initialState: { surveys: Array<ISurveyDefinition>, status: string, error: any } = {
    surveys: [],
    status: 'idle',
    error: null
}

const surveysSlice = createSlice({
    name: 'surveys',
    initialState,
    reducers: {
        // add: (state, action: PayloadAction<void>) => {
        //     state.surveys.push(getDefaultJSON());
        // },
        // remove: (state, action: PayloadAction<string>) => {
        //     const survey = state.surveys.filter(s => s.id === action.payload)[0];
        //     const index = state.surveys.indexOf(survey);
        //     if(index >= 0) {
        //         state.surveys.splice(index, 1);
        //     }
        // },
        // update: (state, action: PayloadAction<{id: string, json: any}>) => {
        //     const survey = state.surveys.filter(s => s.id === action.payload.id)[0];
        //     survey.json = action.payload.json;
        // },
    },
    extraReducers(builder) {
        builder
          .addCase(load.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(load.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched surveys to the array
            state.surveys = state.surveys.concat(action.payload)
          })
          .addCase(load.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
          .addCase(create.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add new survey to the array
            state.surveys.push(action.payload)
          })
          .addCase(remove.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Remove survey from the array
            const survey = state.surveys.filter(s => s.id === action.payload.id)[0];
            const index = state.surveys.indexOf(survey);
            if(index >= 0) {
                state.surveys.splice(index, 1);
            }
          })
          .addCase(update.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Update survey in the array
            const survey = state.surveys.filter(s => s.id === action.payload.id)[0];
            survey.json = action.payload.json;
          })
      }
})

export const load = createAsyncThunk('surveys/load', async () => {
    const response = await axios.get(apiBaseAddress + '/getActive')
    return response.data
})

export const get = createAsyncThunk('surveys/get', async (id: string) => {
    const response = await axios.get(apiBaseAddress + '/getSurvey?surveyId=' + id)
    return response.data
})

export const create = createAsyncThunk('surveys/create', async () => {
    const response = await axios.get(apiBaseAddress + '/create')
    return response.data
})

export const remove = createAsyncThunk('surveys/delete', async (id: string) => {
    const response = await axios.get(apiBaseAddress + '/delete?id=' + id)
    return response.data
})

export const update = createAsyncThunk('surveys/update', async (data: {id: string, json: any, text: string}) => {
    const response = await axios.post(apiBaseAddress + '/changeJson', data)
    return response.data
})

// export const { add, remove, update } = surveysSlice.actions
export default surveysSlice.reducer