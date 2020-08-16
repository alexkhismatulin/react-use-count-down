![react-countdown-hook](./assets/cover.png)
<p align="center">Dead simple yet powerful countdown hook for React. Powered by <code>requestAnimationFrame</code>.</p>
<p align="center">
    <a href="https://circleci.com/gh/alexkhismatulin/react-use-count-down">
        <img src="https://circleci.com/gh/alexkhismatulin/react-use-count-down.svg?style=svg" />
    </a>
    <a href="https://coveralls.io/github/alexkhismatulin/react-use-count-down?branch=master">
        <img src="https://coveralls.io/repos/github/alexkhismatulin/react-use-count-down/badge.svg?branch=master" />
    </a>
    <a href="https://www.npmjs.com/package/react-countdown-hook">
        <img src="https://img.shields.io/npm/v/react-countdown-hook.svg" />
    </a>
</p>

## Installation
Using npm:

```sh
$ npm install --save react-countdown-hook
```

Using yarn:

```sh
$ yarn add react-countdown-hook
```

## Quick Start
```javascript
import React from 'react';
import useCountDown from 'react-countdown-hook';

const initialTime = 60 * 1000; // initial time in milliseconds, defaults to 60000
const interval = 1000; // interval to change remaining time amount, defaults to 1000

const render = () => {
  const [timeLeft, { start, pause, resume, reset }] = useCountDown(initialTime, interval);
  
  // start the timer during the first render
  React.useEffect(() => {
    start();
  }, []);
  
  const restart = React.useCallback(() => {
    // you can start existing timer with an arbitrary value
    // if new value is not passed timer will start with initial value
    const newTime = 42 * 1000;
    start(newTime);
  }, []);
 
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

Note that this is a very basic usage. Check out more usage examples
[in playground](https://stackblitz.com/edit/react-use-count-down?file=index.js "react-countdown-hook on stackblitz")
or [in the demo project](./demo/index.js "react-countdown-hook demo project")

## Documentation
### [timeLeft, actions] = useCountDown(timeToCount, interval)

#### Parameters
Takes a default countdown time and interval time.
* `timeToCount` {`Number`} Time in milliseconds that countdown should start with. **Defaults to `60000`**
* `interval` {`Number`} Time in milliseconds representing the frequency that countdown should update with. **Defaults to `1000`**

#### Return value
Returns an array with remaining time and actions object.
* `timeLeft` {`Number`} Remaining countdown time in milliseconds
* `actions.start` {`Function`} Start or restart a countdown. Takes time in milliseconds to start with.
* `actions.reset` {`Function`} Resets a countdown to initial state
* `actions.pause` {`Function`} Pauses a countdown
* `actions.resume` {`Function`} Resumes a paused countdown

## Contributing
Feel free to submit any issues or pull requests.

## License
MIT
