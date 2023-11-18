import { FC } from 'react';
import styles from './Layout.module.css';

interface ProfileProps {
  avatar: string;
  name: string;
  email: string;
}

export const Profile: FC<ProfileProps> = ({ avatar, email, name }) => {
  return (
    <div className={styles.profile}>
      <img src={avatar} alt="Аватар" />
      <div className={styles.name}>{name}</div>
      <div className={styles.email}>{email}</div>
    </div>
  );
};
