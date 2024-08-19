import { useEffect, useState } from "react";

export default function useDebounce(cb, delay) {
    const [debounceValue, setDebounceValue] = useState(cb);
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebounceValue(cb);
      }, delay);
  
      return () => {
        clearTimeout(handler);
      };
    }, [cb, delay]);
    return debounceValue;
  }