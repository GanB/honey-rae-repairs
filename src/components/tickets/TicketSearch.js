import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Tickets.css";

export const TicketSearch = ({ setterFunction }) => {
  const navigate = useNavigate();

  const localHoneyUser = localStorage.getItem("honey_user");
  const honeyUserObject = JSON.parse(localHoneyUser);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter search terms"
          onChange={(changeEvent) => {
            setterFunction(changeEvent.target.value);
          }}
        ></input>
      </div>
    </>
  );
};
