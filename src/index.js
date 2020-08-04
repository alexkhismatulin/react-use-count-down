import React from 'react';

const useCountDown = (timeToCount = 60 * 1000, interval = 1000) => {
  const [timeLeft, setTimeLeft] = React.useState(0);
  const timer = React.useRef({});

  const run = (ts) => {
    if (!timer.current.started) {
      timer.current.started = ts;
      timer.current.lastInterval = ts;
    }

    if ((ts - timer.current.lastInterval) >= interval) {
      timer.current.lastInterval += interval;
      setTimeLeft((timeLeft) => {
        timer.current.timeLeft = timeLeft - interval;
        return timer.current.timeLeft;
      });
    }

    if (ts - timer.current.started < timer.current.timeToCount) {
      timer.current.requestId = window.requestAnimationFrame(run);
    }
  }

  const start = React.useCallback(
    (ttc) => {
      window.cancelAnimationFrame(timer.current.requestId);

      const newTimeToCount = ttc !== undefined ? ttc : timeToCount
      timer.current.started = null;
      timer.current.lastInterval = null;
      timer.current.timeToCount = newTimeToCount;
      timer.current.requestId = window.requestAnimationFrame(run);

      setTimeLeft(newTimeToCount);
    },
    [],
  );

  const pause = React.useCallback(
    () => {
      window.cancelAnimationFrame(timer.current.requestId);
      timer.current.started = null;
      timer.current.lastInterval = null;
      timer.current.timeToCount = timer.current.timeLeft;
    },
    [],
  );

  const resume = React.useCallback(
    () => {
      if (!timer.current.started && timer.current.timeLeft > 0) {
        window.cancelAnimationFrame(timer.current.requestId);
        timer.current.requestId = window.requestAnimationFrame(run);
      }
    },
    [],
  );

  const reset = React.useCallback(
    () => {
      if (timer.current.timeLeft) {
        window.cancelAnimationFrame(timer.current.requestId);
        timer.current = {};
        setTimeLeft(0);
      }
    },
    [],
  );

  const actions = React.useMemo(
    () => ({ start, pause, resume, reset }),
    [],
  );

  return [timeLeft, actions];
}

export default useCountDown;
