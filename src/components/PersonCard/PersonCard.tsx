import React from 'react';
import type { PersonToDisplay } from '../../store/types';

import styles from './PersonCard.module.css';

interface IPersonCardProps {
  person: PersonToDisplay;
}

export function PersonCard({ person }: IPersonCardProps): React.ReactElement {
  const fullName = `${person.name} ${person.surname}`;

  return (
    <article className={styles.person}>
      <img
        className={styles.avatar}
        width={64}
        alt={fullName}
        src={person.avatar}
      />
      <div className={styles.descrption}>
        <p className={styles.name}>{fullName}</p>
        <p className={styles.job}>{person.job}</p>
      </div>
    </article>
  );
}
