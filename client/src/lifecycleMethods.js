import { useEffect } from "react";

export const useComponentDidMount = (handler) => {
  return useEffect(() => {
    return handler();
  }, []);
};
