import style from './selectionpage.module.css'

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setDeviceId } from '../../actions/Actions'; 

export const SelectionPage = ({ data }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deviceId = useSelector((state) => state.device.deviceId); 

    return (
        <div className={style.selectionPage}>
            {data ?? data.map((el) => (
                <div
                    key={el.id}
                    className={`${style.deviceItem} ${el.status === 'open' ? '' : style.disabled}`}
                    onClick={() => {
                        if (el.status === 'open') {
                            dispatch(setDeviceId(el.id));
                            navigate(`/vr/${deviceId}`);
                        }
                    }}
                >
                    Очки № {el.id} 
                </div>
            ))}
        </div>
    );
};