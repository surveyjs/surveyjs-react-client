import React, { useEffect, useMemo } from 'react'
import { useReduxDispatch } from '../redux'
import { get, update } from '../redux/surveys'
import { SurveyCreator, SurveyCreatorComponent } from 'survey-creator-react'
import 'survey-creator-core/survey-creator-core.css'

const Editor = (params: { id: string }): React.ReactElement => {
    const dispatch = useReduxDispatch()
    const creator = useMemo(() => {
        const options = {
            showLogicTab: true,
            showThemeTab: true,
            showTranslationTab: true
        };
        return new SurveyCreator(options);
    }, []);
    creator.isAutoSave = true;
    creator.saveSurveyFunc = (saveNo: number, callback: (no: number, success: boolean) => void) => {
        dispatch(update({ id: params.id, json: creator.JSON, text: creator.text }))
        callback(saveNo, true);
    }

    useEffect(() => {
        (async () => {
            const surveyAction = await dispatch(get(params.id))
            if(typeof surveyAction.payload.json === 'object') {
                creator.JSON = surveyAction.payload.json
            } else {
                creator.text = surveyAction.payload.json
            }
        })()
    }, [dispatch, creator, params.id])

    return (<>
            <SurveyCreatorComponent creator={creator}/>
        </>)
}

export default Editor