import React, { useEffect } from "react";
import { useScope } from "../Scope";

export default function StopGoButton() {
  const { time, stop } = useScope().get;
  const { setTime, setStop } = useScope().set;
  let interval;
  useEffect(() => {
    handleTimer();
    return () => {
      clearInterval(interval);
    };
  }, [stop]);

  const tick = () => {
    console.log("tick", time);
    if (time <= 0) {
      clearInterval(interval);
    } else {
      setTime((time) => time - 1);
    }
  };
  const handleTimer = () => {
    if (stop) {
      interval = setInterval(() => {
        tick();
      }, 1000);
    } else {
      clearInterval(interval);
      return;
    }
  };

  const start = () => {
    setStop(true);
    console.log("start", stop);
  };
  const pause = () => {
    setStop(false);
    console.log("pause", stop);

    clearInterval(interval);
  };
  return (
    <>
      {stop ? (
        <div onClick={pause}>Stop</div>
      ) : (
        <div onClick={start}>Start</div>
      )}
    </>
  );
}
