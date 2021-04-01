declare module "react-countdown-hook" {
  interface Actions {
    start(ttc?: number): void;
    pause(): void;
    resume(): void;
    reset(): void;
  }

  interface UseCountDown {
    (timeToCount: number, interval?: number): [number, Actions];
  }

  const useCountDown: UseCountDown;

  export default useCountDown;
}
