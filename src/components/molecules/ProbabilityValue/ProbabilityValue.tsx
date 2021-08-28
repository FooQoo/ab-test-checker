import type { VFC } from 'react';

import { useChiState } from '../../../re-ducks/chi/selectors';
import { getPValue } from '../../../utils/chi';
import styles from './ProbabilityValue.module.scss';

export const ProbabilityValue: VFC = () => {
  const { chi } = useChiState();

  // P値
  const pValue = getPValue(
    chi.buckets[0].numOfTestUser || 1,
    chi.buckets[1].numOfTestUser || 1,
    chi.buckets[0].numOfConversionUser || 0,
    chi.buckets[1].numOfConversionUser || 0
  );

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
