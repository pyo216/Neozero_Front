import React from 'react';
import { useNavigate } from 'react-router-dom'; // navigateを使うためにインポート
import '../login/login.css';
import pawloversImg from './pawlovers-side.jpg'; // ローカル画像を読み込み

const LoginPage = () => {
  const navigate = useNavigate(); // useNavigateフックを使ってページ遷移を設定

  const handleLogin = () => {
    // ログイン後の遷移
    navigate('/top'); // ここでトップページに移動
  };

  const handleRegister = () => {
    // 新規登録ページへの遷移
    navigate('/top'); // ここでトップページに移動（仮のページとしてトップに遷移）
  };
  return (
    <>
      <img
        src={pawloversImg} // インポートした画像を使用
        alt="pawlovers logo"
        id="pawlovers-img"
      />
      
      <form 
        className="login"
        onSubmit={handleLogin}
      >
        <p>&nbsp;</p>
        <label id="item" htmlFor="email">
          メールアドレス
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="メールアドレスを入力してください"
          required
        />
        
        <label id="item" htmlFor="password">
          パスワード
        </label>
        <input
          type="password"
          id="login"
          name="password"
          placeholder="パスワードを入力してください"
          required
        />

        <button type="submit">
          ログイン
        </button>
      </form>

      <form 
        className="login"
        onSubmit={handleRegister}
      >
        <p>・・・・・・・・初めての方はこちら・・・・・・・・・</p>
        <button type="submit">
          新規会員登録
        </button>
        <p>&nbsp;</p>
      </form>
    </>
  );
};

export default LoginPage;
  
