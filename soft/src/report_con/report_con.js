//アカウント通報(確認)画面
import React from 'react'; // React用
import fontstyles from '../font/font.module.css';
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './report_con.module.css'; // CSSモジュール
import Left1Img from '../image/Left1.png'; //259:550
import Right1Img from '../image/Right1.png'; //259:750

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
          <div className={styles.advertisement}>
            <img
              src={Left1Img} // 広告サンプル
              alt="Left1Img" // 代替テキスト
            />
          </div>
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
          <div className={styles.advertisement2}>
            <img
              src={Right1Img} // 広告サンプル
              alt="Right1Img" // 代替テキスト
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCon;
