import React, { useEffect } from 'react'
import { useReduxDispatch, useReduxSelector } from '../redux'
import { load } from '../redux/results'
import { Model } from 'survey-core'
import "tabulator-tables/dist/css/tabulator.css"
import "survey-analytics/survey.analytics.tabulator.css"
const SurveyAnalyticsTabulator = require("survey-analytics/survey.analytics.tabulator")

const Viewer = (params: { id: string }): React.ReactElement => {
    const id = useReduxSelector(state => state.results.id)
    const data = useReduxSelector(state => state.results.data)
    const postStatus = useReduxSelector(state => state.results.status)
    const surveys = useReduxSelector(state => state.surveys.surveys)
    const survey = surveys.filter(s => s.id === params.id)[0];
    const dispatch = useReduxDispatch()

    useEffect(() => {
      if (id !== params.id || postStatus === 'idle') {
        dispatch(load(params.id))
      }
      if (data.length > 0) {
        var model = new Model(survey.json);
        var panel1Node = document.getElementById("vizPanel1");
        // panel1Node?.innerHTML = "";
        var surveyAnalyticsTabulator = new SurveyAnalyticsTabulator.Tabulator(
            model,
            data
          );
          surveyAnalyticsTabulator.render(panel1Node);
      }
    }, [postStatus, dispatch])    

    return (<>
            <div>{data.length}</div>
            <div id="vizPanel1">
                <div id="surveyElement" style={{ display: 'inline-block', width: '100%' }}></div>
                <div id="surveyAnalyticsContainer"></div>
            </div>
    </>)
}

export default Viewer