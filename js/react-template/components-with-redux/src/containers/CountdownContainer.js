import React, { useState, useEffect } from "react";
import CountDown from "../components/CountDown";

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function CountDownContainer() {
  const startedAt = new Date("2020-09-17 00:00");
  const [time, setTime] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = (now - startedAt) / 1000;
      setTime({
        day: formatTime(Math.floor(diff / 60 / 60 / 24)),
        hour: formatTime(Math.floor((diff / 60 / 60) % 24)),
        minute: formatTime(Math.floor((diff / 60) % 60)),
        second: formatTime(Math.floor(diff % 60)),
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [startedAt]);

  return (
    <CountDown
      startedAt={startedAt}
      day={time.day}
      hour={time.hour}
      minute={time.minute}
      second={time.second}
    />
  );
}

export default CountDownContainer;
