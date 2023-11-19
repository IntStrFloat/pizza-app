import { FormEvent, useState } from 'react';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import styles from './Login.module.css';
import axios, { AxiosError } from 'axios';
import { DOMEN } from '../../helpers/API';

interface FormField {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

export function Login() {
  const [error, setError] = useState<string | null>(null);
  const onSubmit = async (event: FormEvent<HTMLFormElement | FormField>) => {
    event.preventDefault();
    setError(null);
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    await sendLogin(email, password);
  };
  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(`${DOMEN}/auth/login`, { email, password });
      console.log(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  };
  return (
    <div className={styles.login}>
      <AuthForm
        error={error}
        buttonText="Вход"
        href="/auth/register"
        hrefText="Зарегестрироваться"
        text="Нет аккаунта?"
        onSubmit={onSubmit}
      />
    </div>
  );
}
