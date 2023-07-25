import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div>
      <h1 className={styles.root}>
        <span>😕</span>
        <br />
        Nada encontrado
      </h1>
      <p className={styles.description}>Desafortunadamente, esta página web no está disponible</p>
    </div>
  );
};
