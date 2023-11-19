import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Layout.module.css';
import { FC } from 'react';

interface LinkButtonProps {
  icon: JSX.Element;
  text: string;
  href: string;
}

export const LinkButton: FC<LinkButtonProps> = ({ icon, text, href }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        classNames(styles.button, {
          [styles.active]: isActive,
        })
      }
    >
      {icon}
      {text}
    </NavLink>
  );
};
