import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import fontstyles from '../font/font.module.css';
import pawloversImg from './pawlovers-side.jpg';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handlePopState = (event) => {
      // 戻る操作があった場合に / に遷移
      navigate('/');
    };
    // 初期状態でも履歴のpushStateを使って、ブラウザバック操作ができないように
    window.history.pushState(null, document.title, window.location.href);

    // popstateイベントリスナーを追加
    window.addEventListener('popstate', handlePopState);

    // クリーンアップ処理
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  const validatePassword = (password) => {
    const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;
    return passwordRegex.test(password);
  };

  const handleLogin = () => {
    if (!email) {
      setErrorMessage('※メールアドレスを入力してください。');
      return;
    }

    if (!password) {
      setErrorMessage('※パスワードを入力してください。');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage('※パスワードは半角英数字8～16文字で入力してください。');
      return;
    }

    setErrorMessage('');
    navigate('/top');
  };

  const handleRegister = () => {
    navigate('/terms');
  };

  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };

  return (
    <div className={fontstyles.fontFamily}>
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
              style={inputStyle}
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
            <p className={styles.passwordHint}>
              ※半角英数字8～16文字
            </p>
          </div>

          {errorMessage && (
            <p className={styles.errorMessage}>
              {errorMessage}
            </p>
          )}

          <button
            type="button"
            onClick={handleLogin}
            className={styles.loginButton}
            style={inputStyle}
          >
            ログイン
          </button>

          <p className={styles.new}>
            ・・・・・・・・・・・・初めての方はこちら・・・・・・・・・・・・
          </p>

          <button
            type="button"
            onClick={handleRegister}
            className={styles.registerButton}
            style={inputStyle}
          >
            新規会員登録
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;