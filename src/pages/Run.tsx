import { useParams } from 'react-router'
import Runner from '../components/Runner'

const Run = () => {
    const { id } = useParams();
    return (<>
        <h1>{'Run survey ' + id}</h1>
        <Runner id={id as string}/>
    </>);
}

export default Run;