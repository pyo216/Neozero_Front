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

  const handlepet = () => { // 「OK」ボタン押下
    navigate('/pet_change'); // ペット変更画面に遷移
  };


return (
  <div className={styles.body}>
   <div className={styles.left}>
    <button 
        className={styles.topbutton}
        onClick={handleTop}
           >
                トップページへ戻る
              </button>
      <div className={styles.advertisement}>広告</div>
    </div>

    <div className={styles.center}>
      <div className={styles.account}>ペット情報変更</div>
      <div className={styles.white}>
        KIMIの情報を<br/>
            本当に変更<br/>
            していいニャン？<br/>
      <button 
         className={styles.okbutton}
         onClick={handlepet}
        >
                変更を確定
              </button>
        <button 
         className={styles.nobutton}
         onClick={handlepet}
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
};

export default PetCon;
