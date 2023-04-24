import React from 'react'
import useFetch from '../customHook/useFetch'
import "../styles/cards.css"
function Cards() {
    let { empData, load } = useFetch("http://localhost:9091/getalldeveloper")
    let array = [
        {
            designation: "Total java full stack developer",
            i: <i class="fa-brands fa-java fs-1"></i>,
            skill: "java"
        },
        {
            designation: "Total web developer",
            i: <i class="fa-brands fa-css3 fs-1 text-secondary"></i>,
            skill: "front"
        },
        {
            designation: "Total sql developer",
            i: <i class="fa-solid fa-database fs-1 text-primary"></i>,
            skill: "sql"
        },
        {
            designation: "Total mern stack developer",
            i: <i class="fa-brands fa-css3-alt fs-1 text-warning"></i>,
            skill: "mern"
        }]

    return (
        <div class="developers">
            <div class='row me-0 justify-content-center gap-5 ms-0 p-3 developer'>
                {
                    array.map((value, index) => {
                        return (
                            <div class={value.skill==="java"?'java col-2 bg-dark text-light rounded-2 p-3 d-flex':value.skill+' col-2 text-dark rounded-2 p-3 d-flex'} key={index}>
                                <div class='d-flex flex-column'>
                                    {load ? <div class="alldeveloper"></div> : <span class='fs-3'>{empData[index]}</span>}
                                    <div class='fs-6'>{value.designation}</div>
                                </div>
                                <div>
                                    {value.i}
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cards

