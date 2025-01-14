//利用規約同意画面
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './terms.module.css';
import fontstyles from '../font/font.module.css';
import pawloverslogo from './pawlovers.png';

const Terms = () => {
  const navigate = useNavigate();

  const handleTop = () => {
    navigate('/account_reg');
  };

  const handleUse = () => {
    navigate('/use');
  };

  return (
    <div className={fontstyles.fontFamily}>
      <div className={styles.body}>
        <div className={styles.term}>利用規約</div>

        <div className={styles.context}>
        <button
          onClick={handleUse}
          className={`${styles.use} ${fontstyles.fontFamily}`}
        >
          利用規約の閲覧
        </button>
          <p>
            本サービスを利用してくれて
            <br />ありがとニャン！<br />
            ぜひこのサービスで色々な動物たちと<br />
            出会ってくれると嬉しいワン！
          </p>
          <p>NeoZero.Inc</p>
          <img
          src={pawloverslogo}
          alt="pawloverslogo"
          className={styles.pawloversLogo}
        />
        </div>

        <button
          onClick={handleTop}
          className={`${styles.button} ${fontstyles.fontFamily}`}
        >
          利用規約に同意して次に進む
        </button>

        
      </div>
    </div>
  );
};

export default Terms;