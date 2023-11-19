import { FC } from 'react';
import { HeadlingProps } from './Headling.props';
import styles from './Headling.module.css';
import classNames from 'classnames';

export const Headling: FC<HeadlingProps> = ({ children, className, ...props }) => {
  return (
    <h1 className={classNames(className, styles.h1)} {...props}>
      {children}
    </h1>
  );
};
