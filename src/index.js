import React from 'react'

const useCountDown = (timeToCount = 60 * 1000, interval = 1000) => {
  const [secondsLeft, setSecondsLeft] = React.useState(0);
  const start = React.useCallback(
    (newTimeToCount) => setSecondsLeft(newTimeToCount !== undefined ? newTimeToCount : timeToCount),
    [],
  );

  React.useEffect(
    () => {
      if (secondsLeft === 0) {
        return;
      }

      window.setTimeout(() => {
        const nextSecondsLeft = secondsLeft - interval > 0 ? secondsLeft - interval : 0;
        setSecondsLeft(nextSecondsLeft);
      }, interval);
    },
    [secondsLeft],
  );

  return [secondsLeft, start];
}

export default useCountDown;
