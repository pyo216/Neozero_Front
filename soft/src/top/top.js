//トップページ
import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './top.module.css'; // CSSモジュール
import fontstyles from '../font/font.module.css';
import pawloverslogoImg from './pawlovers.png'; // PawLoversロゴ画像
import TopleftImg from '../image/Topleft.png'; // 広告サンプル画像(288:600)
import ToprightImg from '../image/Topright.png'; // 広告サンプル画像(288:600)

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

//配列の作成
//配列の長さだけ投稿を表示
const posts = Array.from({ length: 10 }, (_, i) => i + 1); // 投稿データ（1～10の番号）
return (
  <div className={fontstyles.fontFamily}>
    <div className={styles.body}>
      <div className={styles.above}>
        <img
          src={pawloverslogoImg} // PawLoversロゴ画像
          alt="pawloverslogoImg" // 代替テキスト
          className={styles.pawloverslogoImg}
        />

        <button
          className={styles.postButton}
          onClick={handlePost}
          style={inputStyle}
        >
          投稿する
        </button>

        <button
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
            src={TopleftImg} // 広告サンプル
            alt="TopleftImg" // 代替テキスト
          />
        </div>

        <div className={styles.media}>
          {posts.map((post, index) => (
            <div key={index} className={styles.white}>
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
          ))}
        </div>

        <div className={styles.advertisement}>
          <img
            src={ToprightImg} // 広告サンプル
            alt="ToprightImg" // 代替テキスト
          />
        </div>
      </div>
    </div>
  </div>
);
};

export default TopPage;
