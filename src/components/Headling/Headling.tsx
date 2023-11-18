import { FC } from 'react';
import { HeadlingProps } from './Headling.props';
import styles from './Headling.module.css';

export const Headling: FC<HeadlingProps> = ({ children }) => {
  return <h1 className={styles.h1}>{children}</h1>;
};
