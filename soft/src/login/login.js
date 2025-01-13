//ログインページ
import React, { useState } from 'react'; //React,エラーメッセージ用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './login.module.css'; // CSSモジュール
import pawloversImg from './pawlovers-side.jpg'; // PawLovers画像

const Login = () => {
  const navigate = useNavigate(); // ページ遷移用

  const [email, setEmail] = useState(''); // メールアドレスの状態
  const [password, setPassword] = useState(''); // パスワードの状態
  const [errorMessage, setErrorMessage] = useState(''); // エラーメッセージの状態

  const handleLogin = () => { //「ログイン」ボタン押下
    if (!email) { // メールアドレスが未入力のとき
      setErrorMessage('※メールアドレスを入力してください。');
      return;
    }else if (!password) { // パスワードが未入力のとき
      setErrorMessage('※パスワードを入力してください。');
      return;
    }else{ // 成功時 
    setErrorMessage('');
    navigate('/top'); // トップページに移動
    }
  };

  const handleRegister = () => { //「新規会員登録」ボタン押下 
    navigate('/terms'); // 新規会員登録画面に移動
  };

  return (
    <div className={styles.body}>
      <img
        src={pawloversImg} // PawLovers画像
        alt="pawloversImg" // 代替テキスト
        className={styles.pawloversImg}
      />


      <form className={styles.login}>  {/* ログインフォーム */}
        <div className={styles.formGroup}> {/* メールアドレス入力 */}
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

        <div className={styles.formGroup}> {/* パスワード入力 */}
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

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>} {/* エラーメッセージを表示 */}

        <button
          type="button" //「ログイン」ボタン
          onClick={handleLogin}
          className={styles.loginButton}
        >
          ログイン
        </button>

        <p className={styles.new}>・・・・・・・・・・・・初めての方はこちら・・・・・・・・・・・・</p>

        <button
          type="button" //「新規会員登録」ボタン
          onClick={handleRegister}
          className={styles.registerButton}
        >
          新規会員登録
        </button>
      </form>
    </div>
  );
};

export default Login;