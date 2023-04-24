import React, { useEffect, useRef, useState } from 'react'
import "../styles/adminlogin.css"
import adminlogo from "../images/adminlogo.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
function Adminlogin() {
    let adminEmail = useRef(), adminPassword = useRef()
    let [email, setEmail] = useState(false), [password, setPassword] = useState(false),[home,setHome]=useState(false)
    let navigate=useNavigate()
    let login = localStorage.getItem("admin")
    if (login == null) {
        localStorage.setItem("admin", "{}")
    }
    useEffect(()=>{
        let show =JSON.parse(localStorage.getItem("admin")).flag
        console.log("admin login");
        if(show){
            navigate("/getallemployee")
            setHome(show)
        }
        
    },[])
    let handleAdminLogin = (e) => {
        e.preventDefault()
        let flag = false;
        // form validation
        // if email is not equal to empty string
        if (adminEmail.current.value != "") {
            setEmail(false)
            // if password is not equal to empty string
            if (adminPassword.current.value != "") {
                flag = true;
                setPassword(false)
                if (flag) {
                    axios.get("http://localhost:9091/admin/login",
                        {
                            headers: {
                                email: adminEmail.current.value,
                                pwd: adminPassword.current.value
                            }
                        })
                        .then(reslove => {
                            if (reslove.status == 200) {
                                let admin = localStorage.getItem("admin")
                                admin = JSON.parse(admin)
                                admin.flag = true
                                localStorage.setItem("admin", JSON.stringify(admin))
                                alert(reslove.data)
                                navigate("/getallemployee")
                            }
                        })
                       .catch(err=>{
                        if(err.response.status==400){
                            alert(err.response.data)
                        }
                       })
                }

            } else {
                setPassword(true)
            }
        }
        // if email is equal to empty string
        else {
            if (adminEmail.current.value === "") {
                setEmail(true)
                // if password is equal to empty string
                if (adminPassword.current.value === "") {
                    setPassword(true)
                }
            }
        }
    }
    return (
        !home && <div className="adminlogin d-flex justify-content-end align-items-center mt-5">
            <div className="leftcontainer">
                <h2 className='text-center'>Admin Login Dashboard</h2>
                <div className="adminform">
                    <form className='w-75 ps-2' onSubmit={handleAdminLogin}>
                        <div className="username">
                            <span>Admin Email-Id</span>
                            <input type="email" placeholder='Enter admin email-id' ref={adminEmail} />
                            <i class="fa-sharp fa-solid fa-envelope"></i>
                            {email && <span>Email-id is Requried</span>}
                        </div>
                        <div className="password">
                            <span>Admin Password</span>
                            <input type="password" placeholder='Enter admin password' ref={adminPassword} />
                            <i class="fa-sharp fa-solid fa-lock"></i>
                            {password && <span>Password is Requried</span>}
                        </div>
                        <div>
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="rightcontainer ">
                <img src={adminlogo} alt="/adminlogin" />
            </div>
        </div>
    )
}

export default Adminlogin
