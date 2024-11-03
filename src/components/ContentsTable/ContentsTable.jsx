import { ContentBlock } from '../ContentsBlock/ContentsBlock'
import style from './contentstable.module.css'




export const ContentsTable = ({data}) => {


    return (
        <div className={style.contentsTable}>
            {data.map((el) => (
                <ContentBlock el={el} />
            ))}
        </div>
    )
}