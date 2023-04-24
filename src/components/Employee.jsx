
import useFetch from '../customHook/useFetch';
import Cards from './Cards';
import Employeedetails from './Employeedetails'
import { useNavigate } from "react-router-dom";
function Employee() {
    let { empData, load, mess } = useFetch("http://localhost:9091/getallemp")
    let history=useNavigate()
    let handleLogout = () => {
        localStorage.clear()
        history("/")
    }
    return (
        <div>
            <Cards />
            <div class="empdetails">
                <h2 class='text-center text-secondary'>Employee Details</h2>
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
                            <th>Emp Designation</th>
                        </tr>
                    </thead>
                    {empData && <Employeedetails empData={empData} />}
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

export default Employee
