import { Outlet, Route, Routes } from "react-router-dom";
import { EmployeeDetails } from "../employees/EmployeeDetails";
import { EmployeeList } from "../employees/EmployeeList";
import { TicketContainer } from "../tickets/TicketContainer";
import { CustomerList } from "../customers/CustomerList";
import { CustomerDetails } from "../customers/CustomerDetails";
import { Profile } from "../profiles/Profile";

export const EmployeeViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Honey Rae Repair Shop</h1>
            <div>Your one-stop-shop to get all your electronics fixed</div>

            <Outlet />
          </>
        }
      >
        <Route path="tickets" element={<TicketContainer />} />
        <Route path="employees" element={<EmployeeList />} />
        <Route path="customers" element={<CustomerList />} />
        <Route path="profile" element={<Profile />} />
        <Route path="customer/:customerId" element={<CustomerDetails />} />
        <Route path="employee/:employeeId" element={<EmployeeDetails />} />
      </Route>
    </Routes>
  );
};
