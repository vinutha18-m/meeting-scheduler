import { useState } from "react";
import CalendarView from "./components/CalendarView";
import BookingForm from "./components/BookingForm";
import Confirmation from "./components/Confirmation";

export default function App() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <div className="container">
      <h1>Meeting Scheduler</h1>

      {step === 1 && (
        <CalendarView
          setDate={setDate}
          setTime={setTime}
          next={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <BookingForm
          date={date}
          time={time}
          setUser={setUser}
          next={() => setStep(3)}
          back={() => setStep(1)}
        />
      )}

      {step === 3 && (
        <Confirmation
          date={date}
          time={time}
          user={user}
        />
      )}
    </div>
  );
}
