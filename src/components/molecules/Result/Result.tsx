import { Icon } from '@iconify/react';
import type { VFC } from 'react';
import type { ChiState, Message } from 'src/re-ducks/chi/type';
import {
  DETERMINED,
  INVALID,
  LISTENING,
  UNDETERMINED,
} from 'src/re-ducks/chi/type';
import { getPValue } from 'src/utils/chi';

import styles from './Result.module.scss';

const getMessage = (message: Message, isHigherA: boolean) => {
  switch (message) {
    case LISTENING:
      return 'A/Bテストの結果を入力してください。';
    case UNDETERMINED:
      return 'どちらが有効かわかりません。';
    case DETERMINED:
      return isHigherA ? 'Aパターンが有効です' : 'Bパターンが有効です';
    case INVALID:
      return '入力された値は不正です。';
    default:
      return '';
  }
};

export const Result: VFC<ChiState> = (chi) => {
  // P値
  const pValue = getPValue(chi.buckets);

  const isUndetermined =
    chi.buckets[0].conversionRate === chi.buckets[1].conversionRate ||
    pValue >= (chi.isFivePercent ? 0.05 : 0.01);

  const message =
    chi.buckets[0].conversionRate === chi.buckets[1].conversionRate ||
    pValue >= (chi.isFivePercent ? 0.05 : 0.01)
      ? UNDETERMINED
      : DETERMINED;

  const isHigherA =
    (chi.buckets[0].conversionRate || 0) > (chi.buckets[1].conversionRate || 0);

  return (
    <div className={styles['result']}>
      {isUndetermined ? (
        <Icon icon="mdi:robot-dead-outline" className={styles['result-icon']} />
      ) : (
        <Icon
          icon="mdi:robot-excited-outline"
          className={styles['result-icon']}
        />
      )}
      <p className={styles['result-message']}>
        {getMessage(message, isHigherA)}
      </p>
    </div>
  );
};
