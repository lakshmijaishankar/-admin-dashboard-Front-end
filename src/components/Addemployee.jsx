import React, { useEffect, useRef, useState } from 'react'
import "../styles/addemp.css"
import img from "../images/emp.png"
import { useNavigate } from 'react-router-dom'
import Cards from './Cards'
function Addemployee() {
    let empName = useRef(), empDoj = useRef(), empSalary = useRef(), empEmail = useRef(), empPhone = useRef(),
        empState = useRef(), [empDesignation, setEmpDesignation] = useState()
    let [show, setShow] = useState(false)
    let navigate = useNavigate()
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("admin")).flag) {
            setShow(!show)
        } else {
            alert("Login to admin dashboard")
            navigate("/")
        }
    }, [])
    let handleEmp = (e) => {
        e.preventDefault()
        let empData = {
            empName: empName.current.value,
            empDoj: empDoj.current.value,
            empSalary: empSalary.current.value,
            empState: empState.current.value,
            empDesignation: empDesignation,
            empEmail: empEmail.current.value,
            empPhone: empPhone.current.value
        }
        fetch("http://localhost:9091/addemp", {
            method: "Post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(empData)
        })
            .then(resolve => {
                if (resolve.ok) {
                    alert("Employee data has been saved to the database")
                    navigate("/getallemployee")
                    Cards()
                }
            })
    }
    return (
         show &&  <div class="empform d-flex flex-wrap bg-light p-4 align-items-center">
            <div class="imgemp w-50 d-flex justify-content-center align-items-center">
                <img src={img} alt="" />
            </div>
            <div class='w-50 d-flex justify-content-end '>
                <div class='w-85'>
                    <div class="addemployee">
                        <span class='fs-2 text-center'>Add New Employee </span>
                    </div>
                    <div class="formemp ">
                        <form onSubmit={handleEmp}>
                            <div class='d-flex'>
                                <div class='w-50'>
                                    <span>Employee Name</span>
                                    <input type="text" placeholder='Enter Employee Name' ref={empName} />
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div class='w-50'>
                                    <span>Employee Email</span>
                                    <input type="email" placeholder='Enter Employee Email' ref={empEmail} />
                                    <i class="fa-sharp fa-solid fa-envelope"></i>
                                </div>
                            </div>
                            <div class='d-flex'>
                                <div class='w-50'>
                                    <span>Employee Date of joining</span>
                                    <input type="date" ref={empDoj} />
                                    <i class="fa-solid fa-calendar-days"></i>
                                </div>
                                <div class='w-50'>
                                    <span>Employee Salary</span>
                                    <input type="number" placeholder='Enter Employee Salary' ref={empSalary} />
                                    <i class="fa-solid fa-indian-rupee-sign"></i>
                                </div>
                            </div>
                            <div class='d-flex'>
                                <div class='w-50'>
                                    <span>Employee State</span>
                                    <input type="text" placeholder='Enter Employee State' ref={empState} />
                                    <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <div class='w-50'>
                                    <span>Employee Phone Number</span>
                                    <input type="number" placeholder='Enter Phone Number' ref={empPhone} />
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                            </div>
                            <div>
                                <span>Employee Designation</span>
                                <select class=' p-2' onClick={e => setEmpDesignation(e.target.value)}>
                                    <option selected disabled >Select Designation</option>
                                    <option value="Java Developer">Java  Developer</option>
                                    <option value="Mern Developer">Mern  Developer</option>
                                    <option value="Sql Developer">Sql Developer</option>
                                    <option value="Web Developer">Web Developer</option>
                                </select>
                            </div>
                            <div class='d-flex justify-content-center'>
                                <button class='btn btn-primary rounded-0 '>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addemployee
