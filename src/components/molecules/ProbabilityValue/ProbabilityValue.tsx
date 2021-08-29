import type { VFC } from 'react';
import type { ChiState } from 'src/re-ducks/chi/type';
import { getPValue } from 'src/utils/chi';

import styles from './ProbabilityValue.module.scss';

export const ProbabilityValue: VFC<ChiState> = (chi) => {
  // P値
  const pValue = getPValue(chi.buckets);

  const level = chi.isFivePercent ? 0.05 : 0.01;

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
