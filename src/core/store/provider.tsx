'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '@/core/store/store';

const store = setupStore();

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
