import { useEffect, useState } from "react";
import "./Tickets.css";

export const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(
    () => {
      console.log("Initial state of tickets", tickets); // View the initial state of tickets
      const fetchData = async () => {
        const response = await fetch(`http://localhost:5010/serviceTickets`);
        const ticketArray = await response.json();
        setTickets(ticketArray);
      };
      fetchData();
    },
    [] // When this array is empty, you are observing initial component state
  );
  return (
    <>
      <h2>List of Tickets</h2>
      <article className="tickets">
        {tickets.map((ticket) => {
          return (
            <section className="ticket" key={ticket.id}>
              <header>{ticket.description}</header>
              <footer>Emergency: {ticket.emergency ? "❗" : "No"}</footer>
            </section>
          );
        })}
      </article>
    </>
  );
};
