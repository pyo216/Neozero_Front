//アカウント通報(確認)画面
import React from 'react'; // React用
import fontstyles from '../font/font.module.css';
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './report_con.module.css'; // CSSモジュール

const ReportCon = () => {
  const navigate = useNavigate(); // ページ遷移用

  const handletop = () => { //「トップページ」ボタン押下 
    navigate('/top'); // トップページに移動
  };

  const handleok = () => { //「はい」ボタン押下 
    navigate('/top'); // トップページに移動
  };

  const handleno = () => { //「いいえ」ボタン押下 
    navigate('/top'); // トップページに移動
  };

  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };


  return (
    <div className={fontstyles.fontFamily}>
      <div className={styles.body}>
        <div className={styles.left}>
          <button // 「トップページへ戻る」ボタン
            className={styles.button}
            onClick={handletop}
            style={inputStyle}
          >
            トップページへ戻る
          </button>
          <div className={styles.advertisement}>広告</div>
        </div>

        <div className={styles.center}>
          <div className={styles.title}>通報するニャン？</div>

          <div className={styles.user}>ユーザ名:◯◯◯◯◯◯◯◯◯◯◯◯</div>

          <div className={styles.white}>
            <div className={styles.post}>
              <div className={styles.picture}>画像</div>
              <div className={styles.info}>
                <div className={styles.follow}>フォロー</div>
                <div className={styles.push}>
                  <div className={styles.good}>いいね</div>
                  <div className={styles.money}>スパチャ</div>
                </div>
                <div className={styles.comment}>コメント</div>
                <div className={styles.report}>通報</div>
              </div>
            </div>
          </div>

          <div className={styles.buttons}>
            <button // 「はい」ボタン
              className={styles.okButton}
              onClick={handleok}
              style={inputStyle}
            >
              はい
            </button>
            <button // 「いいえ」ボタン
              className={styles.noButton}
              onClick={handleno}
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

export default ReportCon;
