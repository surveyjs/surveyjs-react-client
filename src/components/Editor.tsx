import React from 'react'
import { update } from '../redux/surveys'
import { useReduxDispatch, useReduxSelector } from '../redux'
import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react'
import 'survey-creator-core/survey-creator-core.css'

const Editor = (params: { id: string }): React.ReactElement => {
    const surveys = useReduxSelector(state => state.surveys)
    const dispatch = useReduxDispatch()
    const survey = surveys.filter(s => s.id === params.id)[0];

    const options = {};
    const creator = new SurveyCreator(options);
    creator.JSON = survey.json;
    creator.saveSurveyFunc = (saveNo: number, callback: (no: number, success: boolean) => void) => {
        dispatch(update({ id: survey.id, json: creator.JSON }));
        callback(saveNo, true);
    }

    return (<>
            <SurveyCreatorComponent creator={creator}/>
        </>)
}

export default Editor