import { useState } from "react";

export default function BookingForm({ date, time, setUser, next, back }) {

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");

  const submit = () => {

    if (!first || !last || !email) {
      alert("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    setUser({ first, last, email });
    next();
  };

  return (
    <div className="form">

      <h2>Your Information</h2>

      <div className="meeting-info">
        <p><b>Date:</b> {date.toDateString()}</p>
        <p><b>Time:</b> {time}</p>
        <p><b>Location:</b> Google Meet</p>
      </div>

      <input
        placeholder="First Name"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />

      <input
        placeholder="Surname"
        value={last}
        onChange={(e) => setLast(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="buttons">
        <button onClick={back}>Back</button>
        <button onClick={submit}>Confirm Booking</button>
      </div>

    </div>
  );
}