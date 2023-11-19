import { AuthForm } from '../../components/AuthForm/AuthForm';
import styles from './Register.module.css';
export function Register() {
  return (
    <div className={styles.register}>
      <AuthForm buttonText="Регистрация" href="/auth/login" hrefText="Войти" text="Есть аккаунт?" />
    </div>
  );
}
