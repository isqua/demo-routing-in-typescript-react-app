import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MainMenu.module.css';

export function MainMenu(): React.ReactElement {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/persons">People</Link>
      <Link className={styles.link} to="/events">Events</Link>
    </header>
  );
}
