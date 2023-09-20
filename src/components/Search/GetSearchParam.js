import { useParams,useLocation } from 'react-router-dom';

const GetSearchParam = () =>{
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    if(!query){
        return false
    }
    return query
}

export default GetSearchParam