import { Link } from "react-router-dom";

export const Employee = (props) => {
  return (
    <section className="employee">
      <div>
        <Link className="employee__link" to={`/employee/${props.employee.id}`}>
          Name: {props.employee.fullName}
        </Link>
      </div>
      <div>Email: {props.employee.email}</div>
    </section>
  );
};
