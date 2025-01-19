import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './mail_change.module.css';
import fontstyles from '../font/font.module.css';
import Left1Img from '../image/Left1.png';
import Right1Img from '../image/Right1.png';

const MailChange = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    currentEmail: '',
    newEmail: '',
    currentPassword: ''
  });

  const validatePassword = (password) => {
    const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;
    return passwordRegex.test(password);
  };

  const handleTop = () => {
    navigate('/top');
  };

  const handleOk = async() => {
    const { currentEmail, newEmail, currentPassword } = formData;

    if (!currentEmail) {
      setErrorMessage('※現在のメールアドレスを入力してくださいニャン。');
      return;
    }

    if (!newEmail) {
      setErrorMessage('※新しいメールアドレスを入力してくださいワン。');
      return;
    }

    if (!currentPassword) {
      setErrorMessage('※パスワードを入力してくださいニャン。');
      return;
    }

    if (!validatePassword(currentPassword)) {
      setErrorMessage('※パスワードは半角英数字8～16文字で入力してくださいワン。');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/mail_change/mail_change', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentEmail, newEmail, currentPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.result === 0) {
          setErrorMessage('');
          navigate('/change_info');
        } else {
          setErrorMessage('※入力情報が間違っていますニャン。');
        }
      } else {
        setErrorMessage(data.error || '※メール変更に失敗しましたワン。');
      }
    } catch (error) {
      setErrorMessage('※サーバーとの通信に失敗しましたニャン。');
    };
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
            <img
              src={Left1Img}
              alt="Left1Img"
            />
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.mail}>メールアドレス変更</div>
          <p className={styles.p}>{errorMessage}</p>
          
          <div className={styles['form-group']}>
            <label htmlFor="currentEmail">現在のメールアドレス</label>
            <input
              type="email"
              id="currentEmail"
              name="currentEmail"
              className={styles.input}
              placeholder="現在のメールアドレスを入力してください"
              value={formData.currentEmail}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="newEmail">新しいメールアドレス</label>
            <input
              type="email"
              id="newEmail"
              name="newEmail"
              className={styles.input}
              placeholder="新しいメールアドレスを入力してください"
              value={formData.newEmail}
              style={inputStyle}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles['form-group']}>
          <label htmlFor="currentPassword">現在のパスワード</label>
          <input
            type="password"
            name="currentPassword"
            className={styles.input}
            placeholder="現在のパスワードを入力してください"
            value={formData.currentPassword}
            onChange={handleInputChange}
            style={inputStyle}
          />
          </div>
          <span className={styles.passwordHint}>※半角英数字8～16文字</span>

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
            <img
              src={Right1Img}
              alt="Right1Img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailChange;