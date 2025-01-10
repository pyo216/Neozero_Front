//ペット変更確認画面
import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './pet_con.module.css'; // CSSモジュール(cssファイルかく)

const PetCon = () => {
    //ここから下変える
  const navigate = useNavigate(); // ページ遷移用

  const handleTop = () => { // 「トップページへ戻る」ボタン押下
    navigate('/top'); // トップページに移動
  };

  const handleok = () => { // 「OK」ボタン押下
    navigate('/pet'); // OKページに移動
  };

  const handleno = () => { // 「NO」ボタン押下
    navigate('/pet'); // NOページに移動
  };

return (
  <div className={styles.body}>
  <div className={styles.left}>
    <button 
      className={styles.topbutton} 
      onclick={handleTop}
    >
      トップページへ戻る
    </button>

    <div className={styles.advertisement}>広告</div>
  </div>

  <div className={styles.enter}>
    <div className={styles.account}>ペット情報変更</div>
    <div className={styles.white}>
      <p className={styles.con}>KIMIの情報を<br/>
          本当に変更<br/>
          していいニャン？<br/>
      </p>
      <button 
        className={styles.okbutton} 
        onclick={handleok}
      >
        変更を確定
      </button>

      <button 
        className={styles.nobutton}
        onclick={handleno}
      >
        いいえ
      </button>
    </div>
  </div>

  <div className={styles.right}>
    <div className={styles.advertisement2}>広告</div>
  </div>
</div>
    );
}

export default PetCon;
