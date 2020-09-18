import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CountDown from "../components/CountDowns/CountDown";
import CountDownCard from "../components/CountDowns/CountDownCard";

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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CountDown
          startedAt={startedAt}
          day={time.day}
          hour={time.hour}
          minute={time.minute}
          second={time.second}
        />
      </Grid>
      <Grid item xs={3}>
        <CountDownCard
          startedAt={startedAt}
          day={time.day}
          hour={time.hour}
          minute={time.minute}
          second={time.second}
        />
      </Grid>
    </Grid>
  );
}

export default CountDownContainer;
