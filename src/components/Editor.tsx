import React from 'react'
import { add, remove } from '../redux/surveys'
import { useReduxDispatch, useReduxSelector } from '../redux'
import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react'
import 'survey-creator-core/survey-creator-core.css'

const Editor = (params: { id: string }): React.ReactElement => {
    const surveys = useReduxSelector(state => state.surveys)
    const dispatch = useReduxDispatch()

    const options = {};
    const creator = new SurveyCreator(options);
    creator.saveSurveyFunc = (saveNo: number, callback: (no: number, success: boolean) => void) => {
        callback(saveNo, true);
    }

    const survey = surveys.filter(s => s.id === params.id)[0];
    creator.JSON = survey.json;

    return (<>
            <SurveyCreatorComponent creator={creator}/>
    </>)
}

export default Editor