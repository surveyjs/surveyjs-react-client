import { useParams } from 'react-router'
import Editor from '../components/Editor'

const Edit = () => {
    const { id } = useParams();
    return (<>
        <h1>{'Edit survey ' + id}</h1>
        <div className='sjs-editor-container'>
            <Editor id={id as string}/>
        </div>
    </>);
}

export default Edit;