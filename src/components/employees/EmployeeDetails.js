import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const { employeeId } = useParams();
  const [employeeDetails, setEmployeeDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5010/employees?_expand=user&_embed=employeeTickets&userId=${employeeId}`
      );
      const employeeDetailsFromApi = await response.json();
      setEmployeeDetails(employeeDetailsFromApi[0]);
    };
    fetchData();
  }, [employeeId]);

  return (
    <section className="employee">
      <header className="employee_header">
        {employeeDetails?.user?.fullName}
      </header>
      <div>Email: {employeeDetails?.user?.email}</div>
      <div>Specialty: {employeeDetails?.specialty}</div>
      <div>Rate: {employeeDetails?.rate}</div>
      <footer className="employee__footer">
        Currently working on {employeeDetails?.employeeTickets?.length}{" "}
        ticket(s)
      </footer>
    </section>
  );
};
