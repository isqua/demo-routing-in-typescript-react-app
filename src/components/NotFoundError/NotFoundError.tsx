import React from 'react';

import styles from './NotFoundError.module.css';

interface INotFoundErrorProps {
  text: string;
}

export function NotFoundError({ text }: INotFoundErrorProps): React.ReactElement {
  return (
    <div className={styles.block}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>{text}</p>
    </div>
  );
}
