import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useFetchWebDeveloper(api) {
    let [empWeb, setEmpWeb] = useState(null), [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            axios.get(api)
                .then(reslove => {
                    if (reslove.status == 200) {
                        setEmpWeb(reslove.data)
                        setLoad(!load)
                    } 
                })
        }, 5000)
    }, [])

    return { empWeb, load};
}

export default useFetchWebDeveloper
