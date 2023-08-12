function App() {
  const [breakTime, setBreakTime] = React.useState(5);
  const [sessionTime, setSessionTime] = React.useState(25);
  const [onSession, setOnSession] = React.useState(true);
  const [running, setRunning] = React.useState(false);
  const [timer, setTimer] = React.useState(sessionTime);
  const audio = document.getElementById("beep");

  const timeFormat = (timer) => {
    let timerInSeconds = timer * 60;
    let minutes = Math.floor(timerInSeconds / 60);
    let seconds = timerInSeconds % 60;

    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  };

  const changeLength = (change, id) => {
    if (change === "up") {
      if (id === "break-increment") {
        setBreakTime((prev) => (prev >= 59 ? prev : prev + 1));
      } else if (id === "session-increment") {
        setSessionTime((prev) => (prev >= 59 ? prev : prev + 1));
        setTimer(sessionTime < 59 ? sessionTime + 1 : sessionTime);
      }
    } else if (change === "down") {
      if (id === "break-decrement") {
        setBreakTime((prev) => (prev <= 1 ? prev : prev - 1));
      } else if (id === "session-decrement") {
        setSessionTime((prev) => (prev <= 1 ? prev : prev - 1));
        setTimer(sessionTime > 1 ? sessionTime - 1 : sessionTime);
      }
    }
  };

  const play = () => {};

  const stop = () => {};
  const reset = () => {
    setRunning(false);
    setBreakTime(5);
    setSessionTime(25);
    setTimer(25);
  };

  return (
    <div className="app">
      <h1 className="title">25 + 5 Clock</h1>
      <div id="timer-label">{onSession ? `"SESSION"` : `"BREAK"`}</div>
      <div id="time-left">{timeFormat(timer)}</div>
      <div className="control">
        <div id="start_stop">
          {running ? (
            <i className="fa-solid fa-stop" onClick={stop}></i>
          ) : (
            <i className="fa-solid fa-play" onClick={play}></i>
          )}
        </div>

        <i
          className="fa-solid fa-clock-rotate-left"
          id="reset"
          onClick={reset}
        ></i>
      </div>
      <div className="time-changer-container">
        <ChangeTimer
          label="Break Length"
          labelId="break-label"
          decrementId="break-decrement"
          incrementId="break-increment"
          lengthId="break-length"
          timeLength={breakTime}
          changeLength={changeLength}
        />
        <ChangeTimer
          label="Session Length"
          labelId="session-label"
          decrementId="session-decrement"
          incrementId="session-increment"
          lengthId="session-length"
          timeLength={sessionTime}
          changeLength={changeLength}
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
  changeLength,
}) {
  return (
    <div>
      <div id={labelId}>{label}</div>
      <div className="length-settings">
        <div
          className="up-down-btn"
          id={decrementId}
          onClick={() => changeLength("down", decrementId)}
        >
          <i className="fa-solid fa-caret-down"></i>
        </div>
        <div className="countdown-time" id={lengthId}>
          {timeLength}
        </div>
        <div
          className="up-down-btn"
          id={incrementId}
          onClick={() => changeLength("up", incrementId)}
        >
          <i className="fa-solid fa-caret-up"></i>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
