# react-countdown-hook
[![CircleCI](https://circleci.com/gh/alexkhismatulin/react-use-count-down.svg?style=svg)](https://circleci.com/gh/alexkhismatulin/react-use-count-down)
[![Coverage Status](https://coveralls.io/repos/github/alexkhismatulin/react-use-count-down/badge.svg?branch=master)](https://coveralls.io/github/alexkhismatulin/react-use-count-down?branch=master)
[![npm](https://img.shields.io/npm/v/react-countdown-hook.svg)](https://www.npmjs.com/package/react-countdown-hook "react-countdown-hook on npm")

React countdown hook.

## Installation

Using npm:

```sh
$ npm install --save react-countdown-hook
```

Using yarn:

```sh
$ yarn add react-countdown-hook
```

## Usage
```javascript
import React from 'react';
import useCountDown from 'react-countdown-hook';

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

[Check out more usage examples in playground.](https://stackblitz.com/edit/react-use-count-down?file=index.js "react-countdown-hook on stackblitz")

## API
```javascript
useCountDown(timeToCount?: number, interval?: number): [number, (timeToCount?: number) => void]
```

## Contributing

Feel free to submit any issues or pull requests.

## License

MIT
