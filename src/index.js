import React from 'react';

const useCountDown = (timeToCount = 60 * 1000, interval = 1000) => {
  const [timeLeft, setTimeLeft] = React.useState(0);
  const start = React.useCallback(
    (newTimeToCount) => setTimeLeft(newTimeToCount !== undefined ? newTimeToCount : timeToCount),
    [],
  );

  let timer = null;

  React.useEffect(
    () => {
      if (timeLeft === 0) {
        return;
      }

      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        const nextSecondsLeft = timeLeft - interval > 0 ? timeLeft - interval : 0;
        setTimeLeft(nextSecondsLeft);
      }, interval);

      return () => window.clearTimeout(timer);
    },
    [timeLeft, timer],
  );

  return [timeLeft, start];
}

export default useCountDown;
