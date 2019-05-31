import React from 'react';
import { render, wait, fireEvent } from 'react-testing-library';

import useCountdown from './index';

const Test = ({ timeToCount, interval }) => {
  const [timeLeft, start] = useCountdown(timeToCount, interval);

  const onClick = React.useCallback(() => {
    start()
  }, [start])

  return (
    <>
      <p>{timeLeft}</p>
      <button onClick={onClick}>Click</button>
    </>
  );
};

const RestartTest = ({ timeToCount, interval, restartWith }) => {
  const [timeLeft, start] = useCountdown(timeToCount, interval);

  React.useEffect(
    () => start(),
    [],
  );

  const onClick = React.useCallback(
    () => start(restartWith),
    [start],
  );

  return (
    <>
      <p>{timeLeft}</p>
      <button onClick={onClick}>Click</button>
    </>
  );
};

describe('useCountDown', () => {
  it('should render 0 in case timer hasn\'t been started', () => {
    const interval = 1000;
    const timeToCount = 60 * 1000;
    const { container } = render(<Test timeToCount={timeToCount} interval={interval}/>);

    expect(container.firstChild.textContent).toBe('0');
  });

  it('should render initial amount of time in case timer has been started', () => {
    const interval = 1000;
    const timeToCount = 60 * 1000;
    const { container } = render(<Test timeToCount={timeToCount} interval={interval}/>);

    const button = container.querySelector('button');
    fireEvent.click(button);

    expect(container.firstChild.textContent).toBe(String(timeToCount));
  });

  it('should reset to initial time in case start is called', async () => {
    const interval = 1000;
    const timeToCount = 60 * 1000;
    const { container } = render(<Test timeToCount={timeToCount} interval={interval}/>);

    const button = container.querySelector('button');
    fireEvent.click(button);

    expect(container.firstChild.textContent).toBe(String(timeToCount));

    await wait(
      () => {
        expect(container.firstChild.textContent).not.toBe(String(timeToCount));
        expect(container.firstChild.textContent).not.toBe('0');

        fireEvent.click(button);

        expect(container.firstChild.textContent).toBe(String(timeToCount));
      },
      { timeout: 2000 }
    );
  });

  it('should restart with a given value', async () => {
    const interval = 1000;
    const timeToCount = 60 * 1000;
    const restartTimeToCount = 60 * 1000;
    const { container } = render(<RestartTest timeToCount={timeToCount} interval={interval} restartWith={restartTimeToCount}/>);

    const button = container.querySelector('button');
    fireEvent.click(button);

    expect(container.firstChild.textContent).toBe(String(timeToCount));

    await wait(
      () => {
        expect(container.firstChild.textContent).not.toBe(String(timeToCount));
        expect(container.firstChild.textContent).not.toBe('0');

        fireEvent.click(button);

        expect(container.firstChild.textContent).toBe(String(restartTimeToCount));
      },
      { timeout: 2000 }
    );
  });

  it('should eventually render 0', async () => {
    const interval = 1000;
    const timeToCount = 2000;
    const { container } = render(<Test timeToCount={timeToCount} interval={interval}/>);

    const button = container.querySelector('button');
    fireEvent.click(button);

    expect(container.firstChild.textContent).toBe(String(timeToCount));

    await wait(
      () => {
        expect(container.firstChild.textContent).toBe('0');
      },
      { timeout: 2500 }
    );
  });
});
