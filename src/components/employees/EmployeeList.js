import { useEffect, useState } from "react";
import { Employee } from "./Employee";
import "./Employees.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5010/users?isStaff=true`);
      const employeesArray = await response.json();
      setEmployees(employeesArray);
    };
    fetchData();
  }, []);

  return (
    <article className="employees">
      {employees.map((employee) => (
        <Employee key={`employee--${employee.id}`} employee={employee} />
      ))}
    </article>
  );
};
