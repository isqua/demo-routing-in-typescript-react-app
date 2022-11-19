import React from 'react';
import type { EventToDisplay } from '../../store/types';

import styles from './EventCard.module.css';

interface IEventCardProps {
  event: EventToDisplay;
}

export function EventCard({ event }: IEventCardProps): React.ReactElement {
  return (
    <article className={styles.event}>
      <img
        className={styles.cover}
        width={352}
        alt={event.title}
        src={event.cover}
      />
      <p className={styles.title}>{event.title}</p>
    </article>
  );
}
