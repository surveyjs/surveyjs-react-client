import React from 'react'
import { add, remove } from '../redux/surveys'
import { useReduxDispatch, useReduxSelector } from '../redux'
import { Link } from 'react-router-dom'

const Surveys = (): React.ReactElement => {
    const surveys = useReduxSelector(state => state.surveys)
    const dispatch = useReduxDispatch()

    return (<table className='sjs-surveys-list'>
                <tr>
                    <th>Survey name</th>
                    <th>
                        <span className='sjs-button' title='increment' onClick={() => dispatch(add())}>add</span>                        
                    </th>
                </tr>
            {surveys.map(survey => 
                <tr key={survey.id} className='sjs-surveys-list__row'>
                    <td><span>{survey.name}</span></td>
                    <td>
                        <Link className='sjs-button' to={'run/' + survey.id}><span>run</span></Link>
                        <Link className='sjs-button' to={'edit/' + survey.id}><span>edit</span></Link>
                        <span className='sjs-button' onClick={() => dispatch(remove(survey.id))}>remove</span>
                    </td>
                </tr>
            )}
    </table>)
}

export default Surveys