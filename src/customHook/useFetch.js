import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useFetch(api) {
    let [empData, setEmpData] = useState(null), [load, setLoad] = useState(true), [mess, setMess] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            axios.get(api)
                .then(reslove => {
                    if (reslove.status == 200) {
                        setEmpData(reslove.data)
                        setLoad(!load)
                    } 
                })
            .catch(()=>{
                setMess(!mess)
                setLoad(!load)
            })
        }, 5000)
    }, [])
//  console.log(count);
    return { empData, load, mess};
}

export default useFetch
