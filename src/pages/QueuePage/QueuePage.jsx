import style from './queuepage.module.css'

import { useSelector } from 'react-redux';


export const QueuePage = () => {
    const queue = useSelector(state => state.queue);

    return (
        <div className={style.queuePage}>
            {queue.map(el => (
                <ContentBlock el={el} />
            ))}
        </div>
    );
};