'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Loader from '@/components/Loader';

const LoaderContext = createContext({
  showLoader: () => {},
  hideLoader: () => {},
});

export function useLoader() {
  return useContext(LoaderContext);
}

export default function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);
  const startTimeRef = useRef(null);
  const MIN = 300;

  const showLoader = () => {
    clearTimeout(timeoutRef.current);
    startTimeRef.current = Date.now();
    setLoading(true);
  };

  const hideLoader = () => {
    const elapsed = Date.now() - startTimeRef.current;
    const remaining = Math.max(MIN - elapsed, 0);
    timeoutRef.current = setTimeout(() => {
      setLoading(false);
    }, remaining);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-white grid place-items-center">
          <Loader />
        </div>
      )}
      {children}
    </LoaderContext.Provider>
  );
}
