import React, { useState, useEffect } from 'react';


const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December 31, 2023";

  const getTime = () => {
    const currentTime = Date.now();
    const deadlineTime = Date.parse(deadline);


    if (currentTime > deadlineTime) {
      const expiredTime = currentTime - deadlineTime;

      setHours(Math.floor(expiredTime / (1000 * 60 * 60)) % 24);
      setMinutes(Math.floor(expiredTime / (1000 * 60)) % 60);
      setSeconds(Math.floor(expiredTime / 1000) % 60);
    } else {
      // Calculate time remaining until the deadline
      const timeRemaining = deadlineTime - currentTime;

      setHours(Math.floor(timeRemaining / (1000 * 60 * 60)) % 24);
      setMinutes(Math.floor(timeRemaining / (1000 * 60)) % 60);
      setSeconds(Math.floor(timeRemaining / 1000) % 60);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer-container">
      <div className="timer">
        <h2>Now Time</h2>
        <p> {hours} hours, {minutes} minutes, {seconds} seconds</p>
      </div>
    </div>
  );
};

export default Timer;