import { forwardRef } from 'react';
import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(className, styles.input)}
        placeholder={placeholder}
        {...props}
      />
    );
  },
);
