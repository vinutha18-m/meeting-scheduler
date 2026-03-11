import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CalendarView({ setDate, setTime, next }) {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const slots = [];

  for (let x = 9; x < 17; x++) {
    slots.push(`${x}:00`);
    slots.push(`${x}:15`);
    slots.push(`${x}:30`);
    slots.push(`${x}:45`);
  }

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  return (
    <div className="calendar-container">

      <div className="calendar">
        <DatePicker
          selected={selectedDate}
          onChange={(d) => setSelectedDate(d)}
          minDate={new Date()}
          filterDate={(date) => !isWeekend(date)}
          inline
        />
      </div>

      <div className="timeslots">
        {slots.map((s, x) => (
          <button
            key={x}
            className={selectedTime === s ? "active" : ""}
            onClick={() => setSelectedTime(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <button
        className="continueBtn"
        disabled={!selectedTime}
        onClick={() => {
          setDate(selectedDate);
          setTime(selectedTime);
          next();
        }}
      >
        Continue
      </button>

    </div>
  );
}