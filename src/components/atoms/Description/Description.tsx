import type { VFC } from 'react';

import styles from './Description.module.scss';

export const Description: VFC = () => {
  return (
    <h2 className={styles.description}>
      <p>ABテストの結果の妥当性を統計的に評価するツールです。</p>
      <p>有意水準を選択して、ABテストの結果を表に入力すると、</p>
      <p>コンバージョン確率と検証結果が表示されます。</p>
    </h2>
  );
};
