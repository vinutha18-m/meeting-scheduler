export default function Confirmation({ date, time, user }) {

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
    const meetLink = "https://meet.google.com/demo-meeting";
  
    return (
      <div className="confirm">
  
        <h1>🎉 Booking Confirmed</h1>
  
        <p>Your meeting has been scheduled.</p>
  
        <h3>{date.toDateString()}</h3>
        <h3>{time}</h3>
  
        <p>Timezone: {timezone}</p>
  
        <p>
          Attendee: {user.first} {user.last}
        </p>
  
        <p>Email: {user.email}</p>
  
        <p>
          Meeting Link: 
          <a href={meetLink} target="_blank"> Join Google Meet</a>
        </p>
  
        <div className="actions">
          <button>Reschedule</button>
          <button>Cancel</button>
        </div>
  
        <div className="email-preview">
  
          <h3>Email Sent (Simulation)</h3>
  
          <p>
            To: {user.email}
          </p>
  
          <p>
            Subject: Meeting Confirmation
          </p>
  
          <p>
            Your meeting is scheduled for
            <br/>
            {date.toDateString()} at {time}
            <br/>
            Timezone: {timezone}
          </p>
  
          <p>
            Join link: {meetLink}
          </p>
  
        </div>
  
      </div>
    );
  }