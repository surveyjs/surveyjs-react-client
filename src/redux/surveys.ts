import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const defaultJSON = {
    id: '',
    name: 'New Survey',
    json: {
        elements: [
            { type: 'radiogroup', name: 'question1', choices: [ '1', '2', '3' ] }
        ]
    }
}
let surveysCount = 1;
function getDefaultJSON() {
    const surveyJSONSeed = JSON.parse(JSON.stringify(defaultJSON));
    surveyJSONSeed.id = '' + surveysCount++;
    surveyJSONSeed.name += surveyJSONSeed.id;
    return surveyJSONSeed;
}

const initialState: Array<any> = [getDefaultJSON()]

const surveysSlice = createSlice({
    name: 'surveys',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<void>) => {
            state.push(getDefaultJSON());
        },
        remove: (state, action: PayloadAction<string>) => {
            const survey = state.filter(s => s.id === action.payload)[0];
            const index = state.indexOf(survey);
            if(index >= 0) {
                state.splice(index, 1);
            }
        },
        update: (state, action: PayloadAction<{id: string, json: any}>) => {
            const survey = state.filter(s => s.id === action.payload.id)[0];
            survey.json = action.payload.json;
        },
    },
})

export const { add, remove, update } = surveysSlice.actions
export default surveysSlice.reducer