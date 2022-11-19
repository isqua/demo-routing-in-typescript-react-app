import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes/router';

import styles from './App.module.css';

export function App(): React.ReactElement {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}
