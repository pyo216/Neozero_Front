// アカウント消去確認画面
import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './account_con.module.css'; // CSSモジュール
import fontstyles from '../font/font.module.css';

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

  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };

  return (
    <div className={fontstyles.fontFamily}>
      <div className={styles.body}>

        <div className={styles.left}>

          <button // 「トップページへ戻る」ボタン
            className={styles.topButton}
            onClick={handleTop}
            style={inputStyle}
          >
            トップページへ戻る
          </button>

          <div className={styles.advertisement}>広告</div>
        </div>


        <div className={styles.center}>

          <div className={styles.title}>アカウント消去</div>
          <div className={styles.white}>
            <p className={styles.con}>
              一度消去したアカウントは<br />
              <span className={styles.red}>元には戻せません</span><br />
              ほんとにいいニャン？<br />
            </p>

            <button // 「同意してアカウント消去」ボタン
              className={styles.okButton}
              onClick={handleOk}
              style={inputStyle}
            >
              同意してアカウント消去
            </button>

            <button // 「いいえ」ボタン
              className={styles.noButton}
              onClick={handleNo}
              style={inputStyle}
            >
              いいえ
            </button>

          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.advertisement2}>広告</div>
        </div>
      </div>
    </div>
  );
};

export default AccountCon;
