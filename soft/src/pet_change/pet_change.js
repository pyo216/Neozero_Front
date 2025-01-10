import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './pet_change.module.css';

const PetChange = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);

  const handleTop = () => {
    navigate('/top');
  };

  const handlepetcon = () => {
    navigate('/pet_con');
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
    <div className={styles.body}>
      <div className={styles.left}>
        <button 
          className={styles['main-btn']}
          onClick={handleTop}
        >
          トップページへ戻る
        </button>
        <div className={styles.advertisement}>広告</div>
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
            />
            <textarea 
              placeholder="フリーコメント"
              className={styles.textarea}
            ></textarea>
          </div>
        </div>
        <button 
          className={styles['ok-btn']}
          onClick={handlepetcon}
        >
          変更
        </button>
      </div>

      <div className={styles.right}>
        <div className={styles.advertisement2}>広告</div>
      </div>
    </div>
  );
};

export default PetChange;