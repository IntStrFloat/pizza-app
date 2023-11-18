import { forwardRef } from 'react';
import { SearchProps } from './Search.props';
import classNames from 'classnames';
import styles from './Search.module.css';
import { SearchSvg } from '../../svg/SearchSvg';

export const Search = forwardRef<HTMLInputElement, SearchProps>(({ className, ...props }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor="searchInput">
        <SearchSvg />
      </label>
      <input id="searchInput" className={classNames(className, styles.search)} {...props} />
    </div>
  );
});
