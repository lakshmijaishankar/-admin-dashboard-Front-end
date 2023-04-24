
import "../styles/empdetails.css"
function Employeedetails({ empData }) {
    return (
        <>
            <tbody>
                {
                    empData && empData.map((value, index) => {
                        return (
                            <tr className={index % 2 == 0 ? 'even' : "odd"}>
                                <td>{value.empId}</td>
                                <td>{value.empName}</td>
                                <td>{value.empEmail}</td>
                                <td>{value.empPhone}</td>
                                <td>{value.empState}</td>
                                <td>{value.empDoj}</td>
                                <td>{value.empSalary}</td>
                                <td>{value.empDesignation}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </>
    )
}

export default Employeedetails
