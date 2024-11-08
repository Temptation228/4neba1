import style from './mainpage.module.css'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ContentsTable } from '../../components/ContentsTable/ContentsTable'
import { Loader } from '../../components/Loader/Loader'
import { setDeviceId } from '../actions/deviceActions'; 

import WebSocketRequest from '../../request/WebSocketRequest'


export const MainPage = () => {
    const baseUrl = process.env.REACT_APP_BACKEND
    const dispatch = useDispatch();

    const [data, setData] = useState(null)
    const deviceId = useSelector((state) => state.device.deviceId)

    const url = `${baseUrl}/something`

    const handleWebSocketOpen = () => {
        console.log('Подкючение открыто');
      };
    
    const handleWebSocketMessage = (message) => {
        try {
            setData(JSON.parse(message)); 
            console.log('Полученные данные:', data);
            } catch (error) {
            console.error('Ошибка при парсинге данных:', error);
            }
      };
    
    const handleWebSocketClose = () => {
        console.log('Подключение закрыто');
    };
    
    const handleWebSocketError = (error) => {
        console.error('Ошибка:', error);
    };

    useEffect(() => {
        const pathId = window.location.pathname.split('/').pop();
        if (pathId && !deviceId) { 
            dispatch(setDeviceId(pathId));
        }
    }, [dispatch, deviceId]);

    <WebSocketRequest
        url={url}
        type="GET"
        onOpen={handleWebSocketOpen}
        onMessage={handleWebSocketMessage}
        onClose={handleWebSocketClose}
        onError={handleWebSocketError}
    />

    return (
        data 
        ? <div className={style.mainPageDiv}>
            <ContentsTable data={data}/>
        </div>
        : <Loader />
    )
}