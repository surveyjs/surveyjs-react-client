import React, { useEffect, useRef } from 'react'
import { useReduxDispatch } from '../redux'
import { load } from '../redux/results'
import { get } from '../redux/surveys'
import { Model } from 'survey-core'
import 'tabulator-tables/dist/css/tabulator.css'
import 'survey-analytics/survey.analytics.tabulator.css'
const SurveyAnalyticsTabulator = require('survey-analytics/survey.analytics.tabulator')

const Viewer = (params: { id: string }): React.ReactElement => {
    const visContainerRef = useRef<HTMLDivElement>(null);
    const dispatch = useReduxDispatch()

    useEffect(() => {
        (async () => {
            const surveyAction = await dispatch(get(params.id))
            const survey = surveyAction.payload
            const resultsAction = await dispatch(load(params.id))
            const data = resultsAction.payload.data
            if (data.length > 0 && visContainerRef.current) {
                var model = new Model(survey.json);
                visContainerRef.current.innerHTML = '';
                var surveyAnalyticsTabulator = new SurveyAnalyticsTabulator.Tabulator(
                    model,
                    data.map((item: any) => typeof item === 'string' ? JSON.parse(item) : item)
                  );
                surveyAnalyticsTabulator.render(visContainerRef.current);
            }
        })()
    }, [dispatch, params.id])    

    return (<>
            <div className='sjs-results-content' ref={visContainerRef}>
                <div className='sjs-results-placeholder'>
                    <span>This survey doesn't have any answers yet</span>
                </div>
            </div>
    </>)
}

export default Viewer