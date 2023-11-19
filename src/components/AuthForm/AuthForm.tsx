import { Link } from 'react-router-dom';
import { FC, FormHTMLAttributes } from 'react';
import { Input } from '../Input/Input';
import styles from './AuthForm.module.css';
import { Button } from '../Button/Button';
import { Headling } from '../Headling/Headling';

export interface AuthFormProps extends FormHTMLAttributes<HTMLFormElement> {
  href: string;
  buttonText: 'Вход' | 'Регистрация';
  hrefText: 'Войти' | 'Зарегестрироваться';
  text: string;
  error?: string | null;
}

export const AuthForm: FC<AuthFormProps> = ({
  href,
  buttonText,
  hrefText,
  text,
  error,

  ...props
}) => {
  return (
    <div>
      <Headling className={styles.headling}>{buttonText}</Headling>
      {error && <div className={styles.error}>{error}</div>}
      <form className={styles.form} action="" {...props}>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor="Email">
            Ваш email
          </label>
          <Input name="email" className={styles.input} id="Email" placeholder="Email" />
        </div>
        <div className={styles.wrapper}>
          <label className={styles.label} htmlFor="Password">
            Ваш пароль
          </label>
          <Input name="password" className={styles.input} id="Password" placeholder="Пароль" />
        </div>
        <div className={styles.buttonBlock}>
          <Button appearance="big">{buttonText}</Button>
          <div className={styles.text}>{text}</div>
          <Link className={styles.link} to={href}>
            {hrefText}
          </Link>
        </div>
      </form>
    </div>
  );
};
