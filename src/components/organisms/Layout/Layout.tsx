import type { ReactNode, VFC } from 'react';
import { Header } from 'src/components/organisms/Header/Header';

import styles from './Layout.module.scss';

export const Layout: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles['layout']}>{children}</main>
    </>
  );
};
