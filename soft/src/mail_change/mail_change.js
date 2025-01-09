import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './mail_change.module.css';

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
    }else{
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

  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <button 
          className={styles['main-button']}
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
        />
        <input
          type="email"
          name="newEmail"
          className={styles.input}
          placeholder="新しいメールアドレス"
          value={formData.newEmail}
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
  );
};

export default MailChange;