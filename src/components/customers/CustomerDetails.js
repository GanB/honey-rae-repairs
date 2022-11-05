import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Customers.css";

export const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customerDetails, setCustomerDetails] = useState({});

  useEffect(() => {
    const getCustomerDetails = async () => {
      const response = await fetch(
        `http://localhost:5010/customers?_expand=user&userId=${customerId}`
      );

      const customerDetailsFromApi = await response.json();
      setCustomerDetails(customerDetailsFromApi[0]);
    };
    getCustomerDetails();
  }, [customerId]);

  return (
    <>
      <section className="customer">
        <header className="customer__header">
          {customerDetails?.user?.fullName}
        </header>
        <div>Email: {customerDetails?.user?.email}</div>
        <div>Phone: {customerDetails?.phoneNumber}</div>
        <div>Address: {customerDetails?.address}</div>
        <footer className="customer__footer"></footer>
      </section>
    </>
  );
};
