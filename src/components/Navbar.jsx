import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
function Navbar() {
    let { addemp, empsearch } = useParams()
    let { byId } = useParams()
    let [search, setSearch] = useState(false)
    console.log("Navbar componenet");
    return (
        <nav class='text-light text-center d-flex flex-column justify-content-evenly '>
            <Link to="/">
                <div class='app p-2'>
                    <i class="fa-solid fa-house fs-4"></i>
                    <span>Home</span>
                </div>
            </Link>
            <Link to="/addemp">
                <div class='addemp p-2' >
                    <i class="fa-solid fa-user fs-4"></i>
                    <span>Add Employee</span>
                </div>
            </Link>
            <Link to="/deleteEmp">
                <div class='trash p-2'>
                    <i class="fa-solid fa-trash fs-4"></i>
                    <span>Delete Employee</span>
                </div>
            </Link>
            <div class='updateemp p-2'>
                <i class="fa-solid fa-pen fs-4"></i>
                <span>Update Employee</span>
            </div>
            <div class='searchemp p-2' onClick={() => { setSearch(!search) }}>
                <i class="fa-solid fa-magnifying-glass fa-bounce fs-4"></i>
                <span>Search Employee</span>
            </div>
            <div class='setting p-2'>
                <i class="fa-solid fa-gear fs-4"></i>
                <span>Settings</span>
            </div>
        </nav>
    )
}
export default Navbar
