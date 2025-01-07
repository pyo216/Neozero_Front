import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './login.module.css'; // CSSモジュール
import pawloversImg from './pawlovers-side.jpg'; // PawLovers画像

const LoginPage = () => {
  const navigate = useNavigate(); // ページ遷移用

  const handleLogin = () => { // 「ログイン」ボタン押下
    navigate('/top'); // トップページに移動
  };

  const handleRegister = () => { //「新規会員登録」ボタン押下
    navigate('/terms'); // 新規会員登録ページに移動
  };

  return (
    <div className={styles.body}>
      <img
        src={pawloversImg} // PawLovers画像
        alt="pawloversImg" // 代替テキスト
        className={styles.pawloversImg}
      />

      <form className={styles.login}>

        <div className={styles.formGroup}>
          <label htmlFor="email">メールアドレス</label>
          <input // メールアドレス入力欄
            type="email"
            id="email"
            placeholder="メールアドレスを入力してください"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">パスワード</label>
          <input // パスワード入力欄
            type="password"
            id="password"
            placeholder="パスワードを入力してください"
            required
          />
        </div>

        <p className={styles.errorMessage}></p>  

        <button // 「ログイン」ボタン
          type="button"
          onClick={handleLogin}
          className={styles.loginButton}
        >
          ログイン
        </button>

        <p className={styles.new}>・・・・・・・・・・・・・・・・・初めての方はこちら・・・・・・・・・・・・・・・・・・</p>

        <button //「新規会員登録」ボタン
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