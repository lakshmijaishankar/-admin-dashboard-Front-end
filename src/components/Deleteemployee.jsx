import React, { useEffect, useState } from 'react'
import "../styles/empdetails.css"
import useFetch from '../customHook/useFetch'
import Cards from './Cards'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Deleteemployee() {
    let { empData, load, mess } = useFetch("http://localhost:9091/getallemp")
    let navigate = useNavigate()
    let [show, setShow] = useState(false)
    let handleLogout = () => {
        localStorage.clear()
        navigate("/")
    }
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("admin")).flag) {
            setShow(!show)
        } else {
            alert("Login to admin dashboard")
            navigate("/")
        }
    }, [])
    let handleDeleteEmp = (empId) => {
        axios.delete("http://localhost:9091/deleteEmpById", { headers: { id: empId } })
            .then(reslove => {
                if (reslove.status == 200) {
                    alert(reslove.data)
                    navigate("/getallemployee")
                }
            })
            .catch(err => {
                alert(err.response.data)
            })
    }
    return (
        show && <div>
            <Cards />
            <div class="empdetails">
                <h2 class='text-center text-secondary'>Delete Employee</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Emp Id</th>
                            <th>Emp Name</th>
                            <th>Emp Email</th>
                            <th>Emp Phonenumber</th>
                            <th>Emp State</th>
                            <th>Emp Date of joining</th>
                            <th>Emp Salary</th>
                            <th>Delete Emp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empData && empData.map((value, index) => {
                                return (
                                    <tr class={index % 2 == 0 ? 'even' : "odd"} key={value.empId}>
                                        <td>{value.empId}</td>
                                        <td>{value.empName}</td>
                                        <td>{value.empEmail}</td>
                                        <td>{value.empPhone}</td>
                                        <td>{value.empState}</td>
                                        <td>{value.empDoj}</td>
                                        <td>{value.empSalary}</td>
                                        <td> <i class="fa-sharp fa-solid fa-trash fs-3 text-info" onClick={() => { handleDeleteEmp(value.empId) }}></i></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    {load && <div class="loding"></div>}
                </table>
                {mess && <h3 class='text-center'>Run the backend server</h3>}
            </div>
            {!load && <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-primary rounded-0" onClick={handleLogout}>Logout</button>
            </div>}
        </div>
    )
}

export default Deleteemployee
