import type { VFC } from 'react';
import { useDispatch } from 'react-redux';
import { useChiState } from 'src/re-ducks/chi/selectors';
import { chiSlice } from 'src/re-ducks/chi/slice';

import styles from './Option.module.scss';

export const Option: VFC = () => {
  const dispatch = useDispatch();
  const { chi } = useChiState();

  const handleFivePercent = () => {
    return dispatch(chiSlice.actions.setIsFivePercent(true));
  };

  const handleOnePercent = () => {
    return dispatch(chiSlice.actions.setIsFivePercent(false));
  };

  return (
    <>
      <div className={styles['option']}>
        <div className={styles['option-title']}>有意水準</div>
        <div className={styles['option-item']}>
          <label className={styles['option-label']}>
            <input
              type="radio"
              name="1%"
              value={1}
              checked={!chi.isFivePercent}
              onChange={handleOnePercent}
              className={styles['option-radio']}
            />
            1%
          </label>
          <label className={styles['option-label']}>
            <input
              type="radio"
              name="1%"
              value={5}
              checked={chi.isFivePercent}
              onChange={handleFivePercent}
              className={styles['option-radio']}
            />
            5%
          </label>
        </div>
      </div>
      <p className="text-right">
        ※有意水準はABテストの結果で有意差がない可能性のある確率です。
      </p>
    </>
  );
};
