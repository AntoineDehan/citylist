import { useState, useEffect } from "react";

export const useDebounce = <T>(value: T, timer: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const time = setTimeout(() => {
      setDebouncedValue(value);
    }, timer);
    return () => {
      clearTimeout(time);
    };
  }, [value, timer]);

  return debouncedValue;
};
