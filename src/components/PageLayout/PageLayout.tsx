import React from 'react';
import { Outlet } from 'react-router-dom';

import { MainMenu } from '../MainMenu';
import { PageFooter } from '../PageFooter';

import styles from './PageLayout.module.css';

export function PageLayout(): React.ReactElement {
  return (
    <div className={styles.page}>
      <MainMenu />
      <main className={styles.content}>
        <Outlet />
      </main>
      <PageFooter />
    </div>
  );
}
