//トップページ
import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './top.module.css'; // CSSモジュール
import fontstyles from '../font/font.module.css';
import pawloverslogoImg from './pawlovers.png'; // PawLoversロゴ画像
import sampleImg from './sample.png'; // 広告サンプル画像(288:600)

const TopPage = () => {
  const navigate = useNavigate(); // ページ遷移用

  const handlePost = () => { // 「投稿する」ボタン押下
    navigate('/post'); // 投稿画面に移動
  };

  const handleMypage = () => { // 「マイページ」ボタン押下
    navigate('/mypage'); // マイページに移動
  };

  const handleFollow = () => { // 「フォロー」ボタン押下
  };

  const handleReport = () => { // 「通報」ボタン押下
    navigate('/report_con'); // アカウント通報画面に移動
  };

  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };


  return (
    <div className={fontstyles.fontFamily}>
      <div className={styles.body}>

        <div className={styles.above}>
          <img
            src={pawloverslogoImg} // PawLoversロゴ画像
            alt="pawloverslogoImg" // 代替テキスト
            className={styles.pawloverslogoImg}
          />

          <button // 「投稿する」ボタン
            className={styles.postButton}
            onClick={handlePost}
            style={inputStyle}
          >
            投稿する
          </button>

          <button // 「マイページ」ボタン
            className={styles.mypageButton}
            onClick={handleMypage}
            style={inputStyle}
          >
            マイページ
          </button>
        </div>

        <div className={styles.bottom}>
          <div className={styles.advertisement}>
            <img
              src={sampleImg} // 広告サンプル
              alt="sampleImg" // 代替テキスト
            />
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

          
          <div className={styles.advertisement}>
          <img
              src={sampleImg} // 広告サンプル
              alt="sampleImg" // 代替テキスト
          />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopPage;
