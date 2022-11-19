import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LinksList.module.css';

interface ListItem {
    id: string;
    href: string;
    text: string;
}

interface ILinksListProps {
    title: string;
    items: ListItem[];
}

export function LinksList(props: ILinksListProps): React.ReactElement {
  const { title, items } = props;

  return (
    <nav className={styles.linkslist}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <ul className={styles.list}>
        {items.map((item) => (
          <li className={styles.item} key={item.id}>
            <Link className={styles.link} to={item.href}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
