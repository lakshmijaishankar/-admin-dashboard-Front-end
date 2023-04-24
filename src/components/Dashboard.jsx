import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Dashboard() {
    let [searchEmp, setSearchEmp] = useState("")
    let [logout, setLogout] = useState(false)
    return (
            <div class="navbartop row justify-content-center m-0 align-items-center pt-2 pb-2 gap-lg-5">
                <div class='col-3 row justify-content-center align-items-center gap-2'>
                    <div class='text-light col-2 me-0'>
                        <i class="fa-solid fa-bars fs-4 text-primary"></i>
                    </div>
                    <div class='col-9'>
                        <span class='fs-4 m-0'>Admin Dashboard</span>
                    </div>
                </div>
                <div class="search col-5 row justify-content-between align-items-center">
                    <div class="inputbox col-9">
                        <input type="search" placeholder='Search For Employee' class='w-100 ps-4 pb-2 pt-2 rounded-2' onChange={e => setSearchEmp(e.target.value)} value={searchEmp} />
                    </div>
                    <div class="searchbutton col-2">
                        <Link to={`/search/${searchEmp}`}><button class='btn btn-secondary rounded-0'>Search</button></Link>
                    </div>
                </div>
                <div class='col-3 d-flex justify-content-end'>
                    <div class='w-75 d-flex justify-content-evenly align-items-center '>
                        <div class="moon">
                            <i class="fa-solid fa-moon fs-3 text-primary"></i>
                        </div>
                        <div class="bell">
                            <i class="fa-solid fa-bell  fs-3 text-warning"></i>
                        </div>
                    </div>
                </div>
            </div>
   
    )
}

export default Dashboard
