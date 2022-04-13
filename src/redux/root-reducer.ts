import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import surveysReducer from './surveys'

const rootReducer = (history: History) =>
    combineReducers({
        surveys: surveysReducer,
        router: connectRouter(history),
    })

export default rootReducer