import { Icon } from '@iconify/react';
import type { VFC } from 'react';
import { useChiState } from 'src/re-ducks/chi/selectors';
import type { Message } from 'src/re-ducks/chi/type';
import {
  DETERMINED,
  INVALID,
  LISTENING,
  UNDETERMINED,
} from 'src/re-ducks/chi/type';

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

export const Result: VFC = () => {
  const { chi } = useChiState();

  const isUndetermined = chi.message === UNDETERMINED;

  const isHigherA =
    chi.conversionRateForAPattern > chi.conversionRateForBPattern;

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
        {getMessage(chi.message, isHigherA)}
      </p>
    </div>
  );
};
