import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { defaultJSON } from '../models/survey'

let surveysCount = 1;
function getDefaultJSON() {
    const surveyJSONSeed = JSON.parse(JSON.stringify(defaultJSON));
    surveyJSONSeed.id = '' + surveysCount++;
    surveyJSONSeed.name += surveyJSONSeed.id;
    return surveyJSONSeed;
}

const initialState: { surveys: Array<any>, status: string, error: any } = {
    surveys: [],
    status: 'idle',
    error: null
}

const surveysSlice = createSlice({
    name: 'surveys',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<void>) => {
            state.surveys.push(getDefaultJSON());
        },
        remove: (state, action: PayloadAction<string>) => {
            const survey = state.surveys.filter(s => s.id === action.payload)[0];
            const index = state.surveys.indexOf(survey);
            if(index >= 0) {
                state.surveys.splice(index, 1);
            }
        },
        update: (state, action: PayloadAction<{id: string, json: any}>) => {
            const survey = state.surveys.filter(s => s.id === action.payload.id)[0];
            survey.json = action.payload.json;
        },
    },
    extraReducers(builder) {
        builder
          .addCase(load.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(load.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.surveys = state.surveys.concat(action.payload)
          })
          .addCase(load.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
      }
})

export const load = createAsyncThunk('surveys/load', async () => {
    const response = await axios.get('/api/surveys')
    return response.data
})

export const { add, remove, update } = surveysSlice.actions
export default surveysSlice.reducer