import style from './contentsblock.module.css'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToTotalPrice, subtractFromTotalPrice } from '../../actions/Actions';

export const ContentBlock = ({el}) => {
    const baseUrl = process.env.REACT_APP_BACKEND
    
    const dispatch = useDispatch();

    const totalPrice = useSelector((state) => state.totalPrice); 

    const navigate = useNavigate()

    const onAdd = () => {
        dispatch({ type: 'ADD_TO_QUEUE', payload: el }); 
    };
    
    const onDelete = () => {
        dispatch({ type: 'REMOVE_FROM_QUEUE', payload: el.id });
    };
    
    return (
        <div className={style.contentBlockDiv}>
            <div className={style.image}>
                <img src={baseUrl + el.image} />
            </div>
            <div className={style.params}>
                <font className={style.param}>{el.format}</font>
                <font className={style.param}>{el.duration}</font>
            </div>
            <div className={style.params}>
                <font className={style.param}>{el.epizodes}</font>
                <font className={style.param}>{el.somethingelse}</font>
            </div>
            <div className={style.description}>{el.description}</div>
            {el.id
                ? <button onClick={() => navigate(`/content/${el.id}`)}> Подробнее </button>
                : queue.some((item) => item.id === el.id)
                    ? <button onClick={() => {
                        onDelete(el.id);
                        dispatch(subtractFromTotalPrice(el.price));
                    }}>Убрать из очереди</button>
                    : <button onClick={() => {
                        onAdd(el);
                        dispatch(addToTotalPrice(el.price));
                    }}>Добавить в очередь</button>
            }
        </div>
    )
}