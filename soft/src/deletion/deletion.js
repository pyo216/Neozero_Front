//投稿消去画面
import React from 'react'; // React用
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './deletion.module.css'; // CSSモジュール(cssファイルかく)

const Deletion = () => {
    //ここから下変える
  const navigate = useNavigate(); // ページ遷移用

  const handletop = () => { //「トップページ」ボタン押下 
    navigate('/top'); // トップページに移動
  };

  const handledeletion = () => { //「消去」ボタン押下 
    navigate('/deletion'); // 投稿消去画面に移動
  };


  return (
    <div className={styles.body}>
    <div className={styles.left}>
    <button // 「トップページへ戻る」ボタン
          className={styles.button}
          onClick={handletop}
>
 トップページへ戻る
</button>
      <div className={styles.advertisement}>広告</div>
    </div>

    <div className={styles.center}>
      <div className={styles.delete}>投稿を消去して<br/>
      いいワン？
      </div>
      <button // 「トップページへ戻る」ボタン
          className={styles.ok}
          onClick={handledeletion}
>
 消去
</button>
    </div>

    <div className={styles.right}>
      <div className={styles.advertisement2}>広告</div>
    </div>
  </div>
    );
};

export default Deletion;
