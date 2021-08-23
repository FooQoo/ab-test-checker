import type { NextPage } from 'next';
import { Description } from 'src/components/atoms/Description/Description';
import { SeparationBar } from 'src/components/atoms/SeparationBar/SeparationBar';
import { Option } from 'src/components/molecules/Option/Option';
import { ProbabilityValue } from 'src/components/molecules/ProbabilityValue/ProbabilityValue';
import { Result } from 'src/components/molecules/Result/Result';
import { Layout } from 'src/components/organisms/Layout/Layout';
import { Table } from 'src/components/organisms/Table/Table';
import styles from 'src/styles/index.module.scss';

import { useChiState } from '../re-ducks/chi/selectors';

const Top: NextPage = () => {
  const { chi } = useChiState();

  return (
    <Layout>
      <div className={styles.top}>
        <SeparationBar />
        <Description />
        <Option />
        <Table />
        <Result />
        <ProbabilityValue
          pValue={chi.pValue === null ? NaN : chi.pValue}
          level={chi.isFivePercent ? 0.05 : 0.01}
        />
      </div>
    </Layout>
  );
};

export default Top;
