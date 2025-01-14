//利用規約
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './use.module.css';
import fontstyles from '../font/font.module.css';

const Use = () => {
  const navigate = useNavigate();

  const handleterms = () => {
    navigate('/terms');
  };

  return (
    <div className={fontstyles.fontFamily}>
      <div className={styles.body}>
        <div className={styles.term}>利用規約</div>

        <button
          onClick={handleterms}
          className={`${styles.button} ${fontstyles.fontFamily}`}
        >
         同意画面に戻る
        </button>

        <div className={styles.context}>
        
          <p>
            利用規約つらつら <br />
          </p>
          <p>NeoZero.Inc</p>
        </div>
      </div>
    </div>
  );
};

export default Use;