import { Suspense } from 'react';
import NotFoundClient from "./NotFoundClient"

export default function NotFound() {
  return (
    <Suspense>
        <NotFoundClient/>
    </Suspense>
  );
}