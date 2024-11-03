import { ContentsTable } from '../../components/ContentsTable/ContentsTable'
import { Loader } from '../../components/Loader/Loader'
import { api } from '../../services/api'
import style from './mainpage.module.css'

import { useState, useEffect } from 'react'


export const MainPage = () => {
    const baseUrl = process.env.REACT_APP_BACKEND

    const [data, setData] = useState(null)
    

    useEffect(() =>{
        api.get(`baseUrl`)
            .then((response) => {
                setData(response.data)
                console.log(response.data)
            }).catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        data 
        ? <div className={style.mainPageDiv}>
            <ContentsTable data={data}/>
        </div>
        : <Loader />
    )
}