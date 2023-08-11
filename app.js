function App() {
  const [breakTime, setBreakTime] = React.useState(5);
  const [sessionTime, setSessionTime] = React.useState(25);
  const [onSession, setOnSession] = React.useState(true);
  const [timer, setTimer] = React.useState(25);

  return (
    <div className="app">
      <h1 className="title">25 + 5 Clock</h1>
      <div id="timer-label">{onSession ? `"SESSION"` : `"BREAK"`}</div>
      <div id="time-left">{timer}</div>
      <div className="time-changer-container">
        <ChangeTimer
          label="Break Length"
          labelId="break-label"
          decrementId="break-decrement"
          incrementId="break-increment"
          lengthId="break-length"
          timeLength={breakTime}
        />
        <ChangeTimer
          label="Session Length"
          labelId="session-label"
          decrementId="session-decrement"
          incrementId="session-increment"
          lengthId="session-length"
          timeLength="25"
        />
      </div>
    </div>
  );
}

function ChangeTimer({
  label,
  labelId,
  decrementId,
  incrementId,
  lengthId,
  timeLength,
}) {
  return (
    <div>
      <div id={labelId}>{label}</div>
      <div className="length-settings">
        <div className="up-down-btn" id={decrementId}>
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="countdown-time" id={lengthId}>
          {timeLength}
        </div>
        <div className="up-down-btn" id={incrementId}>
          <i className="fa-solid fa-caret-up"></i>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
