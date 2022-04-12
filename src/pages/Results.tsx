import { useParams } from 'react-router'
import Viewer from '../components/Viewer'

const Results = () => {
    const { id } = useParams();
    return (<>
        <h1>{'Survey results' + id}</h1>
        <div className='sjs-editor-container'>
            <Viewer id={id as string}/>
        </div>
    </>);
}

export default Results;