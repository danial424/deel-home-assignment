import ToolBar from '../components/ToolBar';
import {useNavigate} from 'react-router-dom';
import { LISTING_SCREEN } from '../constants/ScreenNames';

const PayrollListing = () => {
    const navigate = useNavigate();

    return (
        <div>
            <ToolBar title={LISTING_SCREEN} />
            <div onClick={()=>{navigate('/detail/1')}}>Testing</div>
        </div>
    )
}

export default PayrollListing;