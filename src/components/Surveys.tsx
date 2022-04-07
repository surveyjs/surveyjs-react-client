import React from 'react'
import { add, remove } from '../redux/surveys'
import { useReduxDispatch, useReduxSelector } from '../redux'

const Surveys = (): React.ReactElement => {
    const surveys = useReduxSelector(state => state.surveys)
    const dispatch = useReduxDispatch()

    return (<>
            {surveys.map(survey => 
                <div key={survey.id}>
                    <span>{survey.name}</span>
                    <a className='sjs-button' title='run' href={'run/' + survey.id}>run</a>
                    <span className='sjs-button' title='remove' onClick={() => dispatch(remove(survey.id))}>remove</span>
                    <a className='sjs-button' title='edit' href={'edit/' + survey.id}>edit</a>
                </div>
            )}
            <span className='sjs-button' title='increment' onClick={() => dispatch(add())}>add</span>
    </>)
}

export default Surveys