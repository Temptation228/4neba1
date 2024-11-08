import style from './contentdescriptionpage.module.css'

import { useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import { Loader } from '../../components/Loader/Loader';
import { ContentsTable } from '../../components/ContentsTable/ContentsTable';
import WebSocketRequest from '../../request/WebSocketRequest';

export const ContentDescriptionPage = () => {
    const baseUrl = process.env.REACT_APP_BACKEND

    const deviceId = useSelector((state) => state.device.deviceId)
    const navigate = useNavigate()
    const [data, setData] = useState(null)

    const id = useParams()
    const url = `${baseUrl}/something/${id}`;

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
        ? <div>
            <button onClick={() => navigate(`/vr/${deviceId}`)}>
                Вернуться назад
            </button>
            <ContentsTable data={data} />
        </div>
        : <Loader />
    )
}