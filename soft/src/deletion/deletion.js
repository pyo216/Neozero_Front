//投稿消去画面
import React from 'react'; // React用
import fontstyles from '../font/font.module.css';
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './deletion.module.css'; // CSSモジュール(cssファイルかく)
import samplePet1Img from '../image/samplePet1.png'; //259:550
import samplePet2Img from '../image/samplePet2.png'; //259:750

const Deletion = () => {
  //ここから下変える
  const navigate = useNavigate(); // ページ遷移用

  const handletop = () => { //「トップページ」ボタン押下 
    navigate('/top'); // トップページに移動
  };

  const handledeletion = () => { //「消去」ボタン押下 
    navigate('/mypage'); // マイページに移動
  };

  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };


  return (
     <div className={fontstyles.fontFamily}>
    <div className={styles.body}>
      <div className={styles.left}>
        <button // 「トップページへ戻る」ボタン
          className={styles.button}
          onClick={handletop}
          style={inputStyle}
        >
          トップページへ戻る
        </button>
        <div className={styles.advertisement}>
          <img
            src={samplePet1Img} // 広告サンプル
            alt="samplePet1Img" // 代替テキスト
          />
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.delete}>投稿を消去して<br />
          いいワン？
        </div>
        <button // 「トップページへ戻る」ボタン
          className={styles.ok}
          onClick={handledeletion}
          style={inputStyle}
        >
          消去
        </button>
      </div>

      <div className={styles.right}>
        <div className={styles.advertisement2}>
          <img
            src={samplePet2Img} // 広告サンプル
            alt="samplePet2Img" // 代替テキスト
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Deletion;
