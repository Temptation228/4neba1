import style from './footer.module.css'

import { useNavigate } from 'react-router-dom'


export const Footer = () => {
    
    const navigate = useNavigate()

    const onClick = () => {
       navigate('/queue/')
    }

    return (
        <button onClick={onClick} className={style.footer}>
            Посмотреть очередь
        </button>
    )
}