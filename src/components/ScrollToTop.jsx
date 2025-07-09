'use client';                          // this file runs only in the browser

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Scrolls the window to the top whenever:
 *  • the pathname changes (new route)
 *  • or the query string changes (same page, different ?search=value)
 */
export default function ScrollToTop() {
  const pathname      = usePathname();
  const searchParams  = useSearchParams();   // returns a ReadonlyURLSearchParams

  useEffect(() => {
    // Run on mount & every time deps change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, searchParams?.toString()]);

  return null; // renders nothing
}
