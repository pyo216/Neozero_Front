import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './post.module.css';

const Post = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    caption: '',
    file: null
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleTop = () => {
    navigate('/top');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFormData(prev => ({
        ...prev,
        file: file
      }));
      
      // 画像プレビューの作成
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prev => ({
        ...prev,
        file: null
      }));
      setImagePreview(null);
    }
  };

  const handleSubmit = () => {
    // ここに投稿処理のロジックを追加
    console.log('投稿データ:', formData);
    navigate('/top');
  };

  return (
    <div className={styles.body}>
      <div className={styles.white}>
        <div className={styles.post}>
          <div className={styles.file}>
            {imagePreview ? (
              <div className={styles.previewContainer}>
                <img 
                  src={imagePreview} 
                  alt="プレビュー" 
                  className={styles.imagePreview}
                />
                <input
                  id="file"
                  type="file"
                  className={styles.input}
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </div>
            ) : (
              <div className={styles.uploadContainer}>
                <p>画像をアップロード</p>
                <input
                  id="file"
                  type="file"
                  className={styles.input}
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </div>
            )}
          </div>

          <div className={styles.form}>
            <div className={styles['form-group']}>
              <label htmlFor="title">タイトル</label>
              <input
                type="text"
                id="title"
                name="title"
                className={styles.input}
                placeholder="(11字以内)"
                value={formData.title}
                onChange={handleInputChange}
                maxLength={11}
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="caption">キャプション</label>
              <textarea
                id="caption"
                name="caption"
                className={styles.textarea}
                placeholder="(50字以内)"
                value={formData.caption}
                onChange={handleInputChange}
                maxLength={50}
              />
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <button
            type="button"
            onClick={handleTop}
            className={`${styles.button} ${styles.return}`}
          >
            戻る
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className={`${styles.button} ${styles.register}`}
          >
            登録
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;