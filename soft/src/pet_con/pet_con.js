//ペット変更確認画面
import React from 'react'; // React用
import fontstyles from '../font/font.module.css';
import { useNavigate } from 'react-router-dom'; // ページ遷移用
import styles from './pet_con.module.css'; // CSSモジュール(cssファイルかく)
import Left1Img from '../image/Left1.png'; //259:550
import Right1Img from '../image/Right1.png'; //259:750


const PetCon = () => {
  //ここから下変える
  const navigate = useNavigate(); // ページ遷移用

  const handleTop = () => { // 「トップページへ戻る」ボタン押下
    navigate('/top'); // トップページに移動
  };

  const handlepet = () => { // 「OK」ボタン押下
    navigate('/pet_change'); // ペット変更画面に遷移
  };

  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };


  return (
    <div className={fontstyles.fontFamily}>
    <div className={styles.body}>
      <div className={styles.left}>
        <button
          className={styles.topbutton}
          onClick={handleTop}
          style={inputStyle}
        >
          トップページへ戻る
        </button>
        <div className={styles.advertisement}>
          <img
            src={Left1Img} // 広告サンプル
            alt="Left1Img" // 代替テキスト
          />
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.account}>ペット情報変更</div>
        <div className={styles.white}>
          KIMIの情報を<br />
          本当に変更<br />
          していいニャン？<br />
          <button
            className={styles.okbutton}
            onClick={handlepet}
            style={inputStyle}
          >
            変更を確定
          </button>
          <button
            className={styles.nobutton}
            onClick={handlepet}
            style={inputStyle}
          >
            いいえ
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.advertisement2}>
          <img
            src={Right1Img} // 広告サンプル
            alt="Right1Img" // 代替テキスト
          />
        </div>
      </div>

    </div>
    </div>
  );
};

export default PetCon;
