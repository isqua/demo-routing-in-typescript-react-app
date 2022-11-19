import React from 'react';

import styles from './PageFooter.module.css';

export function PageFooter(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <p>
        This site is a demo of using
        {' '}
        <b>react-router</b>
        .
      </p>
      <hr />
      <p>
        Thanks to
        {' '}
        <a href="https://thispersondoesnotexist.com/">thispersondoesnotexist</a>
        {' '}
        project for generating users photos, and
        {' '}
        <a href="https://www.thisgraffitidoesnotexist.com">This Graffiti Does Not Exist</a>
        {' '}
        for generating events covers.
      </p>
      <hr />
      <p>
        {'© '}
        <a href="https://isqua.ru">isqua</a>
      </p>
    </footer>
  );
}
