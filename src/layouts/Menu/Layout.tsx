import { FC } from 'react';
import styles from './Layout.module.css';
import { MenuIcon } from '../../svg/MenuIcon';
import { CartIcon } from '../../svg/CartIcon';
import { OnOffSvg } from '../../svg/OnOffSvg';
import { Outlet } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Profile } from './Profile';
import logo from '../../assets/Intersect.png';
import { LinkButton } from './LinkButton';

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Profile avatar={logo} email="alaricode@ya.ru" name="Дмитрий Березнёв" />

        <div className={styles.buttons}>
          <LinkButton href="/" text="Меню" icon={<MenuIcon />} />
          <LinkButton href="/cart" text="Корзина" icon={<CartIcon />} />
        </div>

        <Button className={styles.exitButton}>
          <OnOffSvg />
          Выйти
        </Button>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
