import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './mypage.module.css'; // CSSモジュール

const MyPage = () => {
  const navigate = useNavigate(); // ページ遷移用

  const handleTop = () => { // 「トップページへ戻る」ボタン押下
    navigate('/top'); // トップページに移動
  };

  const handlePet = () => { // 「ペット情報変更」ボタン押下
    navigate('/pet_change'); // ペット情報変更画面に移動
  };

  const handleNyakama = () => { // 「Nyakama」ボタン押下
    navigate('/nyakama'); // Nyakama画面に移動
  };

  const handleMember = () => { // 「会員情報選択」ボタン押下
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

        <button // 「ペット情報変更」ボタン
          className={styles.petButton}
          onClick={handlePet}
        >
          ペット情報変更
        </button>

        <button // 「Nyakama」ボタン
          className={styles.nyakamaButton}
          onClick={handleNyakama}
        >
          Nyakama
        </button>

        <button // 「会員情報選択」ボタン
          className={styles.memberButton}
          onClick={handleMember}
        >
          会員情報選択
        </button>

        <div className={styles.inquiry}>
          問い合わせは<br/>
          general@ml.kochi-tech.ac.jp<br/>
          まで
        </div>
      </div>

      <div className={styles.center}>

        <div className={styles.title}>マイページ</div>
        <div className={styles.media}></div>

      </div>

      <div className={styles.right}>
        <div className={styles.advertisement}>広告</div>
      </div>

    </div>
  );
};

export default MyPage;
