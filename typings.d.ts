declare module "react-countdown-hook" {
  interface Actions {
    start(ttc?: number): void;
    pause(): void;
    resume(): void;
    reset(): void;
  }

  interface Options {
    interval?: number;
    onFinish?: () => void;
    onStart?: () => void;
  }

  interface UseCountDown {
    (timeToCount: number, options?: Options): [number, Actions];
  }

  const useCountDown: UseCountDown;

  export default useCountDown;
}
