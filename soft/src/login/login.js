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

  const handleLogin = async () => {
    if (!email) { // メールアドレスが未入力のとき
      setErrorMessage('※メールアドレスを入力してほしいニャン。');
      return;
    } else if (!password) { // パスワードが未入力のとき
      setErrorMessage('※パスワードを入力してほしいワン。');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage('※パスワードは半角英数字8～16文字で入力してほしいニャン。');
      return;
    }
    //処理とおさない用
    navigate('/top');
    

    // バックエンドへデータを送信
    try {
      const response = await fetch('http://localhost:8000/login/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.result === 0) {  // 認証成功
          setErrorMessage('');
          navigate('/top');
        } else {  // 認証失敗
          setErrorMessage('※入力情報が間違っているワン。');
        }
      } else {
        setErrorMessage(data.error || '※ログインに失敗したニャン。');
      }
    } catch (error) {
      setErrorMessage('※サーバーとの通信に失敗したワン。');
    }
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
            ・・・・・・・・・・・・初めての方はこっちワン・・・・・・・・・・・・
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