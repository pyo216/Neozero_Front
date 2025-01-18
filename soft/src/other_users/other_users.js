//対象ユーザの投稿画面
import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './other_users.module.css'; // CSSモジュール
import fontstyles from '../font/font.module.css';
import Left2Img from '../image/Left2.png'; //259:550
import Right2Img from '../image/Right2.png'; //259:750


const OtherUsers = () => {
  const navigate = useNavigate(); // ページ遷移用

  const handleTop = () => { // 「トップページに戻る」ボタン押下
    navigate('/top'); // トップページに移動
  };

  const handleFollow = () => { // 「フォロー」ボタン押下
  };

  const handleReport = () => { // 「通報」ボタン押下
    navigate('/report_con'); 
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

        <div className={styles.advertisement}>
          <img
            src={Left2Img} // 広告サンプル
            alt="Left2Img" // 代替テキスト
          />
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.title}>◯◯のページ
        </div>
        <div className={styles.media}>
            <div className={styles.white}>
              <div className={styles.post}>
                <div className={styles.picture}>画像</div>
                <div className={styles.info}>
                  <button
                    className={styles.followButton}
                    onClick={handleFollow}
                    style={inputStyle}
                  >
                    フォロー
                  </button>
                  <div className={styles.push}>
                    <div className={styles.good}>いいね</div>
                    <div className={styles.money}>スパチャ</div>
                  </div>
                  <div className={styles.comment}>コメント</div>
                  <button
                    className={styles.reportButton}
                    onClick={handleReport}
                    style={inputStyle}
                  >
                    通報
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.white}>
              <div className={styles.post}>
                <div className={styles.picture}>画像</div>
                <div className={styles.info}>
                  <button
                    className={styles.followButton}
                    onClick={handleFollow}
                    style={inputStyle}
                  >
                    フォロー
                  </button>
                  <div className={styles.push}>
                    <div className={styles.good}>いいね</div>
                    <div className={styles.money}>スパチャ</div>
                  </div>
                  <div className={styles.comment}>コメント</div>
                  <button
                    className={styles.reportButton}
                    onClick={handleReport}
                    style={inputStyle}
                  >
                    通報
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.white}>
              <div className={styles.post}>
                <div className={styles.picture}>画像</div>
                <div className={styles.info}>
                  <button
                    className={styles.followButton}
                    onClick={handleFollow}
                    style={inputStyle}
                  >
                    フォロー
                  </button>
                  <div className={styles.push}>
                    <div className={styles.good}>いいね</div>
                    <div className={styles.money}>スパチャ</div>
                  </div>
                  <div className={styles.comment}>コメント</div>
                  <button
                    className={styles.reportButton}
                    onClick={handleReport}
                    style={inputStyle}
                  >
                    通報
                  </button>
                </div>
              </div>
            </div>
            
          </div>
      </div>

      <div className={styles.right}>
        <div className={styles.advertisement2}>
          <img
            src={Right2Img} // 広告サンプル
            alt="Right2Img" // 代替テキスト
          />
        </div>
      </div>
    </div>
    </div>

  );
}
export default OtherUsers;
