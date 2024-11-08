import style from './queuepage.module.css'

import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'


export const QueuePage = () => {
    const queue = useSelector((state) => state.queue)
    const navigate = useNavigate()
    const deviceId = useSelector((state) => state.device.deviceId)
    const totalPrice = useSelector((state) => state.totalPrice)

    const sendQueueData = () => {
        const baseUrl = process.env.REACT_APP_BACKEND
        
        const url = baseUrl 

        WebSocketRequest({
            url: url,
            type: 'POST',
            data: queue,
            onOpen: () => console.log('Подключение открыто'),
            onMessage: (message) => console.log('Сообщение:', message),
            onClose: () => console.log('Подключение закрыто'),
            onError: (error) => console.error('Ошибка:', error),
        });
      };
    
      const handlePayment = () => {
        sendQueueData(); 
      };

    return (
        <div className={style.queuePage}>
            {queue.map(el => (
                <ContentBlock el={el} />
            ))}
            <p>{totalPrice}</p>
            <button onClick={handlePayment}>Оплатить</button>
        </div>
    );
};