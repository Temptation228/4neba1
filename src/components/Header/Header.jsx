import style from './header.module.css'
import logo from '../../media/Logo.svg' 



export const Header = () => {
    
    return (
        <header className={style.header}>
            <img src={logo} />
        </header>
    )
}