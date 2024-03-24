import ToolBar from '../components/ToolBar';
import {useNavigate} from 'react-router-dom';
import { LISTING_DETAIL } from '../constants/ScreenNames';

const PayrollDetail = () => {
    const navigate = useNavigate();
    return (
        <div>
            <ToolBar title={LISTING_DETAIL} />
            <div onClick={()=>{navigate(-1)}}>Testing</div>
        </div>
    )
}

export default PayrollDetail;