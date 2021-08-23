import type { VFC } from 'react';

import styles from './SeparationBar.module.scss';

export const SeparationBar: VFC = () => {
  return <div className={styles['separation-bar']} />;
};
