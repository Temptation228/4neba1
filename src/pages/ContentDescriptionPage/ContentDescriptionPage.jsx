import style from './contentdescriptionpage.module.css'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router';

import { Loader } from '../../components/Loader/Loader';
import { api } from '../../services/api';
import { ContentsTable } from '../../components/ContentsTable/ContentsTable';

export const ContentDescriptionPage = () => {
    const baseUrl = process.env.REACT_APP_BACKEND

    const [data, setData] = useState(null)
    const id = useParams()

    useEffect( () => {
        api.get(`${baseUrl}/${id}`)
            .then((response) => {
                setData(response.data)
                console.log(response.data)
            }).catch((e) => {
                console.log(e)
            })
    }, [])


    return (
        data 
        ? <ContentsTable data={data} />
        : <Loader />
    )
}