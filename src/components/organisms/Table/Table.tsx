import type { ChangeEvent, KeyboardEvent, VFC } from 'react';
import { useDispatch } from 'react-redux';
import { useChiState } from 'src/re-ducks/chi/selectors';
import { chiSlice } from 'src/re-ducks/chi/slice';

import { round } from '../../../utils/round';
import styles from './Table.module.scss';

const handleValidateTable = function (event: KeyboardEvent<HTMLInputElement>) {
  if (!'0123456789'.includes(event.key)) {
    event.preventDefault();
  }
};

const DIGIT = 3;

export const Table: VFC = () => {
  const dispatch = useDispatch();
  const { chi } = useChiState();

  const handleNumOfTestUserForAPattern = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      chiSlice.actions.setNumOfTestUserForAPattern(Number(event.target.value))
    );
  };

  const handleNumOfTestUserForBPattern = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      chiSlice.actions.setNumOfTestUserForBPattern(Number(event.target.value))
    );
  };

  const handleNumOfConversionUserForAPattern = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      chiSlice.actions.setNumOfConversionUserForAPattern(
        Number(event.target.value)
      )
    );
  };

  const handleNumOfConversionUserForBPattern = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(
      chiSlice.actions.setNumOfConversionUserForBPattern(
        Number(event.target.value)
      )
    );
  };

  return (
    <div className={styles['wrapper']}>
      <div className={`col-start-2 ${styles['table-header']}`}>
        テストユーザ数
      </div>
      <div className={styles['table-header']}>コンバージョン数</div>
      <div className={styles['table-header']}>コンバージョン確率</div>
      <div className={styles['table-title']}>Aパターン</div>
      <input
        className={styles['table-input']}
        type="number"
        name="num-of-test-user-for-a-pattern"
        onChange={handleNumOfTestUserForAPattern}
        onKeyPress={handleValidateTable}
      />
      <input
        className={styles['table-input']}
        type="number"
        name="num-of-conversion-user-for-a-pattern"
        onChange={handleNumOfConversionUserForAPattern}
        onKeyPress={handleValidateTable}
      />
      <div className={styles['table-conversion-rate']}>
        {round(chi.conversionRateForAPattern, DIGIT).toFixed(3)}
      </div>
      <div className={styles['table-title']}>Bパターン</div>
      <input
        className={styles['table-input']}
        type="number"
        name="num-of-test-user-for-b-pattern"
        onChange={handleNumOfTestUserForBPattern}
        onKeyPress={handleValidateTable}
      />
      <input
        className={styles['table-input']}
        type="number"
        name="num-of-conversion-user-for-b-pattern"
        onChange={handleNumOfConversionUserForBPattern}
        onKeyPress={handleValidateTable}
      />
      <div className={styles['table-conversion-rate']}>
        {round(chi.conversionRateForBPattern, DIGIT).toFixed(3)}
      </div>
    </div>
  );
};
