//ログアウト画面
import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './logout.module.css'; // CSSモジュール(cssファイルかく)

const Logout = () => {
  const navigate = useNavigate(); // ページ遷移用

  const handleTop = () => { //「トップページ」ボタン押下 
    navigate('/top'); // トップページ
  };

  const handleok = () => { //「 はい」ボタン押下 
    navigate('/login'); // はいのページ
  };

  const handleno = () => { //「いいえ」ボタン押下 
    navigate('/member'); // いいえ
  };


  return (
    <div className={styles.body}>
    <div class="left">
      <button className={styles.topButton} onClick={handleTop}>トップページへ戻る</button>
      <div className={styles.advertisement}>広告</div> 
    </div>

    <div class="center">
      <div className={styles.logout}>ログアウト</div>
      <div id="white">
        <p>ログアウトするワン？</p>
        <button className={styles.ok} onClick={handleok}>はい</button>
        <button className={styles.no} onClik={handleno}>いいえ</button>
      </div>
    </div>

    <div class="right">
    <div className={styles.advertisement2}>広告</div>
    </div>
  </div>
    );
};

export default Logout;
