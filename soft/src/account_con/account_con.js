// アカウント消去確認画面
import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './account_con.module.css'; // CSSモジュール

const AccountCon = () => {
  const navigate = useNavigate(); // ページ遷移用

  const handleTop = () => { // 「トップページへ戻る」ボタン押下
    navigate('/top'); // トップページに移動
  };

  const handleOk = () => { // 「同意してアカウント消去」ボタン押下
    navigate('/login'); // ログインページに移動
  };

  const handleNo = () => { // 「いいえ」ボタン押下
    navigate('/member'); // 会員情報選択画面に移動
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

        <div className={styles.title}>ログアウト</div>
        <div className={styles.white}>
          <div className={styles.con}>
            一度消去したアカウントは<br/>
            <span>元には戻せません</span><br/>
            ほんとにいいニャン？<br/>
          </div>

          <button // 「同意してアカウント消去」ボタン
            className={styles.okButton}
            onClick={handleOk}
          >
            同意してアカウント消去
          </button>

          <button // 「いいえ」ボタン
            className={styles.noButton}
            onClick={handleNo}
          >
            いいえ
          </button>

        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.advertisement2}>広告</div>
      </div>
    </div>
  );
};

export default AccountCon;
