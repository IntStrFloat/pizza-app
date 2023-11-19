import { FC } from 'react';
import styles from './AuthLoyuot.module.css';
import { Outlet } from 'react-router-dom';

export const AuthLoyuot: FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <img src="/AuthLogo.svg" alt="Логотип компании" />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
