'use client';

import { useEffect } from 'react';
import { captureTrafficSource } from '@/lib/analytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    captureTrafficSource();
  }, []);

  return <>{children}</>;
}
