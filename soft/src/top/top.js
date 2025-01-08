import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './top.module.css'; // CSSモジュール
import pawloverslogoImg from './pawlovers.png'; // PawLoversロゴ画像

const TopPage = () => {
  const navigate = useNavigate(); // ページ遷移用

  const handlePost = () => { // 「投稿する」ボタン押下
    navigate('/post'); // 投稿ページに移動
  };

  const handleMypage = () => { // 「マイページ」ボタン押下
    navigate('/mypage'); // マイページに移動
  };

  return (
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
        >
          投稿する
        </button>

        <button // 「マイページ」ボタン
          className={styles.mypageButton}
          onClick={handleMypage}
        >
          マイページ
        </button>
      </div>

      <div className={styles.bottom}>
        <div className={styles.advertisement}>広告</div>
        <div className={styles.media}></div>
        <div className={styles.advertisement}>広告</div>
      </div>

    </div>
  );
};

export default TopPage;
