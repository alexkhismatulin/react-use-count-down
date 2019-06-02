# react-use-count-down

React countdown hook.

## Installation

Using npm:

```sh
$ npm install --save react-use-count-down
```

Using yarn:

```sh
$ yarn add react-use-count-down
```

## Usage
```javascript
import React from 'react';
import useCountDown from 'react-use-count-down';

const initialTime = 60 * 1000; // initial time in milliseconds, defaults to 60000
const interval = 1000; // interval to change remaining time amount, defaults to 1000

const render = () => {
  const [timeLeft, start] = useCountDown(initialTime, interval);
  
  // start the timer during the first render
  React.useEffect(() => {
    start();
  }, []);
  
  const restart = React.useCallback(() => {
    // you can start existing timer with an arbitrary value
    // if new value is not passed timer will start with initial value
    const newTime = 42 * 1000;
    start(newTime);
  }, [start]);
 
  return (
    <>
      <p>Time left: {timeLeft}</p>
 
      <button onClick={restart}>
        Restart counter with 42 seconds
      </button>
    </>
  );
}
```

[Check out more usage examples in playground.](https://stackblitz.com/edit/react-use-count-down?file=index.js "react-use-count-down on stackblitz")

## API
```javascript
useCountDown(timeToCount?: number, interval?: number): [number, (timeToCount?: number) => void]
```

## Contributing

Feel free to submit any issues or pull requests.

## License

MIT
