import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useFetchJavaDeveloper(api) {
    let [empJava, setEmpJava] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            axios.get(api)
                .then(reslove => {
                    if (reslove.status == 200) {
                        setEmpJava(reslove.data)
                    } 
                })
        }, 5000)
    }, [])

    return { empJava};
}

export default useFetchJavaDeveloper
