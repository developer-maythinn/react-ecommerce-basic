'use client';

import store from '@/redux/store';
import { Provider } from 'react-redux';

export default function AppProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
