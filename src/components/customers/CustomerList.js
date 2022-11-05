import { useState, useEffect } from "react";
import { Customer } from "./Customer";
import "./Customers.css";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomerList = async () => {
      const response = await fetch(
        `http://localhost:5010/customers?_expand=user`
      );
      const customersList = await response.json();
      setCustomers(customersList);
    };
    fetchCustomerList();
  }, []);

  return (
    <>
      <article className="customers">
        {customers.map((customer) => (
          <Customer customer={customer} key={customer.id} />
        ))}
      </article>
    </>
  );
};
