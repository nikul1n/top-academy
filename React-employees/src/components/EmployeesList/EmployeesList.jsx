import { useEffect, useState } from 'react';
import EmployeesItem from '../EmployeesItem/EmployeesItem.jsx'
import './EmployeesList.css'
import useDataLoading from '../../hooks/useDataLoading.js';


function EmployeesList() {
    const { data: employee, error, isLoading } = useDataLoading(["http://192.168.110.58/employees"]);

    return (
        <section className="employees-list">
            <ul>
                <li>
                    {employee?.map((employee) => (
                        <EmployeesItem {...employee} />
                    )
                    )}
                </li>
            </ul>
        </section>
    )
}

export default EmployeesList

    // const [employee, setEmployees] = useState([]);

    // useEffect(() => {
    //     const abortController = new AbortController();
    //     fetch('http://192.168.110.58/employees', {signal: abortController.signal}).then(
    //         (response) => response.json()
    //     ).then(
    //         (data) => setEmployees(data)
    //     );

    //     return () => {
    //         abortController.abort();
    //     }
    // }, [])


// {employee.map(
//             (employee) =>
//         )}

// fullName={"Ivan"} phone={"+77777777777"} email={"124124@gmail.com"} speciality={"asfasf"}

{/* <EmployeesItem fullName={"Ivan"} phone={"+77777777777"} email={"124124@gmail.com"} speciality={"asfasf"}/> */ }

// fullName="Ivan" phone="+77777777777" email="124124@gmail.com" speciality="asfasf"