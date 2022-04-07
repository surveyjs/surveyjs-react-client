import { useParams } from 'react-router'
import Editor from '../components/Editor'

const Edit = () => {
    const { id } = useParams();
    return (<>
        <h1>{'Edit survey ' + id}</h1>
        <Editor id={id as string}/>
    </>);
}

export default Edit;