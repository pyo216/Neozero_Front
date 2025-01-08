import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './member.module.css'; // CSSモジュール

const MemberPage = () => {
  const navigate = useNavigate(); // ページ遷移用のフック

  const handleTop = () => { // 「トップページに戻る」ボタン押下
    navigate('/top'); // トップページに移動
  };

  const handleChange = () => { // 「会員情報変更」ボタン押下
    navigate('/change'); // 会員情報変更画面に移動
  };

  const handleLogout = () => { // 「ログアウト」ボタン押下
    navigate('/logout'); // ログアウト画面に移動
  };

  const handleAccount = () => { // 「アカウント消去」ボタン押下
    navigate('/account'); // アカウント消去画面に移動
  };

  return (
    <div className={styles.body}>

      <div className={styles.left}>

        <button // 「トップページへ戻る」ボタン
          className={styles.topButton}
          onClick={handleTop}
        >
          トップページへ戻る
        </button>

        <div className={styles.advertisement}>広告</div>

      </div>

      <div className={styles.center}>

        <div className={styles.title}>会員情報選択</div>

        <button // 「会員情報変更」ボタン
          className={styles.changeButton}
          onClick={handleChange}
        >
          会員情報変更
        </button>

        <button // 「ログアウト」ボタン
          className={styles.logoutButton}
          onClick={handleLogout}
        >
          ログアウト
        </button>

        <button // 「アカウント消去」ボタン
          className={styles.accountButton}
          onClick={handleAccount}
        >
          アカウント消去
        </button>

      </div>

      <div className={styles.right}>
        <div className={styles.advertisement2}>広告</div>
      </div>
    </div>
  );
};

export default MemberPage;
