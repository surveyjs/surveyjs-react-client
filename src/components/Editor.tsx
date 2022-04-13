import React, { useEffect } from 'react'
import { useReduxDispatch, useReduxSelector } from '../redux'
import { get, update } from '../redux/surveys'
import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react'
import 'survey-creator-core/survey-creator-core.css'

const Editor = (params: { id: string }): React.ReactElement => {
    const dispatch = useReduxDispatch()
    const options = {
        showLogicTab: true,
        showTranslationTab: true
    };
    const creator = new SurveyCreator(options);
    creator.isAutoSave = true;
    creator.saveSurveyFunc = (saveNo: number, callback: (no: number, success: boolean) => void) => {
        dispatch(update({ id: params.id, json: creator.JSON }))
        callback(saveNo, true);
    }

    useEffect(() => {
        (async () => {
            const surveyAction = await dispatch(get(params.id))
            creator.JSON = surveyAction.payload.json
        })()
    }, [dispatch])

    return (<>
            <SurveyCreatorComponent creator={creator}/>
        </>)
}

export default Editor