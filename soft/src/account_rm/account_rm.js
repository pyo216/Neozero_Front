//アカウント消去
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './account_rm.module.css';
import fontstyles from '../font/font.module.css';

const RmAccount = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePassword = (password) => {
    const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;
    return passwordRegex.test(password);
  };

  const handleOkClick = () => {
    if (!email) {
      setErrorMessage('※メールアドレスを入力してください。');
      return;
    }

    if (!password) {
      setErrorMessage('※パスワードを入力してください。');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage('※パスワードは半角英数字8～16文字で入力してください。');
      return;
    }

    //if (email === 'admin@example.com' && password === 'password123') {
    navigate('/account_con');
    //} else {
    //setErrorMessage('※間違っています。もう一度入力してください。');
    //}
  };


  const handleTopClick = () => {
    navigate('/top');
  };

  const inputStyle = {
    fontFamily: 'CraftMincho, serif'
  };

  return (
    <div className={fontstyles.fontFamily}>
      <div className={styles.body}>
        <div className={styles.left}>
          <button
            type="button"
            onClick={handleTopClick}
            style={inputStyle}
            className={styles.mainBtn}
          >
            トップページに戻る
          </button>
          <div className={styles.advertisement}>広告</div>
        </div>

        <div className={styles.center}>
          <div className={styles.account}>アカウント消去</div>
          <p className={styles.errorMessage}>{errorMessage}</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            placeholder="メールアドレス"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            placeholder="パスワード"
          />

          <p className={styles.passwordHint}>
            ※半角英数字8～16文字
          </p>

          <button
            type="button"
            onClick={handleOkClick}
            style={inputStyle}
            className={styles.okButton}
          >
            OK
          </button>
        </div>

        <div className={styles.right}>
          <div className={styles.advertisement2}>広告</div>
        </div>
      </div>
    </div>
  );
};

export default RmAccount;