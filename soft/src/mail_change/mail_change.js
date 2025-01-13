//メールアドレス変更
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './mail_change.module.css';
import fontstyles from '../font/font.module.css';

const MailChange = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    currentEmail: '',
    newEmail: '',
    currentPassword: ''
  });

  const handleTop = () => {
    navigate('/top');
  };

  const handleOk = () => {
    const { currentEmail, newEmail, currentPassword } = formData;

    if (!currentEmail || !newEmail || !currentPassword) {
      setErrorMessage('※未入力欄があります。');
      return;
    } else {
      //入力されてたら
      navigate('/change_info');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };

  return (
    <div className={fontstyles.fontFamily}>
    <div className={styles.body}>
      <div className={styles.left}>
        <button
          className={styles['main-button']}
          style={inputStyle}
          onClick={handleTop}
        >
          トップページへ戻る
        </button>
        <div className={styles.advertisement}>
          広告
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.mail}>メールアドレス変更</div>
        <p className={styles.p}>{errorMessage}</p>
        <input
          type="email"
          name="currentEmail"
          className={styles.input}
          placeholder="今のメールアドレス"
          value={formData.currentEmail}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="newEmail"
          className={styles.input}
          placeholder="新しいメールアドレス"
          value={formData.newEmail}
          style={inputStyle}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="currentPassword"
          className={styles.input}
          placeholder="今のパスワード"
          value={formData.currentPassword}
          onChange={handleInputChange}
        />
        <button
          className={styles.ok}
          onClick={handleOk}
          style={inputStyle}
        >
          OK
        </button>
      </div>

      <div className={styles.right}>
        <div className={styles.advertisement2}>
          広告
        </div>
      </div>
      </div>
    </div>
  );
};

export default MailChange;