import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './post.module.css';
import fontstyles from '../font/font.module.css';

const Post = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    caption: '',
    file: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({
    title: '',
    caption: '',
    file: ''
  });

  const handleTop = () => {
    navigate('/top');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 入力時のエラーメッセージをクリア
    setErrors(prev => ({
      ...prev,
      [name]: ''
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
      // ファイルエラーをクリア
      setErrors(prev => ({
        ...prev,
        file: ''
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        file: null
      }));
      setImagePreview(null);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      title: '',
      caption: '',
      file: ''
    };

    // 画像のバリデーション
    if (!formData.file) {
      newErrors.file = '※画像をアップロードしてほしいニャン';
      isValid = false;
    }

    // タイトルのバリデーション
    if (formData.title.length > 11) {
      newErrors.title = '※タイトルは11字以内で入力してほしいワン';
      isValid = false;
    }

    // キャプションのバリデーション
    if (formData.caption.length > 50) {
      newErrors.caption = '※キャプションは50字以内で入力してほしいニャン';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // バリデーション成功時の処理
      console.log('投稿データ:', formData);
      navigate('/top');
    }
  };

  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };

  return (
    <div className={fontstyles.fontFamily}>
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
                    style={inputStyle}
                  />
                  {errors.file && <div className={styles.errorMessage}>{errors.file}</div>}
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
                  style={inputStyle}
                  onChange={handleInputChange}
                />
                {errors.title && <div className={styles.errorMessage}>{errors.title}</div>}
              </div>
              <div className={styles['form-group']}>
                <label htmlFor="caption">キャプション</label>
                <textarea
                  id="caption"
                  name="caption"
                  className={styles.textarea}
                  placeholder="(50字以内)"
                  style={inputStyle}
                  value={formData.caption}
                  onChange={handleInputChange}
                />
                {errors.caption && <div className={styles.errorMessage}>{errors.caption}</div>}
              </div>
            </div>
          </div>

          <div className={styles.buttons}>
            <button
              type="button"
              onClick={handleTop}
              style={inputStyle}
              className={`${styles.button} ${styles.return}`}
            >
              戻る
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              style={inputStyle}
              className={`${styles.button} ${styles.register}`}
            >
              投稿
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;