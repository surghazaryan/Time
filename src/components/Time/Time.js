import React, { useEffect, useState } from "react";
import "./Time.scss";

const Time = () => {
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hours, setHours] = useState(new Date().getHours());

  let time;
  useEffect(() => {
    time = setInterval(() => {
      if (seconds === 59) {
        setSeconds(0);
        if (minutes === 59) {
          setMinutes(0);
          if (hours === 23) {
            setHours(0);
          } else {
            setHours(hours + 1);
          }
        } else {
          setMinutes(minutes + 1);
        }
      } else {
        setSeconds(seconds + 1);
      }
    }, 1000);
    return () => clearInterval(time);
  }, [seconds, minutes, hours]);
  return (
    <>
      <div className="container">
        <div className="container-banner">
        <div className="parent-time">
          <p>{hours < 10 ? "0" + hours : hours}:</p>
          <p>{minutes < 10 ? "0" + minutes : minutes}:</p>
          <p> {seconds < 10 ? "0" + seconds : seconds}</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Time;
