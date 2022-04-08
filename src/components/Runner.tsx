import React from 'react'
import { add, remove } from '../redux/surveys'
import { useReduxDispatch, useReduxSelector } from '../redux'
import { Model, StylesManager } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/defaultV2.css'

StylesManager.applyTheme("defaultV2");

const Runner = (params: { id: string }): React.ReactElement => {
    const surveys = useReduxSelector(state => state.surveys.surveys)
    const dispatch = useReduxDispatch()

    const survey = surveys.filter(s => s.id === params.id)[0];
    const model = new Model(survey.json);

    return (<>
            <Survey model={model}/>
    </>)
}

export default Runner