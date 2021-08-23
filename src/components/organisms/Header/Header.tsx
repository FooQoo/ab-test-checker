import { Icon } from '@iconify/react';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import type { VFC } from 'react';

import styles from './Header.module.scss';

export const Header: VFC = () => {
  return (
    <header className={styles['header']}>
      <div className="mx-10 text-black">
        <Hamburger />
      </div>
      <Icon icon="fontisto:test-tube" />
      <Link href="/" passHref>
        <a>
          <h1>A/B Checker</h1>
        </a>
      </Link>
    </header>
  );
};
