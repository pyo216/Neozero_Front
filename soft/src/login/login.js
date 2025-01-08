import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import pawloversImg from './pawlovers-side.jpg';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!email) {
      setErrorMessage('※メールアドレスを入力してください。');
      return;
    }
    if (!password) {
      setErrorMessage('※パスワードを入力してください。');
      return;
    }
    
    setErrorMessage('');
    navigate('/top');
  };

  const handleRegister = () => {
    navigate('/terms');
  };

  return (
    <div className={styles.body}>
      <img
        src={pawloversImg}
        alt="pawloversImg"
        className={styles.pawloversImg}
      />

      <form className={styles.login}>
        <div className={styles.formGroup}>
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="メールアドレスを入力してください"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワードを入力してください"
            required
          />
        </div>

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        <button
          type="button"
          onClick={handleLogin}
          className={styles.loginButton}
        >
          ログイン
        </button>

        <p className={styles.new}>・・・・・・・・・・・・初めての方はこちら・・・・・・・・・・・・</p>

        <button
          type="button"
          onClick={handleRegister}
          className={styles.registerButton}
        >
          新規会員登録
        </button>
      </form>
    </div>
  );
};

export default LoginPage;