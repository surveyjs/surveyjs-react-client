import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import surveysReducer from './surveys'
import resultsReducer from './results'

const rootReducer = (history: History) =>
    combineReducers({
        surveys: surveysReducer,
        results: resultsReducer,
        router: connectRouter(history),
    })

export default rootReducer