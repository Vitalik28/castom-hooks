import React, { useCallback, useRef } from 'react';

export default function useDebounce(
  callback: (value: any) => void,
  delay = 300
) {
  const timer = useRef<any>();

  const debounceCallback = useCallback(
    (...args: any) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(args);
      }, delay);
    },
    [callback, delay]
  );
  return debounceCallback;
}
