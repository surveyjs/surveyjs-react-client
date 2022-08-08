import React, { useEffect } from 'react'
import { create, load, remove } from '../redux/surveys'
import { useReduxDispatch, useReduxSelector } from '../redux'
import { Link } from 'react-router-dom'
import './Surveys.css'

const Surveys = (): React.ReactElement => {
    const surveys = useReduxSelector(state => state.surveys.surveys)
    const dispatch = useReduxDispatch()

    const postStatus = useReduxSelector(state => state.surveys.status)

    useEffect(() => {
      if (postStatus === 'idle') {
        dispatch(load())
      }
    }, [postStatus, dispatch])    

    return (<>
        <table className='sjs-surveys-list'>
            {surveys.map(survey => 
                <tr key={survey.id} className='sjs-surveys-list__row'>
                    <td><span>{survey.name}</span></td>
                    <td>
                        <Link className='sjs-button' to={'run/' + survey.id}><span>Run</span></Link>
                        <Link className='sjs-button' to={'edit/' + survey.id}><span>Edit</span></Link>
                        <Link className='sjs-button' to={'results/' + survey.id}><span>Results</span></Link>
                        <span className='sjs-button sjs-remove-btn' onClick={() => dispatch(remove(survey.id))}>Remove</span>
                    </td>
                </tr>
            )}
        </table>
        <div className='sjs-surveys-list__footer'>
            <span className='sjs-button sjs-add-btn' title='increment' onClick={() => dispatch(create())}>Add Survey</span>                        
        </div>
    </>)
}

export default Surveys