import type { VFC } from 'react';

import styles from './ProbabilityValue.module.scss';

export const ProbabilityValue: VFC<{
  pValue: number;
  level: number;
}> = ({ pValue, level }) => {
  return (
    <>
      <div className={styles['p-value']}>
        <div className={styles['p-value-title']}>P値</div>
        <div className={styles['p-value-item']}>
          <p>
            {pValue.toFixed(3)}{' '}
            {level === pValue ? '=' : level > pValue ? '<' : '>'} {level}
          </p>
        </div>
      </div>
    </>
  );
};
