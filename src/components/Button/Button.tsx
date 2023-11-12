import { FC } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button: FC<ButtonProps> = ({ appearance = 'big', className, children, ...props }) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles['big']]: appearance == 'big',
        [styles['small']]: appearance == 'small',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
