import React from 'react'
import { useReduxDispatch, useReduxSelector } from '../redux'
import { post } from '../redux/results'
import { Model, StylesManager } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/defaultV2.css'

StylesManager.applyTheme("defaultV2")

const Runner = (params: { id: string }): React.ReactElement => {
    const dispatch = useReduxDispatch()
    const surveys = useReduxSelector(state => state.surveys.surveys)
    const survey = surveys.filter(s => s.id === params.id)[0]
    const model = new Model(survey.json)

    model
        .onComplete
        .add((sender: Model) => {
            dispatch(post({postId: params.id, surveyResult: sender.data}))
        });    

    return (<>
            <Survey model={model}/>
    </>)
}

export default Runner