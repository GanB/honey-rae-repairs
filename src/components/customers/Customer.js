import "./Customers.css";
import { Link } from "react-router-dom";

export const Customer = (props) => {
  return (
    <>
      <section className="customer" key={props.customer.id}>
        <div>
          <Link
            className="customer__link"
            to={`/customer/${props.customer.id}`}
          >
            Name: {props.customer?.user?.fullName}
          </Link>
        </div>
        <div>Address: {props.customer?.address}</div>
        <div>Phone: {props.customer?.phoneNumber}</div>
      </section>
    </>
  );
};
