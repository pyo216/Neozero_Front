//トップページ
import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './top.module.css'; // CSSモジュール
import fontstyles from '../font/font.module.css';
import pawloverslogoImg from './pawlovers.png'; // PawLoversロゴ画像

const TopPage = () => {
  const navigate = useNavigate(); // ページ遷移用

  const handlePost = () => { // 「投稿する」ボタン押下
    navigate('/post'); // 投稿画面に移動
  };

  const handleMypage = () => { // 「マイページ」ボタン押下
    navigate('/mypage'); // マイページに移動
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
        <div className={styles.advertisement}>広告</div>
        <div className={styles.media}></div>
        <div className={styles.advertisement}>広告</div>
      </div>

      </div>
    </div>
  );
};

export default TopPage;
