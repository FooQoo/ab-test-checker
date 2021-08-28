/* eslint-disable react/jsx-handler-names */
import type { KeyboardEvent, VFC } from 'react';
import { useDispatch } from 'react-redux';
import { useChiState } from 'src/re-ducks/chi/selectors';
import { chiSlice } from 'src/re-ducks/chi/slice';
import { round } from 'src/utils/round';

import styles from './Table.module.scss';

const DIGIT = 3;

export const Table: VFC = () => {
  const dispatch = useDispatch();
  const { chi } = useChiState();

  const handleValidateTable = function (
    event: KeyboardEvent<HTMLInputElement>
  ) {
    if (!'0123456789'.includes(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <div className={styles['wrapper']}>
      <div className={styles['column']}>
        <div className={`col-start-2 ${styles['table-header']}`}>
          テストユーザ数
        </div>
        <div className={styles['table-header']}>コンバージョン数</div>
        <div className={styles['table-header']}>コンバージョン確率</div>
      </div>
      {chi.buckets.map((bucket, index) => {
        return (
          <div key={index} className={styles['column']}>
            <div className={styles['table-title']}>{index + 1}パターン</div>
            <input
              className={styles['table-input']}
              type="text"
              name={`num-of-test-user-${index}`}
              onChange={(event) => {
                dispatch(
                  chiSlice.actions.setNumOfTestUser({
                    index,
                    numOfTestUser: Number(event.target.value),
                  })
                );
              }}
              onKeyPress={handleValidateTable}
            />
            <input
              className={styles['table-input']}
              type="text"
              name={`num-of-conversion-user-${index}`}
              onChange={(event) => {
                dispatch(
                  chiSlice.actions.setNumOfConversionUser({
                    index,
                    numOfConversionUser: Number(event.target.value),
                  })
                );
              }}
              onKeyPress={handleValidateTable}
            />
            <div className={styles['table-conversion-rate']}>
              {round(bucket.conversionRate || 0, DIGIT).toFixed(DIGIT)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
