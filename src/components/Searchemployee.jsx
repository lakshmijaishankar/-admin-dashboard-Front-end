import React from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from '../customHook/useFetch'
import Employeedetails from './Employeedetails'
import Cards from './Cards'

function Searchemployee() {
    let { empsearch } = useParams()
    let { empData, load, mess } = UseFetch("http://localhost:9091/getallemp")
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
                    {empData && <Employeedetails
                        empData={empData.filter(value => ((value.empId == empsearch) || (value.empEmail == empsearch)))}
                        load={load}
                        mess={mess} />}
                    {load && <div class="loding"></div>}
                </table>
                {mess && <h3 class='text-center'>Run the backend server</h3>}
            </div>
        </div>

    )
}

export default Searchemployee
