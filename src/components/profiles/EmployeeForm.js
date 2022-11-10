import { useEffect, useState } from "react";
import { json } from "react-router-dom";

export const EmployeeForm = (props) => {
  // TODO: Provide initial state for profile
  const [profile, setProfile] = useState({
    specialty: "",
    rate: 0,
    userId: 0,
  });

  // TODO: Get employee profile info from API and update state

  useEffect(() => {
    fetch(`http://localhost:5010/employees?userId=${props.localUser.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data[0]);
      });
  }, []);

  const saveButtonClickHandler = (event) => {
    event.preventDefault();

    /*
            TODO: Perform the PUT fetch() call here to update the profile.
            Navigate user to home page when done.
        */

    return fetch(`http://localhost:5010/employees/${profile.id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });
  };

  return (
    <form className="profile">
      <h2 className="profile__title">New Service Ticket</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="specialty">Specialty:</label>
          <input
            required
            autoFocus
            type="text"
            className="form-control"
            value={profile.specialty}
            onChange={(evt) => {
              // TODO: Update specialty property
              const copy = { ...profile };
              copy.specialty = evt.target.value;
              setProfile(copy);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Hourly rate:</label>
          <input
            type="number"
            className="form-control"
            value={profile.rate}
            onChange={(evt) => {
              // TODO: Update rate property
              const copy = { ...profile };
              copy.rate = parseFloat(evt.target.value);
              setProfile(copy);
            }}
          />
        </div>
      </fieldset>
      <button onClick={saveButtonClickHandler} className="btn btn-primary">
        Save Profile
      </button>
    </form>
  );
};
