import { useParams } from 'react-router'
import { useReduxDispatch, useReduxSelector } from '../redux'
import { post } from '../redux/results'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import 'survey-core/survey-core.css'

const Run = () => {
    const { id } = useParams();
    const dispatch = useReduxDispatch()
    const surveys = useReduxSelector(state => state.surveys.surveys)
    const survey = surveys.filter(s => s.id === id)[0]
    const model = new Model(survey.json)

    model
        .onComplete
        .add((sender: Model) => {
            dispatch(post({postId: id as string, surveyResult: sender.data, surveyResultText: JSON.stringify(sender.data)}))
        });    

    return (<>
        <h1>{survey.name}</h1>
        <Survey model={model}/>
    </>);
}

export default Run;