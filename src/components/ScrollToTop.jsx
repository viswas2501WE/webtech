'use client';                          // this file runs only in the browser

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function ScrollToTop() {
  const pathname      = usePathname();
  const searchParams  = useSearchParams();   // returns a ReadonlyURLSearchParams

  useEffect(() => {
    // Run on mount & every time deps change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, searchParams?.toString()]);

  return null; // renders nothing
}
