//ペット情報変更
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './pet_change.module.css';
import fontstyles from '../font/font.module.css';
import samplePet1Img from '../image/samplePet1.png'; //259:550
import samplePet2Img from '../image/samplePet2.png'; //259:750

const PetChange = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);

  const handleTop = () => {
    navigate('/top');
  };

  const handlepetcon = () => {
    navigate('/pet_con');
  };
  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={fontstyles.fontFamily}>
    <div className={styles.body}>
      <div className={styles.left}>
        <button
          className={styles['main-btn']}
          onClick={handleTop}
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
        <div className={styles.pet}>ペット情報変更</div>
        <div className={styles.white}>
          <div className={styles.photoContainer}>
            <div className={styles.photo}>
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="ペットの画像"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                />
              ) : (
                <div>🐾</div>
              )}
            </div>
            <button
              className={styles.imageButton}
              style={inputStyle}
              onClick={() => document.getElementById('imageInput').click()}
            >
              画像を挿入
            </button>
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>

          <div className={styles.information}>
            <input
              type="text"
              placeholder="名前"
              className={styles.input}
              style={inputStyle}
            />
            <textarea
              placeholder="フリーコメント"
              className={styles.textarea}
              style={inputStyle}
            ></textarea>
          </div>
        </div>
        <button
          className={styles['ok-btn']}
          onClick={handlepetcon}
          style={inputStyle}
        >
          変更
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

export default PetChange;